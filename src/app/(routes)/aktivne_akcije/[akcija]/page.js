"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/firebase/fetchEvents";

import "./chosenEvent.scss";

function Akcija() {
  const [action, setAction] = useState();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname().replace("/aktivne_akcije/", "");
  const hasMaterials = false;

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
  }, []);

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div className="akcija">
      <div className="heading-color">
        <div className="heading">
          <article>
            <h1>{action[0].name}</h1>
            <h2>{`${action[1].fname} ${action[1].lname} `}</h2>
          </article>
          <section>
            <h2>{action[0].date}</h2>
          </section>
          <aside>
            <div>
              <h2>Potrebno</h2>
              <h3>{action[0].vol_num}</h3>
            </div>
          </aside>
        </div>
      </div>
      <section className="page-content">
        <article className="text-content">
          <p>{action[0].about}</p>
          <div>
            <button className="sign-up-event">"Prijavi se</button>
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
          </div>
        </article>
        <article>
          <img
            src={action[0].photo}
            className="action-photo"
            alt="slika akcije"
          />
        </article>
        <article className="info">
          <section>
            <h2>Kontakt</h2>
            <p>{`${action[1].fname} ${action[1].lname} `}</p>
            <p>{action[1].telephone}</p>
            <p>{action[1].email}</p>
          </section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.846529252445!2d15.934562076801248!3d45.814331910008384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6d3ecf8bf1d%3A0xdda2ef01f37a0510!2sCrveni%20kri%C5%BE%20Zagreb!5e0!3m2!1shr!2shr!4v1685997560928!5m2!1shr!2shr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </div>
  );
}

export default Akcija;
