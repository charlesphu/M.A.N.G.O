// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app); // ✅ now called after app is defined

export { app, auth, analytics };
