import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJR91l1F-Otyek_i3Bztzn3iKAcEYBFcA",
  authDomain: "teeket-6b16d.firebaseapp.com",
  projectId: "teeket-6b16d",
  storageBucket: "teeket-6b16d.appspot.com",
  messagingSenderId: "188148874491",
  appId: "1:188148874491:web:cf1de1fdc672335822c45e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
console.log(analytics);
export const dataBase = getFirestore()
