// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqPxwuNQlS8sgfbTJrKbvHwdvmGUneuHc",
  authDomain: "fcmdem-bda98.firebaseapp.com",
  projectId: "fcmdem-bda98",
  storageBucket: "fcmdem-bda98.appspot.com", // ✅ FIXED
  messagingSenderId: "355569403620",
  appId: "1:355569403620:web:2111d4ce58b10ce5f24ef1",
  measurementId: "G-5Q1MS28DD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // ✅ ADD THIS LINE

export { db, storage };
