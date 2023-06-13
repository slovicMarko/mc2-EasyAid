"use client";
"use router";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";

import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import checkPasswordStrength from "./checkPassword";

import { getFirestore, addDoc, collection } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function setUserID(uid, firstName, lastName) {
  addDoc(collection(db, "users"), {
    userID: uid,
    fname: firstName,
    lname: lastName,
    about: null,
    city: null,
    region: null,
    telephone: null,
  });
}

function Register() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();
  const auth = getAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLocaleLowerCase().trim();
    let password = input.password;
    let fname = input.fname;
    let lname = input.lname;

    createUserWithEmailAndPassword(
      auth,
      email,
      checkPasswordStrength(password) ? password : " "
    )
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", user.uid);
        setUserID(user.uid, fname, lname);
        router.push(`/profil/${user.uid}`);
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
        <div className="input-name">
          <div className="form-field-name">
            <p className="form-label">Ime</p>
            <input
              className="input"
              name="fname"
              placeholder="Pero"
              type="text"
              onChange={handleChange}
              value={input.fname}
              required
              autoComplete="true"
            />
          </div>
          <div className="form-field-name">
            <p className="form-label">Prezime</p>
            <input
              className="input"
              name="lname"
              placeholder="Perić"
              type="text"
              onChange={handleChange}
              value={input.lname}
              required
              autoComplete="true"
            />
          </div>
        </div>
        <div className="form-field">
          <p className="form-label">Email</p>
          <input
            className="input"
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
        <Link className="switch" href="/prijava">
          Prijavi se!
        </Link>
      </div>
    </div>
  );
}

export default Register;
