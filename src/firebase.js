// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqPxwuNQlS8sgfbTJrKbvHwdvmGUneuHc",
  authDomain: "fcmdem-bda98.firebaseapp.com",
  projectId: "fcmdem-bda98",
  storageBucket: "fcmdem-bda98.firebasestorage.app",
  messagingSenderId: "355569403620",
  appId: "1:355569403620:web:2111d4ce58b10ce5f24ef1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
