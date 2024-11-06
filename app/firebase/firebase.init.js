// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIGX41v5q2YAiAEXbx25RfXf37jAQbcx8",
  authDomain: "softiven-auth.firebaseapp.com",
  projectId: "softiven-auth",
  storageBucket: "softiven-auth.firebasestorage.app",
  messagingSenderId: "340661630108",
  appId: "1:340661630108:web:952833bf5cfac691afe959",
  measurementId: "G-RPKQTZMJBF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
