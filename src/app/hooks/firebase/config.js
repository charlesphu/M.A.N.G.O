// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi9_bUEE08KpgBRtRrjrsiOkPGZcTkCuU",
  authDomain: "m-a-n-g-o.firebaseapp.com",
  projectId: "m-a-n-g-o",
  storageBucket: "m-a-n-g-o.firebasestorage.app",
  messagingSenderId: "300585204481",
  appId: "1:300585204481:web:19d06ff61410c6fde53900",
  measurementId: "G-FQ7MRY5SQR",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
