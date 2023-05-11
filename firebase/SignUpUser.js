"use client";
"use router";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

function Register() {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const router = useRouter();
  const auth = getAuth();

  let user = auth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLocaleLowerCase().trim();
    let username = input.username;
    let password = input.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {});

        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Prijavljen");
      router.push(`/profile/${user.displayName}`);
    }
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
            id="formInput#email"
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
            className="input input--text"
            id="formInput#text"
            name="username"
            placeholder="Enter username"
            type="text"
            onChange={handleChange}
            value={input.username}
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
            title="Register"
            aria-label="Register"
            type="submit"
            className="login-btn"
          >
            Register
          </button>
        </div>
      </form>
      <div className="log-reg-switch" id="switch">
        Već imaš račun?&nbsp;
        <Link className="switch" href="/login">
          Prijavi se!
        </Link>
      </div>
    </div>
  );
}

export default Register;
