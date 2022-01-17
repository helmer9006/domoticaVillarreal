import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

//firebaseconfig
const firebaseConfig = {
  apiKey: "AIzaSyCtWHmgB625U_MP4RaCW77Rag3pntsHCnc",
  authDomain: "domotica-villarreal.firebaseapp.com",
  projectId: "domotica-villarreal",
  storageBucket: "domotica-villarreal.appspot.com",
  messagingSenderId: "965853492374",
  appId: "1:965853492374:web:0ba856fd64c703cbea3eb7",
  measurementId: "G-SSZH80Z5C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);

export default db;
