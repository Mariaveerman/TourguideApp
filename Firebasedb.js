// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7WCPQxeR-rG7SJ_eda27B9S_6DKqHgXY",
  authDomain: "fir-app1-47b5a.firebaseapp.com",
  projectId: "fir-app1-47b5a",
  storageBucket: "fir-app1-47b5a.firebasestorage.app",
  messagingSenderId: "546205530091",
  appId: "1:546205530091:web:a989b02d8807f06141cbae",
  measurementId: "G-LBSN8VE5J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);