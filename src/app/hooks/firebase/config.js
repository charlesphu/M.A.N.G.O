// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4RU99mS6Vm3m8M_wNfMT95Fl8POgllkQ",
  authDomain: "m-ango.firebaseapp.com",
  projectId: "m-ango",
  storageBucket: "m-ango.firebasestorage.app",
  messagingSenderId: "26878208374",
  appId: "1:26878208374:web:beffa23a7618ac031ff257",
  measurementId: "G-8F4Q91F6BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, analytics, auth };
