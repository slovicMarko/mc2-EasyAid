"use client";
"use router";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { getFirestore, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "../../../firebase/FirebaseConfig";

import "../login/login.scss";

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
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit}
      >
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

        <textarea
          rows="10"
          cols="40"
          className=""
          placeholder="opis"
          name="description"
          onChange={handleChange}
          value={input.description}
        ></textarea>
        <div className="form-field">
          <input
            className="input"
            id="formInput#text"
            name="date"
            type="date"
            onChange={handleChange}
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
          <label for="background-about-image">Pozadinska slika:</label>
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </div>
        <div className="form-field">
          <input
            className="input input--text"
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
