import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔐 Anonymous login helper
export const anonymousLogin = () => signInAnonymously(auth);

export const saveEmergency = async ({ uid, type, symptom }) => {
  try {
    const docRef = await addDoc(collection(db, "emergencies"), {
      uid,
      type,
      symptom,
      createdAt: serverTimestamp(),
    });

    console.log("Emergency saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving emergency:", error);
    throw error;
  }
};

export default app;
