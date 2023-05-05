"use client";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseConfig from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function upis() {
  setDoc(doc(db, "organizator", username), {
    ime: imeOrg,
    grad: gradOrg,
    lokacija: lokacijaOrg,
    opis: opisOrg,
  });
}

class Organizator {
  constructor(username, ime, grad, lokacija, opis) {
    this.username = username;
    this.ime = ime;
    this.grad = grad;
    this.lokacija = lokacija;
    this.opis = opis;
  }
}

function Proba() {
  const [input, setInput] = useState({
    username: "vc slozne ruke",
    ime: "Volonterski centar Složne ruke",
    grad: "Kutina",
    lokacija: "Vinogradska ulica 69b",
    opis: "Organizacija koja pomaže svim ljudima dobre volje.",
  });
  const handleSubmit = () => {

    
    let username = input.username;
    let imeOrg = input.ime;
    let gradOrg = input.grad;
    let lokacijaOrg = input.lokacija;
    let opisOrg = input.opis;

    upis();

    console.log(username);
    console.log(imeOrg);
    console.log(gradOrg);
    console.log(lokacijaOrg);
    console.log(opisOrg);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="forma">
      <form onsubmit="handleSubmit()">
        <label for="username">username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={input.username}
        />
        <label for="ime">ime:</label>
        <input
          type="text"
          name="ime"
          placeholder="ime"
          onChange={handleChange}
          value={input.ime}
        />
        <label for="grad">grad:</label>
        <input
          type="text"
          name="grad"
          placeholder="grad"
          onChange={handleChange}
          value={input.grad}
        />
        <label for="lokacija">lokacija:</label>
        <input
          type="text"
          name="lokacija "
          placeholder="lokacija"
          onChange={handleChange}
          value={input.lokacija}
        />
        <label for="opis">opis:</label>
        <input
          type="text"
          name="opis"
          placeholder="opis"
          onChange={handleChange}
          value={input.opis}
        />
        <button type="submit">Potvrdi</button>
      </form>
    </div>
  );
}

export default Proba;
