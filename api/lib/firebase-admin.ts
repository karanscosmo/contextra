import admin from 'firebase-admin';
import firebaseConfig from '../../firebase-applet-config.json';
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
          update: async (data: any) => {
            const current = dbStore[pathStr] || {};
            const updated = { ...current };
            for (const key of Object.keys(data)) {
              const val = data[key];
              if (val && typeof val === 'object' && val.constructor && (val.constructor.name === 'FieldValue' || val.constructor.name === 'Object')) {
                if (key === 'logs') {
                  const currentLogs = Array.isArray(updated.logs) ? updated.logs : [];
                  const elements = (val as any)._elements || (val as any)._values || [];
                  if (Array.isArray(elements) && elements.length > 0) {
                    updated.logs = [...currentLogs, ...elements];
                  } else {
                    let foundStr = '';
                    try {
                      foundStr = JSON.stringify(val);
                    } catch(e){}
                    if (foundStr.includes('Planning')) {
                      updated.logs = [...currentLogs, `[${new Date().toLocaleTimeString()}] Planning research steps...`];
                    } else if (foundStr.includes('Extracting')) {
                      updated.logs = [...currentLogs, `[${new Date().toLocaleTimeString()}] Extracting semantic entities...`];
                    } else if (foundStr.includes('nodes')) {
                      updated.logs = [...currentLogs, `[${new Date().toLocaleTimeString()}] Saving nodes to graph...`];
                    } else if (foundStr.includes('complete')) {
                      updated.logs = [...currentLogs, 'Research cycle complete.'];
                    } else if (foundStr.includes('Error')) {
                      updated.logs = [...currentLogs, 'An error occurred during research.'];
                    } else {
                      updated.logs = [...currentLogs, 'Activity logged.'];
                    }
                  }
                }
              } else if (key === 'logs' && Array.isArray(val)) {
                updated.logs = [...(Array.isArray(updated.logs) ? updated.logs : []), ...val];
              } else {
                updated[key] = val;
              }
            }
            dbStore[pathStr] = updated;
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
