import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGYMu8YwXfAzfeTLtYMhaCAyWb9Fvqnos",
  authDomain: "contador-de-visitas-musspe.firebaseapp.com",
  projectId: "contador-de-visitas-musspe",
  storageBucket: "contador-de-visitas-musspe.firebasestorage.app",
  messagingSenderId: "697727595550",
  appId: "1:697727595550:web:3ed7a2b5f906c632aa6a0f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const authReady = signInAnonymously(auth).catch((err) => {
  console.error("Erro ao autenticar anonimamente:", err);
});
