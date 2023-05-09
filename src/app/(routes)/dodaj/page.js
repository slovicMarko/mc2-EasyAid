"use client";

import { useState } from "react";

import { getFirestore, setDoc, doc } from "firebase/firestore";

import firebaseConfig from "../../../../firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

import "../login/login.scss";
import { set } from "firebase/database";

function DodajAkciju() {
  const [input, setInput] = useState({
    active: true,
    title: "",
    adress: "",
    description: "",
    city: "",
    image: "",
    link: "",
    number_volunteer: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let active = input.active;
    let title = input.title;
    let adress = input.adress;
    let description = input.description;
    let city = input.city;
    let link = input.link;
    let number_volunteer = input.number_volunteer;

    setDoc(doc(db, "organizator_project", title), {
      active: active,
      adress: adress,
      description: description,
      city: city,
      link: link,
      number_volunteer: number_volunteer,
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
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit}
        action="/feed"
      >
        <div className="form-field">
          <select
            className="input"
            name="active"
            id="active"
            onChange={handleChange}
            value={input.active}
          >
            <option value="true">Aktivno</option>
            <option value="false">Neaktivno</option>
          </select>
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="title"
            placeholder="naslov"
            type="text"
            onChange={handleChange}
            value={input.title}
            required
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="description"
            placeholder="opis"
            type="text"
            onChange={handleChange}
            value={input.description}
            required
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="city"
            placeholder="grad"
            type="text"
            onChange={handleChange}
            value={input.city}
            required
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="link"
            placeholder="link"
            type="text"
            onChange={handleChange}
            value={input.link}
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
            id="formInput#text"
            name="number_volunteer"
            placeholder="broj volontera"
            type="number"
            onChange={handleChange}
            value={input.number_volunteer}
          />
        </div>

        <div className="form-field">
          <button
            title="Spremi"
            aria-label="Spremi"
            type="submit"
            className="login-btn"
          >
            Spremi
          </button>
        </div>
      </form>
    </div>
  );
}

export default DodajAkciju;
