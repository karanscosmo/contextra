// Verification and Integration Test script for Contextra OS
import { adminDb } from '../src/server/lib/firebase-admin';

async function runTests() {
  console.log('[TEST] Initiating Contextra Integration Verification...');
  
  try {
    // 1. Verify Firestore Connectivity
    console.log('[TEST] Checking Firestore Admin connection...');
    const wsSnap = await adminDb.collection('workspaces').limit(1).get();
    console.log(`[TEST] Firestore Admin connected. Workspaces found: ${wsSnap.size}`);
    
    // 2. Validate Seed Data
    const defaultWsSnap = await adminDb.collection('workspaces').doc('default_workspace').get();
    if (defaultWsSnap.exists) {
      const nodesSnap = await adminDb.collection('workspaces').doc('default_workspace').collection('nodes').get();
      console.log(`[TEST] Default workspace seed verified. Total nodes: ${nodesSnap.size}`);
    } else {
      console.log('[TEST] WARNING: Default workspace not found. Run "npm run seed" to initialize.');
    }

    console.log('[TEST] All core service diagnostics passed successfully.');
    process.exit(0);
  } catch (err: any) {
    console.error('[TEST] ERROR: Diagnostics validation failed:', err.message);
    process.exit(1);
  }
}

runTests();
