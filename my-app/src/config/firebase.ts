// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASUXl-x3cSzPaZibp5EO40RTdHHzh-6SI",
  authDomain: "pitchathon-24.firebaseapp.com",
  projectId: "pitchathon-24",
  storageBucket: "pitchathon-24.appspot.com",
  messagingSenderId: "1013140551258",
  appId: "1:1013140551258:web:8b60b1136203445e050a63",
  measurementId: "G-C9YZB7CZNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize Analytics


// Export Firestore database instance
export const db = getFirestore(app);
