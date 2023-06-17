import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import '../styles/Tina.css';
import Button from './Button';
import Header from './Header';
import { Horizontal } from './HorizontalRule';
import { Footers } from './Footer';
import Googlei from '../imgs/Googlei.png';

const firebaseConfig = {
  apiKey: "AIzaSyB9yYkKvBRenWsn4QyCi1BOQ4Ra7-cAwTU",
  authDomain: "teeket-43828.firebaseapp.com",
  projectId: "teeket-43828",
  storageBucket: "teeket-43828.appspot.com",
  messagingSenderId: "2237885517",
  appId: "1:2237885517:web:f5fc1843733c96b4720004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export function Container() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailClick = async (event) => {
    event.preventDefault();

    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      alert(error.code, error.message);
      console.log(error.code, error.message);
    }
  };

  const onGoogleClick = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // You can now access the user object, perform additional actions, and navigate to the desired route
      console.log(user);
      navigate("/Home");
    } catch (error) {
      alert(error.code, error.message);
      console.log(error.code, error.message);
    }
  };

  return (
    <div className="Container">
      <Header />
      <div className="Section -pt-15">
        <h2 className="text-center font-bold">Login or signup to continue</h2>
        <div className="flex flex-col items-center content-center justify-center gap-4">
          <button
            className="Google flex flex-row items-center justify-center gap-4"
            onClick={onGoogleClick}
          >
            <img src={Googlei} alt="" style={{ alignSelf: 'center' }} />
            <span className="self-center">Continue with Google</span>{' '}
          </button>
        </div>
        <Horizontal />
        <div>
          <form className="Input" onSubmit={onEmailClick}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="off"
              className="mt-5"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              autoComplete="off"
            />
            <br />
            <Button
              label="Continue with email"
              bg="#0052F6"
              color ="#FFFFFF"
              className="bg-primary text-white font-bold"
              type="submit"
            />
          </form>
        </div>
        <Footers />
      </div>
    </div>
  )
}
