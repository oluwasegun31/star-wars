// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDreez-rOZst1cBlf0MVcQ05KdZ7fzHDOw",
  authDomain: "starwars-ad028.firebaseapp.com",
  projectId: "starwars-ad028",
  storageBucket: "starwars-ad028.appspot.com",
  messagingSenderId: "45617581945",
  appId: "1:45617581945:web:d9eaa88444f983e3bfe9a8",
  measurementId: "G-FJZ97X2SWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // auth
const db = getFirestore(app); // firestore database
const storage = getStorage(app); // firebase storage

export { auth, db, storage };
