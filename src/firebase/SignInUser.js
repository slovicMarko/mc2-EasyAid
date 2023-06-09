"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const auth = getAuth();

  let user = auth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        localStorage.setItem("user", user.user.uid);
        router.push("/aktivne_akcije");
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.INVALID_EMAIL) {
          setError("Neispravna email adresa.");
        } else if (err.code === AuthErrorCodes.INVALID_PASSWORD) {
          setError("Neispravna lozinka.");
        } else if (err.code === AuthErrorCodes.USER_DELETED) {
          setError("Korisnik ne postoji.");
        } else {
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

  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <div className="app-name">EasyAid</div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <p className="form-label">Email</p>
          <input
            className="input"
            id="formInput#text"
            name="email"
            placeholder="primjer@email.com"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
        </div>
        <div className="form-field">
          <p className="form-label">Lozinka</p>
          <input
            className="input"
            id="formInput#password"
            name="password"
            placeholder="Pr!mjer123"
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
        <Link className="switch" href="/registracija">
          Registriraj se!
        </Link>
      </div>
    </div>
  );
}

export default Login;
