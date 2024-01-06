import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const dbPaths = {
  users: 'users',
  uid: 'uid',
};
const apiKey: string = import.meta.env.VITE_API_KEY || '';
const authDomain = import.meta.env.VITE_AUTH_DOMAIN || '';
const projectId = import.meta.env.VITE_PROJECT_ID || '';
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET || '';
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID || '';
const appId = import.meta.env.VITE_APP_ID || '';

//According to Vite's documentation https://vitejs.dev/guide/env-and-mode
//Unlike a CRA app that has opaque access to Node’s process.env variables,
//in Vite an environment variable isn’t really an environment variable:
// its value will always be included in the production bundle that is sent to the client.

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, dbPaths.users), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
