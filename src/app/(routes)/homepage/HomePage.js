import React from "react";
import Image from "next/image";

import { Logo1Full } from "src/components/logo1.js";
import { EmptySpace } from "src/components/standard.js";

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
      <EmptySpace windowHeightPercentage={5} />
      <Logo1Full />
      <EmptySpace windowHeightPercentage={15} />
      <div className="front-windows">
        <p className="front-window-font">
          Oduvijek ste željeli volontirati, a neznate kako početi?
        </p>
      </div>
      <EmptySpace windowHeightPercentage={10} />

      <div className="front-windows">
        <p className="front-window-font">
          Bavite se organizacijom volonterskih akcija i planiranje Vam je
          oduvijek bio problem?
        </p>
      </div>
      <EmptySpace windowHeightPercentage={10} />

      <div className="front-windows">
        <p className="front-window-font">---</p>
      </div>
      <EmptySpace windowHeightPercentage={5} />

      <hr />
      <h2>Sponzori</h2>
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
      </div>
      <hr />
    </>
  );
}

export default HomePage;
