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
    onAuthStateChanged: (callback: any) => {
      const timer = setTimeout(() => callback(null), 100);
      return () => clearTimeout(timer);
    },
    signOut: async () => {}
  };
  db = {};
}

// Add legacy compatibility adapters directly to the auth object
if (auth) {
  if (!auth.onAuthStateChanged) {
    auth.onAuthStateChanged = (callback: any) => {
      if (typeof auth.onAuthStateChanged === 'function' && auth.onAuthStateChanged !== firebaseOnAuthStateChanged) {
        return firebaseOnAuthStateChanged(auth, callback);
      }
      return firebaseOnAuthStateChanged(auth, callback);
    };
  }
  if (!auth.signOut) {
    auth.signOut = () => {
      return firebaseSignOut(auth);
    };
  }
}

export { db, auth };

export const onAuthChanged = (callback: (user: any) => void) => {
  if (auth && typeof auth.onAuthStateChanged === 'function') {
    return auth.onAuthStateChanged(callback);
  }
  return firebaseOnAuthStateChanged(auth, callback);
};

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
