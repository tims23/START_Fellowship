// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

/*const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};*/

const firebaseConfig = {
    apiKey: "AIzaSyAn73xkru_NJB_vTovOecFD7pgE0bO5Vjs",
    authDomain: "start-fellowship.firebaseapp.com",
    databaseURL: "https://start-fellowship-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "start-fellowship",
    storageBucket: "start-fellowship.appspot.com",
    messagingSenderId: "981013256186",
    appId: "1:981013256186:web:c14c279debd2788deeb643",
    measurementId: "G-KC03G1DXM0"
  };

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;