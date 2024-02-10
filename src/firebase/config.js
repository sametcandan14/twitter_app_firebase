// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBNVUA-gkctVqlED-6khx7RTflpjcT4Hs",
  authDomain: "twitter-5e4e1.firebaseapp.com",
  projectId: "twitter-5e4e1",
  storageBucket: "twitter-5e4e1.appspot.com",
  messagingSenderId: "381589434081",
  appId: "1:381589434081:web:ac1c7b1193269e26a691a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
