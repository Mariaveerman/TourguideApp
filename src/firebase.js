// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ hier importeer je Firestore

const firebaseConfig = {
  apiKey: "AIzaSyA7WCPQxeR-rG7SJ_eda27B9S_6DKqHgXY",
  authDomain: "fir-app1-47b5a.firebaseapp.com",
  projectId: "fir-app1-47b5a",
  storageBucket: "fir-app1-47b5a.firebasestorage.app",
  messagingSenderId: "546205530091",
  appId: "1:546205530091:web:a989b02d8807f06141cbae",
  measurementId: "G-LBSN8VE5J1"
};

// Firebase initialiseren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // ✅ exporteer db zodat je het in componenten kunt gebruiken
