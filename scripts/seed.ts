// Seeding Script for Contextra OS Firestore
import { adminDb } from '../src/server/lib/firebase-admin';

const WORKSPACE_ID = 'default_workspace';

const SEED_NODES = [
  { id: 'n1', label: 'Contextra Core', type: 'System', properties: { status: 'active', version: '2.4' } },
  { id: 'n2', label: 'Gemini 2.5 Flash', type: 'Intelligence', properties: { provider: 'Google', model: 'flash-2.5-preview' } },
  { id: 'n3', label: 'Autonomous Research-X', type: 'Agent', properties: { task: 'Macroeconomic Synthesis', rate: '0.42 tflops' } },
  { id: 'n4', label: 'Vector Indexer', type: 'Database', properties: { indexName: 'contextra-semantic-embeddings', count: 1242 } },
  { id: 'n5', label: 'Vellum Memory Timeline', type: 'System', properties: { retention: 'persistent' } },
  { id: 'n6', label: 'Macro Trends Q3', type: 'Concept', properties: { certainty: '0.94' } },
  { id: 'n7', label: 'Global Trade Policy', type: 'Concept', properties: { sector: 'Energy' } }
];

async function seedDatabase() {
  console.log('[SEED] Initializing Contextra OS seeding pipeline...');
  try {
    const wsRef = adminDb.collection('workspaces').doc(WORKSPACE_ID);
    await wsRef.set({
      id: WORKSPACE_ID,
      name: 'Primary Synthesis Space',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    console.log(`[SEED] Seeding workspace: ${WORKSPACE_ID}`);

    const nodesCollection = wsRef.collection('nodes');

    // Clean existing nodes to avoid duplicates
    const existingNodes = await nodesCollection.get();
    if (existingNodes.size > 0) {
      console.log(`[SEED] Cleaning ${existingNodes.size} existing nodes...`);
      const batch = adminDb.batch();
      existingNodes.docs.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    }

    // Insert seed nodes
    for (const node of SEED_NODES) {
      await nodesCollection.doc(node.id).set({
        ...node,
        workspaceId: WORKSPACE_ID,
        createdAt: new Date().toISOString()
      });
      console.log(`[SEED] Seeded node: ${node.label} (${node.type})`);
    }

    console.log('[SEED] Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('[SEED] Database seeding failed:', err);
    process.exit(1);
  }
}

seedDatabase();
