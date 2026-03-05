import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmwBCB44KTMq6yQnSMzoPN1pq5uxcZM_w",
  authDomain: "new-talk-a98e7.firebaseapp.com",
  projectId: "new-talk-a98e7",
  storageBucket: "new-talk-a98e7.appspot.com",
  messagingSenderId: "861871528496",
  appId: "1:861871528496:web:b97fbc1133b820ce78abf5",
  measurementId: "G-5P1C58N4LX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
