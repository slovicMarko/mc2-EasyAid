"use client";
"use router";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { getFirestore, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../../../firebase/FirebaseConfig";

import "./dodajAkciju.scss";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

function DodajAkciju() {
  const router = useRouter();
  const [input, setInput] = useState({
    active: true,
    title: "",
    adress: "",
    date: "",
    description: "",
    city: "",
    image: "",
    link: "",
    number_volunteer: "",
    image: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/organiser");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let active = input.active;
    let title = input.title;
    let adress = input.adress;
    let date = input.date;
    let description = input.description;
    let city = input.city;
    let link = input.link;
    let number_volunteer = input.number_volunteer;

    setDoc(
      doc(
        db,
        "organizator",
        "volonterski-centar-kutina",
        "organizator-project",
        title
      ),
      {
        active: active,
        adress: adress,
        description: description,
        city: city,
        link: link,
        number_volunteer: number_volunteer,
      }
    );
    router.push("/organiser");
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  /*
  const handleChangeImage = async (e) => {
    try {
      setInput((prevState) => ({
        ...prevState,
        [e.target.image]: e.target.file[0],
      }));
      console.log(e.target.name);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };*/

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
          <input
            className="input"
            name="title"
            placeholder="naslov"
            type="text"
            onChange={handleChange}
            value={input.title}
            required
          />
        </div>

        <textarea
          rows="10"
          cols="40"
          className="input-textarea"
          placeholder="opis"
          name="description"
          onChange={handleChange}
          value={input.description}
        ></textarea>
        <div className="form-field">
          <input
            className="input"
            placeholder="dd.mm.yyyy."
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
            name="date"
            type="date"
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
          <input
            className="input"
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
            className="input"
            name="number_volunteer"
            placeholder="broj volontera"
            min={1}
            type="number"
            onChange={handleChange}
            value={input.number_volunteer}
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
