import React from "react";
import Image from "next/image";
import Link from "next/link";
import akcija1 from "public/images/akcija1.png";
import { EventBubble } from "@/components/event";

import "./homePage.css";

/*
https://react-icons.github.io/react-icons/    za ikone, instalirao sam sve
https://www.freecodecamp.org/news/how-to-use-svg-icons-in-react-with-react-icons-and-font-awesome/  za dodatne ikone, isto sve rj
*/

const sponzori = () => {
  return `../../public/images/`;
};

function HomePage() {
  return (
    <>
      <div className="front-windows">
        <div className="backgroundColor"></div>
        <div className="content">
          <h1>Volontiraj i pomogni drugima oko sebe!</h1>
          <p className="front-window-font">
            Kroz volontiranje imate priliku ne samo pomoći drugima, već i sami
            sebi pružiti jedinstveno iskustvo koje će vas obogatiti i ispuniti.
          </p>

          <div className="eventButtons">
            <Link className="linkBtn greenBtn" href="/feed">
              Pronađi događaj
            </Link>
            <Link className="linkBtn regularBtn" href="/">
              Stvori događaj
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 id="SecondHeading">Želiš volontirati, a ne znaš gdje početi?</h2>
        <div className="topEvents">
          <div className="eventProba">
            <EventBubble isPreview />
          </div>
          <div className="eventProba">
            <EventBubble isPreview />
          </div>
          <div className="eventProba">
            <EventBubble isPreview />
          </div>
        </div>
        <div className="aboutEasyAid">
          <div className="fotoGeneral1">
            <Image
              src={akcija1}
              //src="/images/akcija1.png"
              alt="Volonteri"
              className="foto1"
            />
            {/*
             */}
          </div>
          <div className="sideText1">
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

            <Link className="greenButton" href="/feed">
              Pronađi događaj
            </Link>
          </div>
        </div>

        <h2 id="ThirdHeading">Problem ti je organizacija i promocija?</h2>
        <div className="aboutOrganisation">
          <div className="fotoGeneral2"></div>
          <div className="sideText1">
            <h4>Sve na jednom mjestu</h4>
            {/*Previše se ponavlja treba srediti tekst*/}
            <p>
              Dosta vam je korištenja različitih aplikacija kako bi dogovorili
              akciju?
            </p>
            <p>
              Nudimo vam aplikaciju u kojoj možete dogovoriti sve detalje unutar
              jednog obrasca.
            </p>
          </div>
        </div>

        <div className="partneri">
          <hr />
          <h2>Partneri u suradnji</h2>
          <div className="sponsor-images">
            <div className="sponsor-logo">
              <Image
                //loader={sponzori}
                src="/images/porscheDigital.jpg"
                alt="Porsche Digital Croatia"
                title="Porsche Digital Croatia"
                fill="true"
                className="sponsor"
              />
            </div>
            <div className="sponsor-logo">
              <Image
                //loader={sponzori}
                src="/images/tvzMc2.png"
                alt="Tvz Mc2"
                title="Tvz Mc2"
                fill="true"
                className="sponsor"
              />
            </div>
            <div className="sponsor-logo">
              <Image
                //loader={sponzori}
                src="/images/tvzLogo.png"
                alt="Tehničko veleučilište u Zagrebu"
                title="Tehničko veleučilište u Zagrebu"
                fill="true"
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
