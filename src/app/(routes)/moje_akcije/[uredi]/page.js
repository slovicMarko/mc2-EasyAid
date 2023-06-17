"use client";
"use router";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { updateDoc, getFirestore, doc } from "firebase/firestore";
import firebaseConfig from "@/firebase/FirebaseConfig";
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes } from "firebase/storage";

import "./uredi.scss";
import { fetchEvents } from "@/firebase/fetchEvents";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

function Uredi() {
  const [loading, setLoading] = useState(true);
  const [ImageUpload, setImageUpload] = useState(null);
  const router = useRouter();
  const pathname = usePathname().replace("/moje_akcije/", "");

  const [image, setImage] = useState();
  const [input, setInput] = useState({
    about: "",
    actionID: "",
    active: "",
    date: "",
    address: "",
    city: "",
    name: "",
    registered: "",
    ownerID: "",
    tags: "",
    vol_num: "",
  });

  const imageRef = ref(storage, `actions/${input.actionID}/action_photo`);

  const uploadImage = async () => {
    if (ImageUpload == null) return;
    await uploadBytes(imageRef, ImageUpload).then(() => {
      alert("Image uploaded");
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = (
        await fetchEvents({
          collection: "actions",
          docField: "actionID",
          docValue: pathname,
        })
      )[0];
      console.log(response);
      setInput({
        about: response.about,
        actionID: response.actionID,
        active: response.active,
        date: response.date,
        address: response.address,
        city: response.city,
        name: response.name,
        ownerID: response.ownerID,
        registered: response.registered,
        tags: response.tags,
        vol_num: response.vol_num,
      });
      setImage(response.photo);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/moje_akcije`);
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const docRef = doc(db, "actions", pathname);

  const handleSubmit = (e) => {
    e.preventDefault();

    let about = input.about;
    let actionID = input.actionID;
    let active = input.active;
    let date = input.date;
    let address = input.address;
    let city = input.city;
    let name = input.name;
    let photo = image;
    let registered = input.registered;
    let ownerID = input.ownerID;
    let tags = input.tags;
    let vol_num = input.vol_num;

    updateDoc(docRef, {
      about: about,
      actionID: actionID,
      active: active,
      date: date,
      address: address,
      city: city,
      name: name,
      photo: photo,
      ownerID: ownerID,
      registered: registered,
      tags: tags,
      vol_num: vol_num,
    })
      .then(() => {
        console.log("Document updated");
      })
      .catch((error) => {
        console.log(error);
      });

    router.push(`/moje_akcije`);
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

export default Uredi;
