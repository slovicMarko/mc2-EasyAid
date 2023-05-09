import React from "react";
import Image from "next/image";
import Link from "next/link";
import akcija1 from "public/images/akcija1.png";
import { EventBubble } from "@/components/event";

import "./homePage.scss";

/*
https://react-icons.github.io/react-icons/    za ikone, instalirao sam sve
https://www.freecodecamp.org/news/how-to-use-svg-icons-in-react-with-react-icons-and-font-awesome/  za dodatne ikone, isto sve rj
*/

function HomePage() {
  return (
    <>
      <div className="front-windows">
        <div className="content">
          <h1>Volontiraj i pomogni drugima oko sebe!</h1>
          <p className="front-window-font">
            Kroz volontiranje imate priliku ne samo pomoći drugima, već i sami
            sebi pružiti jedinstveno iskustvo koje će vas obogatiti i ispuniti.
          </p>

          <div className="event-buttons">
            <Link className="link-btn green-btn" href="/feed">
              Pronađi događaj
            </Link>
            <Link className="link-btn regular-btn" href="/">
              Stvori događaj
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="headings">Želiš volontirati, a ne znaš gdje početi?</h2>
        <div className="top-events">
          <div className="event-lijevi">
            <EventBubble isPreview />
          </div>
          <div className="event-sredina">
            <EventBubble isPreview />
          </div>
          <div className="event-desni">
            <EventBubble isPreview />
          </div>
        </div>
        <div className="about-easyAid">
          <div className="image-container">
            <Image
              src={akcija1}
              alt="Volonteri"
              layout="responsive"
              className="photo1"
            />
            {/*
             */}
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

            <Link className="link-btn green-btn" href="/feed">
              Pronađi događaj
            </Link>
          </div>
        </div>

        <h2 className="headings">Problem ti je organizacija i promocija?</h2>
        <div className="about-organisation">
          <div className="image-container2"></div>
          <div className="side-text2">
            <h2>Sve na jednom mjestu</h2>
            <p>
              Dosta vam je korištenja različitih aplikacija kako bi dogovorili
              akciju? Nudimo vam aplikaciju u kojoj možete dogovoriti sve
              detalje unutar jednog obrasca.
            </p>
            <Link className="link-btn regular-btn" href="/">
              Stvori događaj
            </Link>
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
                layout="fill"
                className="sponsor"
              />
            </div>
            <div className="sponsor-logo">
              <Image
                src="/images/tvzMc2.png"
                alt="Tvz Mc2"
                title="Tvz Mc2"
                layout="fill"
                className="sponsor"
              />
            </div>

            <div className="sponsor-logo">
              <Image
                src="/images/tvzLogo.png"
                alt="Tehničko veleučilište u Zagrebu"
                title="Tehničko veleučilište u Zagrebu"
                layout="fill"
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
