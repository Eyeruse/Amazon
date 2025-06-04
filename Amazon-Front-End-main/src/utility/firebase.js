// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT--ASV2zroPW3AEBc9puKtmE2VDkbIOE",
  authDomain: "fir-1cfd7.firebaseapp.com",
  projectId: "fir-1cfd7",
  storageBucket: "fir-1cfd7.firebasestorage.app",
  messagingSenderId: "1060334404796",
  appId: "1:1060334404796:web:81fd766fbdd98b61e37cb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };

