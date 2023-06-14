import "../styles/Tina.css";
import "./Button";
import "./Header";
import { Form } from "./Form";
import { Header } from "./Header";
import { Horizontal } from "./HorizontalRule";
import { Footers } from "./Footer";
import Googlei from "../imgs/Googlei.png"
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

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
const dataBase = getFirestore()

// import { useState } from 'react';
// import {dataBase} from './firebase-config';
// import {
//   signInWithPopup,
//   GoogleAuthProvider,
// //   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore';


export function Container() {
  
const navigate = useNavigate();

const onGoogleClick = async () => {
  try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for user
      const docRef = doc(dataBase, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
          await setDoc(doc(dataBase, 'users', user.uid), {
              name: user.displayName,
              email: user.email,
              timestamp: serverTimestamp(),
          });
      }
      navigate('/Landing');
      toast.success('Login was successful!');
  } catch (error) {
      toast.error('Could not authorize with Google.');
  }
};

  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        <a className="Google" href=" " onClick={onGoogleClick}>
          <img src={Googlei} alt=""/>
          <span>Continue with Google</span>{" "}
        </a>
        <Horizontal />
        <Form />
        <Footers />
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export function Container() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const auth = getAuth();
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate('/Landing');
//       toast.success('Signup was successful!');
//     } catch (error) {
//       toast.error('Could not sign up. Please try again.');
//     }
//   };

//   return (
//     <div className="Container">
//       {/* Your existing code */}
//       <form onSubmit={handleSignup}>
//         <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
//         <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
//         <button type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// }
