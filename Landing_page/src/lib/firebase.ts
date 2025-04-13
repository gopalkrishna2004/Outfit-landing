// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBDjxBDNLm3tpzFj9M0JnheZQAhJaaaI50",
  authDomain: "outfit-ai.firebaseapp.com",
  databaseURL: "https://outfit-ai-default-rtdb.firebaseio.com",
  projectId: "outfit-ai",
  storageBucket: "outfit-ai.appspot.com",
  messagingSenderId: "117583857877",
  appId: "1:117583857877:web:786bb3e1a8ae8e5be2fa5c",
  measurementId: "G-E155ZSNPS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);