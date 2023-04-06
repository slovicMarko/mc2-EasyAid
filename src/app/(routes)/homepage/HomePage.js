import React from "react";
import Image from "next/image";
import Link from "next/link";
import akcija1 from 'public/images/akcija1.png'

import "./homePage.css";

/*
https://react-icons.github.io/react-icons/    za ikone, instalirao sam sve
https://www.freecodecamp.org/news/how-to-use-svg-icons-in-react-with-react-icons-and-font-awesome/  za dodatne ikone, isto sve rj
*/


const sponzori = () => {
  return `../../public/images/`
}


function HomePage() {
  return (
    <>
      {/*<Logo1Full />*/}

      <div className="front-windows">
        <h1 >Volontiraj i pomogni drugima oko sebe!</h1>
        <p className="front-window-font">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras ac nulla sed odio placerat
            maximus vel elementum mi.</p>
    

        <div className="eventButtons">
          <Link className="greenButton" href="/">Pronađi događaj</Link>
          <Link className="regularButton" href="/">Stvori događaj</Link>
        </div>
      </div>

      <div className="partneri">
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
        <hr />
      </div>
      
      <h2 id="SecondHeading">Želiš volontirati, a ne znaš gdje početi?</h2>
      <div className="aboutEasyAid">
        <div className="fotoGeneral1">
          <Image
              src={akcija1}
              //src="/images/akcija1.png"
              alt="Volonteri"
              fill="true"
              className="foto1"
          />
        </div>
        <div className="sideText">
          <h4>Uvijek aktualni događaji</h4>
          <p>U odjeljku "Aktualni događaji" možeš vidjeti sve aktualne akcije</p>

          <h4>Pretraga po lokaciji</h4>
          <p>Želiš pronaći akciju u svojoj blizini?</p>

          <h4>Aktualnost događaja</h4>
          <p>Zaprati organizatora tako da nikad ne propustiš niti jednu željenu akciju</p>

          <button className="greenButton">Pronađi događaj</button>
        </div>
      </div>

    </>
  );
}

export default HomePage;
