import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import helmet from 'helmet';
import { Server } from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';

import { ResearchAgent } from './agents/researchAgent';
import { extractEntities, copilotChat } from './services/gemini';
import { adminDb } from './lib/firebase-admin';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = 3000;
const researchAgentInstance = new ResearchAgent();

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for Vite dev
}));
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Example Semantic API (Interactive Graph Retrieval)
app.post('/api/semantic/graph/query', async (req, res) => {
  const { workspaceId } = req.body;
  const wsId = workspaceId || 'default_workspace';
  try {
    const nodesSnap = await adminDb.collection('workspaces')
      .doc(wsId)
      .collection('nodes')
      .get();
    
    let nodes = nodesSnap.docs.map(doc => doc.data());
    
    if (nodes.length === 0) {
      nodes = [
        { id: 'n1', label: 'Contextra OS', type: 'System', properties: {} },
        { id: 'n2', label: 'Semantic Graph', type: 'Intelligence', properties: {} },
        { id: 'n3', label: 'Autonomous Agents', type: 'Agent', properties: {} },
        { id: 'n4', label: 'Vector Index', type: 'Database', properties: {} }
      ];
    }

    const edges = [
      { from: 'n1', to: 'n2', rel: 'implements' },
      { from: 'n1', to: 'n3', rel: 'orchestrates' },
      { from: 'n2', to: 'n4', rel: 'indexed_by' }
    ];

    res.json({ nodes, edges });
  } catch (err: any) {
    res.status(500).json({ error: 'Graph query failed: ' + err.message });
  }
});

// Ingest documents
app.post('/api/documents/ingest', async (req, res) => {
  const { url, workspaceId } = req.body;
  const wsId = workspaceId || 'default_workspace';
  try {
    const mockContent = `Ingested research material from ${url || 'uploaded document'}. Contextra Semantic Intelligence Operating System integrates multi-model AI routing (OpenAI, Gemini, Claude) with vector search and knowledge graphs to deliver high-precision synthesis and automated citations.`;
    const entities = await extractEntities(mockContent);
    
    for (const node of entities.nodes) {
      const nodeRef = adminDb.collection('workspaces')
        .doc(wsId)
        .collection('nodes')
        .doc();
      
      await nodeRef.set({
        id: nodeRef.id,
        workspaceId: wsId,
        label: node.label,
        type: node.type,
        properties: {},
        createdAt: new Date().toISOString()
      });
    }

    res.json({ 
      message: 'Ingestion complete', 
      extractedNodesCount: entities.nodes.length,
      docId: 'doc_' + Math.random().toString(36).substr(2,9) 
    });
  } catch (err: any) {
    console.error("Ingestion failed:", err);
    res.status(500).json({ error: 'Ingestion failed: ' + err.message });
  }
});

app.post('/api/agents/spawn', async (req, res) => {
  const { goal, workspaceId, agentId } = req.body;
  const wsId = workspaceId || 'default_workspace';
  const agId = agentId || 'agent_alpha';
  
  researchAgentInstance.runTask({ goal, workspaceId: wsId, agentId: agId })
    .catch(err => console.error("ResearchAgent run failed:", err));

  res.json({ status: 'SPAWNED', goal, agentId: agId });
});

app.post('/api/copilot/chat', async (req, res) => {
  const { message, history, context } = req.body;
  try {
    const reply = await copilotChat(history || [], message, context || '');
    res.json({ reply });
  } catch (err: any) {
    res.status(500).json({ error: 'Copilot chat failed: ' + err.message });
  }
});

app.get('/api/graph/stats', (req, res) => {
  res.json({
    nodes: 1242,
    edges: 4892,
    entropy: 0.42,
    lastSync: new Date().toISOString()
  });
});

// Socket.IO for Realtime Collaboration
io.on('connection', (socket) => {
  socket.on('join-workspace', (workspaceId) => {
    socket.join(`workspace:${workspaceId}`);
  });
  socket.on('cursor-move', (data) => {
    socket.to(`workspace:${data.workspaceId}`).emit('cursor-update', {
      userId: data.userId,
      position: data.position
    });
  });
});

async function setupVite() {
  if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }
}

setupVite().then(() => {
  if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    server.listen(PORT, '0.0.0.0', () => {
      console.log(`[CONTEXTRA] OS active on http://0.0.0.0:${PORT}`);
    });
  }
});

export default app;
