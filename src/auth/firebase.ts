import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const dbPaths = {
  users: 'users',
  uid: 'uid',
};

const firebaseConfig = {
  apiKey: 'AIzaSyAltm1V5tqCz-UUtgDrnEXMHfmcy4zqm4c',
  authDomain: 'graphiql-app-a040a.firebaseapp.com',
  projectId: 'graphiql-app-a040a',
  storageBucket: 'graphiql-app-a040a.appspot.com',
  messagingSenderId: '226221838512',
  appId: '1:226221838512:web:c62782bc957bab2793ab75',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(
      collection(db, dbPaths.users),
      where(dbPaths.uid, '==', user.uid)
    );
    const docs = await getDocs(q);
    if (!docs.docs.length) {
      await addDoc(collection(db, dbPaths.users), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
  }
};

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
