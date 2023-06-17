"use client";
"use router";

import { useState } from "react";
import { useRouter } from "next/navigation";

import firebaseConfig from "../../../firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import { v4 } from "uuid";

import "./dodajAkciju.scss";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

function DodajAkciju() {
  const auth = getAuth();
  const router = useRouter();

  const [input, setInput] = useState({
    about: "",
    date: "",
    address: "",
    city: "",
    name: "",
    tags: [],
    vol_num: Number(),
  });

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/moje_akcije");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let about = input.about;
    let actionID = v4();
    let address = input.address;
    let date = input.date;
    let city = input.city;
    let name = input.name;
    let tags = input.tags;
    let vol_num = input.vol_num;

    addDoc(collection(db, "actions"), {
      about: about,
      actionID: actionID,
      active: true,
      date: date,
      address: address,
      city: city,
      name: name,
      ownerID: auth.currentUser.uid,
      registered: [],
      tags: tags,
      vol_num: vol_num,
    });

    router.push("/moje_akcije");
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const uploadImage = async (file) => {
    try {
      const storageRef = ref(storage, "images/" + file.name);
      await uploadBytes(storageRef, file);
      console.log("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <p className="form-label">Naziv akcije</p>
          <input
            className="input"
            name="name"
            placeholder="naziv akcije"
            type="text"
            onChange={handleChange}
            value={input.title}
            required
          />
        </div>
        <div className="form-field">
          <p className="form-label">Opis akcije</p>
          <textarea
            rows="10"
            cols="40"
            className="input-textarea"
            placeholder="ukratko opišite akciju"
            name="about"
            onChange={handleChange}
            value={input.about}
          ></textarea>
        </div>
        <div className="form-field">
          <p className="form-label">Datum</p>
          <input
            className="input"
            name="date"
            type="date"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}."
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="background-about-image">Pozadinska slika:</label>
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            id="background-about-image"
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </div>

        <div className="form-field">
          <p className="form-label">Adresa</p>
          <input
            className="input"
            name="address"
            placeholder="Koja je adresa akcije?"
            type="text"
            onChange={handleChange}
            value={input.address}
            required
          />
        </div>
        <div className="form-field">
          <p className="form-label">Mjesto</p>
          <input
            className="input"
            name="city"
            placeholder="U kojem mjestu?"
            type="text"
            onChange={handleChange}
            value={input.city}
            required
          />
        </div>
        <div className="form-field">
          <p className="form-label">Količina volontera</p>

          <input
            className="input"
            name="vol_num"
            placeholder="Koliko je potrebno volontera?"
            min={1}
            type="number"
            onChange={handleChange}
            value={input.vol_num}
          />
        </div>

        <div className="buttons-dodaj">
          <button title="Odustani" onClick={handleClick} className="cancel-btn">
            Odustani
          </button>
          <button title="Spremi" type="submit" className="save-btn">
            Dodaj
          </button>
        </div>
      </form>
    </div>
  );
}

export default DodajAkciju;
