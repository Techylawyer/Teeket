import "../styles/main.css";
import "./Button";
import "./Header";
import { Form } from "./Form";
import { Header } from "./Header";
import { Horizontal } from "./HorizontalRule";
import { Footer } from "./Footer";
import Googlei from "../Images/Googlei.png";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import {useState} from 'react';
import {dataBase} from '../firebase-config';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore';


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
      navigate('/landingpage');
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
        <a className="Google" href="#" onClick={onGoogleClick}>
          <img src={Googlei} />
          <span>Continue with Google</span>{" "}
        </a>
        <Horizontal />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
