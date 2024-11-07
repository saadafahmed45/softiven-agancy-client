import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
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

// Initialize Analytics only on the client-side
if (typeof window !== "undefined" && isSupported()) {
  const analytics = getAnalytics(app);
}
