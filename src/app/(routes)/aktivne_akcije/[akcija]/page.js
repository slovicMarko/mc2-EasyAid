"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchEvents } from "@/firebase/fetchEvents";
import {
  AddUserToEvent,
  RemoveUserFromEvent,
} from "@/firebase/ManageRegisteredUsers";

import "./chosenEvent.scss";
import { getAuth } from "firebase/auth";

function Akcija() {
  const [action, setAction] = useState();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname().replace("/aktivne_akcije/", "");
  const hasMaterials = false;
  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = (
        await fetchEvents({
          collection: "actions",
          docField: "actionID",
          docValue: pathname,
        })
      )[0];
      setAction(response);
      setLoading(false);
    };
    fetchData();
  }, [pathname]);

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div className="akcija">
      <div className="heading-color">
        <div className="heading">
          <article>
            <h1 className="title">{action[0].name}</h1>
            <Link href={`/profil/${action[1].userID}`} className="link">
              <h2 className="organiser">{`${action[1].fname} ${action[1].lname} `}</h2>
            </Link>
            <h3 className="date">Datum: {action[0].date}</h3>
            <h3 className="volunteer_number">
              Potrebno: {action[0].registered.length}/{action[0].vol_num}
            </h3>
          </article>
          <div className="proposal-button-container">
            {auth.currentUser ? (
              action[1].userID ===
              localStorage.getItem(
                "user"
              ) ? null : action[0].registered.includes(
                  localStorage.getItem("user")
                ) ? (
                <button
                  className="action-btn regular-btn proposal-button"
                  onClick={RemoveUserFromEvent}
                >
                  - Odustani
                </button>
              ) : (
                <button
                  className="action-btn regular-btn proposal-button"
                  onClick={AddUserToEvent}
                  type="submit"
                >
                  + Dodaj
                </button>
              )
            ) : (
              <Link href={"/prijava"} className="link">
                <button className="action-btn regular-btn proposal-button">
                  Prijavi se
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <section className="page-content">
        <article className="text-content">
          <div className="description">
            <h2 className="description-title">Opis akcije</h2>
            <p className="description-paragraph">{action[0].about}</p>
          </div>
          <div className="image-container">
            <img
              src={action[0].photo}
              className="action-photo"
              alt="slika akcije"
            />
          </div>
          {/* <div>
            {hasMaterials ? (
              <div className="needed-stuff">
                <h3>Potrebne stvari</h3>
                <ul>
                  <li>Dobra volja</li>
                  <li>Osmijeh</li>
                  <li>Humor</li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div> */}
        </article>

        <article className="contacts">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.846529252445!2d15.934562076801248!3d45.814331910008384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6d3ecf8bf1d%3A0xdda2ef01f37a0510!2sCrveni%20kri%C5%BE%20Zagreb!5e0!3m2!1shr!2shr!4v1685997560928!5m2!1shr!2shr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <section className="contact-informations">
            <h2 className="contact-title">Kontakt</h2>
            <p className="contact-info">
              <FontAwesomeIcon icon={faPhone} /> {action[1].telephone}
            </p>
            <p className="contact-info">
              <FontAwesomeIcon icon={faEnvelope} /> {action[1].email}
            </p>
          </section>
        </article>
      </section>
    </div>
  );
}

export default Akcija;
