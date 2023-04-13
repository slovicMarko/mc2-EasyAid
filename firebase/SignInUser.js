"use client";


import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";
import { NextLink } from "next/link";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANkahWnt2XEit45aipdfGXmF0EF6EohVc",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL:
    "https://mc2-easyaid-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID",
  measurementId: "FIREBASE_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

function Login() {
  const [input, setInput] = useState({
    email: "marko@email.com",
    password: "marko123",
  });
  const [error, setError] = useState(null);

  // get authentication instance
  const auth = getAuth();

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
          ) {
            setError("The email address or password is incorrect");
          } else {
            console.log(err.code);
            alert(err.code);
          }
        });
      };
      
      const handleChange = (e) => {
        setInput((prevState) => ({
          ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const user = auth.currentUser;

  if (user) {
    console.log("Prijavljen");
  } else {
    console.log("Nema korisnika");
  }
  
  return (
    <>
      <div className="form-body">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>Fill the form below to sign in to your account.</p>
          <div className="email-input">
            <input
              name="email"
              placeholder="Enter email"
              type="text"
              onChange={handleChange}
              value={input.email}
              required
              autoComplete="true"
            />
            <label htmlFor="email" className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>
          <div className="password-input">
            <input
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={input.password}
              type="password"
              required
              autoComplete="true"
            />
            <label htmlFor="password" className="label-name">
              <span className="content-name">Password</span>
            </label>
          </div>
          <div className="btn">
            {error ? <p className="login-error">{error}</p> : null}
            <button title="Login" aria-label="Login" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
