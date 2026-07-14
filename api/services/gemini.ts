import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("GEMINI_API_KEY not found in environment. AI features will be disabled.");
}

const ai = new GoogleGenAI({
  apiKey: API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function generateSemanticSearchQuery(input: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Convert the following natural language research query into a structured semantic search object.
    Input: "${input}"
    Output JSON format: { "entities": [], "relationships": [], "intent": "" }`
  });
  return response.text ?? '';
}

export async function getEmbeddings(text: string) {
  const result = await ai.models.embedContent({
    model: 'gemini-embedding-2-preview',
    contents: [text]
  });
  return result.embeddings?.[0]?.values ?? [];
}

export async function copilotChat(history: any[], message: string, context: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Context: ${context}\n\nHuman: ${message}`,
    config: {
      systemInstruction: "You are the Contextra Semantic Intelligence OS. Use the provided context to answer research questions with high precision and citations."
    }
  });
  return response.text ?? '';
}

export async function extractEntities(text: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Extract semantic entities and their relationships from the following text. 
    Output as JSON strictly: { "nodes": [{ "label": string, "type": string }], "edges": [{ "from": string, "to": string, "rel": string }] }
    Text: ${text.substring(0, 5000)}`
  });

  try {
    const cleaned = response.text?.replace(/```json/g, '').replace(/```/g, '').trim() || "{}";
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Failed to parse entity extraction:", e);
    return { nodes: [], edges: [] };
  }
}
