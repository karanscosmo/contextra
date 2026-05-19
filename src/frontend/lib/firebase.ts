import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged as firebaseOnAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../../firebase-applet-config.json';

const config = (firebaseConfig as any).default || firebaseConfig;

let app: any;
let db: any;
let auth: any;

try {
  app = initializeApp(config);
  db = config.firestoreDatabaseId 
    ? getFirestore(app, config.firestoreDatabaseId)
    : getFirestore(app);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase client initialization failed, applying fail-safe mocks:", error);
  app = {};
  auth = {
    currentUser: null,
  };
  db = {};
}

// Local mock session state for demo access bypass
let mockUser: any = null;
const authListeners = new Set<(user: any) => void>();

export const setMockUser = (user: any) => {
  mockUser = user;
  // Trigger all auth state change listeners
  if (auth) {
    auth.currentUser = user;
  }
  authListeners.forEach(cb => cb(user));
};

export const onAuthChanged = (callback: (user: any) => void) => {
  authListeners.add(callback);
  
  // Immediately call with the current state
  if (mockUser) {
    callback(mockUser);
  } else {
    try {
      const unsubscribe = firebaseOnAuthStateChanged(auth, (u) => {
        if (!mockUser) {
          callback(u);
        }
      });
      return () => {
        authListeners.delete(callback);
        unsubscribe();
      };
    } catch (e) {
      callback(null);
    }
  }

  return () => {
    authListeners.delete(callback);
  };
};

// Add legacy compatibility adapters directly to the auth object
if (auth) {
  auth.onAuthStateChanged = (callback: any) => {
    return onAuthChanged(callback);
  };
  auth.signOut = async () => {
    setMockUser(null);
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.warn("Firebase SignOut error:", e);
    }
  };
}

export { db, auth };

// Connectivity check
async function testConnection() {
  if (!db || typeof db.collection !== 'function') return;
  try {
    await getDocFromServer(doc(db, '_connection_test', 'status'));
  } catch (error: any) {
    if (error?.message?.includes('offline')) {
      console.warn("Firestore appears to be offline. Check configuration.");
    }
  }
}
testConnection();
