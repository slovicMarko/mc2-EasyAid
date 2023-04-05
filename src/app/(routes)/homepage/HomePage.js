import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      
      <div className="aboutEasyAid">
        <h2>Želiš volontirati, a ne znaš gdje početi?</h2>
      </div>

    </>
  );
}

export default HomePage;
