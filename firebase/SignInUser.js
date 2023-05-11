"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
} from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "marko@email.com",
    password: "marko123",
  });
  const [error, setError] = useState(null);

  // get authentication instance
  const auth = getAuth();

  let user = auth.currentUser;

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
        console.log(auth.currentUser);
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
    console.log(user);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignOut = (e) => {
    auth
      .signOut()
      .then((auth) => {
        console.log("Signed Out");
        // ...
      })
      .catch((err) => {
        console.log("Signed Out with error");
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Prijavljen");
      router.push("/feed");
    } else {
      console.log("Odjavljan");
    }
  });

  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <div className="app-name">EasyAid</div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
        </div>
        <div className="form-field">
          <input
            className="input input--password"
            id="formInput#passwprd"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
        </div>

        <div className="form-field">
          {error ? <p className="login-error">{error}</p> : null}
          <button
            title="Prijavi se"
            aria-label="Prijavi se"
            type="submit"
            className="login-btn"
          >
            Prijavi se
          </button>
        </div>
      </form>
      <div className="log-reg-switch" id="switch">
        Nemas račun?&nbsp;
        <Link className="switch" href="/register">
          Registriraj se!
        </Link>
      </div>
    </div>
  );
}

export default Login;
