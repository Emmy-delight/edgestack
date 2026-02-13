// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ,
  authDomain: "edgestack-bf2be.firebaseapp.com",
  projectId: "edgestack-bf2be",
  storageBucket: "edgestack-bf2be.firebasestorage.app",
  messagingSenderId: "934895411270",
  appId: "1:934895411270:web:0414ae4f95ead6f309aa47"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };