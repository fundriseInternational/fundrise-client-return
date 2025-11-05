// src/database/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDK4VZ-5mgtUR1jg2_uBLrzvar9nGBB9Bk",
  authDomain: "fundrise01-f2c8f.firebaseapp.com",
  projectId: "fundrise01-f2c8f",
  storageBucket: "fundrise01-f2c8f.firebasestorage.app",
  messagingSenderId: "206322076131",
  appId: "1:206322076131:web:4b3434717947556e8678d6",
};

// ✅ Initialize only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export shared instances
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
