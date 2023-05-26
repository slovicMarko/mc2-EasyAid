"use client";
"use router";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
} from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import checkPasswordStrength from "./checkPassword";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLocaleLowerCase().trim();
    let username = input.username;
    let password = input.password;


    createUserWithEmailAndPassword(
      auth,
      email,
      checkPasswordStrength(password) ? password : " "
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            router.push(`/profile/${user.displayName}`);
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === AuthErrorCodes.INVALID_EMAIL) {
          setError("Neispravna email adresa.");
        } else if (errorCode === AuthErrorCodes.WEAK_PASSWORD) {
          setError(
            "Šifra mora sadržavati 8 znakova, veliko i malo slovo, specijalan znak i broj."
          );
        } else {
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
            className="input input--text"
            id="formInput#email"
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
          <p className="form-label">Korisničko ime</p>
          <input
            className="input input--text"
            id="formInput#text"
            name="username"
            placeholder="Primjer"
            type="text"
            onChange={handleChange}
            value={input.username}
            required
            autoComplete="true"
          />
        </div>
        <div className="form-field">
          <p className="form-label">Lozinka</p>
          <input
            className="input input--password"
            id="formInput#passwprd"
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
          <button title="Register" type="submit" className="login-btn">
            Registriraj se
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
