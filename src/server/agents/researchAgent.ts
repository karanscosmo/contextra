import { extractEntities, getEmbeddings } from '../services/gemini';
import { adminDb } from '../lib/firebase-admin';
import admin from 'firebase-admin';

export interface AgentTask {
  workspaceId: string;
  agentId: string;
  goal: string;
}

export class ResearchAgent {
  async runTask(task: AgentTask) {
    const runRef = adminDb.collection('workspaces')
      .doc(task.workspaceId)
      .collection('agentRuns')
      .doc();

    await runRef.set({
      id: runRef.id,
      agentId: task.agentId,
      workspaceId: task.workspaceId,
      status: 'RUNNING',
      logs: [`Started research for goal: ${task.goal}`],
      startedAt: new Date().toISOString()
    });

    try {
      // 1. Plan (Simplified)
      await this.log(runRef, "Planning research steps...");
      
      // 2. Search & Scrape (In a real app, this would use Tavily/SerpAPI)
      // For this demo, we'll simulate finding information.
      const mockInformation = "Contextra is a semantic intelligence system. It uses knowledge graphs and LLMs to assist researchers.";
      
      // 3. Process Information
      await this.log(runRef, "Extracting semantic entities...");
      const entities = await extractEntities(mockInformation);
      
      // 4. Update Knowledge Graph
      await this.log(runRef, `Saving ${entities.nodes.length} nodes to graph...`);
      for (const node of entities.nodes) {
        const nodeRef = adminDb.collection('workspaces')
          .doc(task.workspaceId)
          .collection('nodes')
          .doc();
        
        await nodeRef.set({
          id: nodeRef.id,
          workspaceId: task.workspaceId,
          label: node.label,
          type: node.type,
          properties: {},
          createdAt: new Date().toISOString()
        });
      }

      await runRef.update({
        status: 'SUCCESS',
        endedAt: new Date().toISOString(),
        logs: admin.firestore.FieldValue.arrayUnion("Research cycle complete.")
      });

    } catch (error: any) {
      console.error("Agent failed:", error);
      await runRef.update({
        status: 'FAILED',
        logs: admin.firestore.FieldValue.arrayUnion(`Error: ${error.message}`)
      });
    }
  }

  private async log(ref: any, msg: string) {
    await ref.update({
      logs: admin.firestore.FieldValue.arrayUnion(`[${new Date().toLocaleTimeString()}] ${msg}`)
    });
  }
}
