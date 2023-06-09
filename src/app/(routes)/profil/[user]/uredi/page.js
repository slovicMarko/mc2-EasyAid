"use client";
"use router";

import { fetchUser } from "@/firebase/fetchUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateDoc, getFirestore, doc } from "firebase/firestore";
import firebaseConfig from "@/firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./uredi.scss";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storeage = getStorage(app);

function Uredi() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const [input, setInput] = useState({
    about: "",
    city: "",
    fname: "",
    lname: "",
    region: "",
    photo: "",
    telephone: "",
  });

  const imageRef = ref(
    storeage,
    `users/${localStorage.getItem("user")}/profile_image/profile_picture`
  );
  const uploadImage = async (file) => {
    try {
      await uploadBytes(imageRef, file);

      async function getImage() {
        const downloadURL = await getDownloadURL(imageRef);
        setImage(downloadURL);
      }
      getImage();
    } catch (error) {
      console.error("Greška pri prijenosu: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = (
        await fetchUser({
          collection: "users",
          docField: "userID",
          docValue: localStorage.getItem("user"),
        })
      )[0];
      setInput({
        about: response.about,
        city: response.city,
        fname: response.fname,
        lname: response.lname,
        region: response.region,
        photo: response.photo,
        telephone: response.telephone,
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/profil/${localStorage.getItem("user")}`);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const docRef = doc(db, "users", localStorage.getItem("userDocID"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    if (image != null) {
      setImage(input.photo);
    }
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
      photo: image,
      region: region,
      telephone: telephone,
    })
      .then(() => {
        console.log("Document updated");
      })
      .catch((error) => {
        console.log(error);
      });

    router.push(`/profil/${localStorage.getItem("user")}`);
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
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </div>

        <div className="location">
          <div className="form-field">
            <p className="form-label">Grad</p>
            <input
              className="input"
              name="city"
              placeholder="Iz kojeg grada dolazite?"
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
              placeholder="Iz koje županije?"
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
