// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGgp5VLQe9LvHgIHeJ73nv9AKu8m0Kk4A",
  authDomain: "beekin-job-board.firebaseapp.com",
  projectId: "beekin-job-board",
  storageBucket: "beekin-job-board.appspot.com",
  messagingSenderId: "620104252119",
  appId: "1:620104252119:web:4280e5406f208a95110e92",
  measurementId: "G-H6KYWM42K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
