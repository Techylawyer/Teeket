
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
      navigate("/Landing");
    } catch (error) {
      alert(error.code, error.message);
      console.log(error.code, error.message);
    }
  };

  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        <a className="Google" href=" ">
          <img src={Googlei} alt=""/>
          <span>Continue with Google</span>{" "}
        </a>
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
            <Button label="Continue with email" bg="#0052F6" color="#FFFFFF" type="submit" />
          </form>
        </div>
        <Footers />
      </div>
    </div>
  );
}
