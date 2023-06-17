"use client";
"use router";

import { fetchUser } from "@/firebase/fetchUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateDoc, getFirestore, doc } from "firebase/firestore";
import firebaseConfig from "@/firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes } from "firebase/storage";

import "./uredi.scss";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storeage = getStorage(app);

function Uredi() {
  const [loading, setLoading] = useState(true);
  const [ImageUpload, setImageUpload] = useState(null);
  const userID = localStorage.getItem("user");
  const docID = localStorage.getItem("userDocID");
  const router = useRouter();

  const [input, setInput] = useState({
    about: "",
    city: "",
    fname: "",
    lname: "",
    region: "",
    telephone: "",
  });

  const imageRef = ref(
    storeage,
    `users/${userID}/profile_image/profile_picture`
  );
  const uploadImage = () => {
    if (ImageUpload == null) return;
    uploadBytes(imageRef, ImageUpload).then(() => {
      alert("Image uploaded");
    });
  };

  

  useEffect(() => {
    const fetchData = async () => {
      const response = (
        await fetchUser({
          collection: "users",
          docField: "userID",
          docValue: userID,
        })
      )[0];
      setInput({
        about: response.about,
        city: response.city,
        fname: response.fname,
        lname: response.lname,
        region: response.region,
        telephone: response.telephone,
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/profil/${userID}`);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const docRef = doc(db, "users", docID);

  const handleSubmit = (e) => {
    e.preventDefault();

    let about = input.about;
    let city = input.city;
    let fname = input.fname;
    let lname = input.lname;
    let region = input.region;
    let telephone = input.telephone;

    updateDoc(docRef, {
      about: about,
      city: city,
      fname: fname,
      lname: lname,
      region: region,
      telephone: telephone,
    })
      .then(() => {
        console.log("Document updated");
      })
      .catch((error) => {
        console.log(error);
      });

    router.push(`/profil/${userID}`);
  };

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div className="form-container">
      <div className="background-logo">
        <img src="/images/logo.svg" alt="background-logo" />
      </div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="first-last-name">
          <div className="form-field">
            <p className="form-label">Ime</p>
            <input
              className="input"
              name="fname"
              placeholder="ime"
              type="text"
              onChange={handleChange}
              value={input.fname}
              required
            />
          </div>
          <div className="form-field">
            <p className="form-label">Prezime</p>
            <input
              className="input"
              name="lname"
              placeholder="prezime"
              type="text"
              onChange={handleChange}
              value={input.lname}
              required
            />
          </div>
        </div>
        <div className="about-me">
          <div className="form-field">
            <p className="form-label">O meni</p>
            <textarea
              rows="10"
              cols="40"
              className="input-textarea"
              placeholder="opišite sebe"
              name="about"
              onChange={handleChange}
              value={input.about}
            ></textarea>
          </div>
        </div>
        <div className="form-field">
          <p className="form-label">Broj telefona</p>
          <input
            className="input"
            name="telephone"
            placeholder="Vaš broj mobitela?"
            type="string"
            onChange={handleChange}
            value={input.telephone}
          />
        </div>

        <div className="form-field">
          <label htmlFor="background-about-image">Slika profila: </label>
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            id="background-about-image"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
          <button onClick={uploadImage}>Prenesi</button>
        </div>

        <div className="location">
          <div className="form-field">
            <p className="form-label">Grad</p>
            <input
              className="input"
              name="city"
              placeholder="Iz kojeg grada dolazite??"
              type="text"
              onChange={handleChange}
              value={input.city}
              required
            />
          </div>
          <div className="form-field">
            <p className="form-label">Županija</p>
            <input
              className="input"
              name="region"
              placeholder="U kojem mjestu?"
              type="text"
              onChange={handleChange}
              value={input.region}
              required
            />
          </div>
        </div>

        <div className="buttons-dodaj">
          <button title="Odustani" onClick={handleClick} className="cancel-btn">
            Odustani
          </button>
          <button title="Ažuriraj" type="submit" className="save-btn">
            Ažuriraj
          </button>
        </div>
      </form>
    </div>
  );
}

export default Uredi;
