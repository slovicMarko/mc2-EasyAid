"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import akcija1 from "public/images/akcija1.png";
import { EventBubble } from "@/components/event/event";
import InLove from "@/components/inLoveSVG.js";
import "./cssFiles/HomePage.scss";
import { getAuth } from "firebase/auth";
import { fetchEvents } from "@/firebase/fetchEvents";

const fotoURL = "/images/mainContentBack1.jpg";

function HomePage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
      });
      setListing(response);
      console.log(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  const auth = getAuth();

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <>
      <div className="front-windows">
        <div className="content">
          <InLove className="photo" />
          <h1>Volontiraj i pomogni drugima oko sebe!</h1>
          <p className="front-window-font">
            Kroz volontiranje imate priliku ne samo pomoći drugima, već i sami
            sebi pružiti jedinstveno iskustvo koje će vas obogatiti i ispuniti.
          </p>

          <div className="event-buttons">
            <Link className="link-btn green-btn" href="/aktivne_akcije">
              Pronađi događaj
            </Link>
            <Link
              className="link-btn regular-btn"
              href={auth.currentUser ? "/moje_akcije" : "/prijava"}
            >
              Stvori događaj
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="headings">Želiš volontirati, a ne znaš gdje početi?</h2>
        <div className="top-events">
          <div className="event-lijevi">
            <Link href={`/aktivne_akcije/${Listing[0][0].actionID}`}>
              <EventBubble
                isPreview
                action={[
                  {
                    name: Listing[0][0].name,
                    date: Listing[0][0].date,
                    about: "",
                    photo: Listing[0][0].photo,
                  },
                  {
                    fname: Listing[0][1].fname,
                    lname: Listing[0][1].lname,
                  },
                ]}
              />
            </Link>
          </div>
          <div className="event-sredina">
            <Link href={`/aktivne_akcije/${Listing[1][0].actionID}`} className="link">
              <EventBubble
                isPreview
                action={[
                  {
                    name: Listing[1][0].name,
                    date: Listing[1][0].date,
                    about: "",
                    photo: Listing[1][0].photo,
                  },
                  {
                    fname: Listing[1][1].fname,
                    lname: Listing[1][1].lname,
                  },
                ]}
              />
            </Link>
          </div>
          <div className="event-desni">
            <Link href={`/aktivne_akcije/${Listing[2][0].actionID}`}>
              <EventBubble
                isPreview
                action={[
                  {
                    name: Listing[2][0].name,
                    date: Listing[2][0].date,
                    about: "",
                    photo: Listing[2][0].photo,
                  },
                  {
                    fname: Listing[2][1].fname,
                    lname: Listing[2][1].lname,
                  },
                ]}
                imageURL={fotoURL}
              />
            </Link>
          </div>
        </div>
        <div className="about-easyAid">
          <div className="image-container">
            <Image
              src={akcija1}
              alt="Volonteri"
              className="photo1"
              style={{ borderRadius: "20px", height: "auto" }}
            />
          </div>
          <div className="side-text">
            <h4>Uvijek aktualni događaji</h4>
            <p>
              U odjeljku "Aktualni događaji" možeš vidjeti sve aktualne akcije
            </p>

            <h4>Pretraga po lokaciji</h4>
            <p>Želiš pronaći akciju u svojoj blizini?</p>

            <h4>Aktualnost događaja</h4>
            <p>
              Zaprati organizatora tako da nikad ne propustiš niti jednu željenu
              akciju
            </p>

            <Link className="link-btn green-btn" href="/aktivne_akcije">
              Pronađi događaj
            </Link>
          </div>
        </div>

        <h2 className="headings">Problem ti je organizacija i promocija?</h2>
        <div className="about-organisation">
          <div className="side-text">
            <h4>Sve na jednom mjestu</h4>
            <p className="opis-za-poticanje">
              Dosta vam je korištenja različitih aplikacija kako bi dogovorili
              akciju? Nudimo vam aplikaciju u kojoj možete dogovoriti sve
              detalje unutar jednog obrasca.
            </p>
            <Link
              className="link-btn regular-btn"
              href={auth.currentUser ? "/moje_akcije" : "/prijava"}
            >
              Stvori događaj
            </Link>
          </div>
          <div className="image-container2">
            <Image
              src="/images/organizator_homepage.svg"
              alt="Organizator slika"
              width={400}
              height={250}
              sizes="(max-width: 400px)"
              style={{
                position: "relative",
                margin: "0",
              }}
              className="photo2"
            />
          </div>
        </div>

        <div className="partneri">
          <hr />
          <h2 className="headings">Partneri u suradnji</h2>
          <div className="sponsor-images">
            <div className="sponsor-logo">
              <Image
                src="/images/porscheDigital.jpg"
                alt="Porsche Digital Croatia"
                title="Porsche Digital Croatia"
                fill
                sizes="(max-width: 768px) 100vw"
                className="sponsor"
              />
            </div>
            <div className="sponsor-logo">
              <Image
                src="/images/tvzMc2.png"
                alt="Tvz Mc2"
                title="Tvz Mc2"
                fill
                sizes="(max-width: 768px) 100vw"
                className="sponsor"
              />
            </div>

            <div className="sponsor-logo">
              <Image
                src="/images/tvzLogo.png"
                alt="Tehničko veleučilište u Zagrebu"
                title="Tehničko veleučilište u Zagrebu"
                fill
                sizes="(max-width: 768px) 100vw"
                className="sponsor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
