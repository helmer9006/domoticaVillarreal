import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

//firebaseconfig
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APIID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);

export default db;
