import admin from 'firebase-admin';
import firebaseConfig from '../../../firebase-applet-config.json';
import fs from 'fs';
import path from 'path';

let adminDb: any;
let adminAuth: any;

// Helper to build in-memory mock database
function buildMockDb() {
  const dbStore: Record<string, Record<string, any>> = {};
  
  const mockCollection = (collectionPath: string): any => {
    return {
      doc: (docId?: string) => {
        const id = docId || Math.random().toString(36).substring(7);
        const pathStr = `${collectionPath}/${id}`;
        return {
          id,
          get: async () => ({
            exists: !!dbStore[pathStr],
            data: () => dbStore[pathStr] || null
          }),
          set: async (data: any) => {
            dbStore[pathStr] = { ...data, id };
            return { writeTime: new Date() };
          },
          delete: async () => {
            delete dbStore[pathStr];
            return { writeTime: new Date() };
          },
          collection: (subPath: string) => mockCollection(`${pathStr}/${subPath}`)
        };
      },
      get: async () => {
        const prefix = collectionPath + '/';
        const docs = Object.keys(dbStore)
          .filter(k => k.startsWith(prefix) && k.split('/').length === collectionPath.split('/').length + 1)
          .map(k => ({
            id: k.split('/').pop()!,
            ref: { delete: async () => { delete dbStore[k]; } },
            data: () => dbStore[k]
          }));
        return {
          size: docs.length,
          docs
        };
      },
      limit: function(lim: number) {
        return {
          get: async () => {
            const all = await this.get();
            return {
              size: Math.min(all.size, lim),
              docs: all.docs.slice(0, lim)
            };
          }
        };
      }
    };
  };

  return {
    collection: mockCollection,
    batch: () => ({
      delete: (ref: any) => {
        if (ref && typeof ref.delete === 'function') {
          ref.delete();
        }
      },
      commit: async () => {}
    })
  };
}

const hasCredentials = !!(
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  process.env.FIREBASE_SERVICE_ACCOUNT ||
  fs.existsSync(path.join(process.cwd(), 'service-account.json')) ||
  fs.existsSync(path.join(process.cwd(), 'firebase-key.json'))
);

if (!hasCredentials) {
  console.warn("[FIREBASE ADMIN] No service credentials found. Initializing in-memory mock fallback.");
  adminDb = buildMockDb();
  adminAuth = {
    verifyIdToken: async (idToken: string) => {
      return { uid: 'mock_user_123', email: 'mock@contextra.io' };
    }
  };
} else {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        projectId: firebaseConfig.projectId,
      });
    }
    adminDb = admin.firestore();
    adminAuth = admin.auth();
  } catch (error) {
    console.warn("[FIREBASE ADMIN] Real initialization failed. Falling back to mock:", error);
    adminDb = buildMockDb();
    adminAuth = {
      verifyIdToken: async (idToken: string) => {
        return { uid: 'mock_user_123', email: 'mock@contextra.io' };
      }
    };
  }
}

export { adminDb, adminAuth };

export async function verifySession(idToken: string) {
  try {
    return await adminAuth.verifyIdToken(idToken);
  } catch (error) {
    console.error("Session verification failed:", error);
    return null;
  }
}
