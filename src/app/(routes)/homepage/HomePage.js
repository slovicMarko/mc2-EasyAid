import React from "react";
import Image from "next/image";

import { Logo1Full } from "src/components/logo1.js";
import { EmptySpace } from "src/components/standard.js";

import "./homePage.css";

/*
https://react-icons.github.io/react-icons/    za ikone, instalirao sam sve
https://www.freecodecamp.org/news/how-to-use-svg-icons-in-react-with-react-icons-and-font-awesome/  za dodatne ikone, isto sve rj
*/

/*  loader za Image
const sponzori = () => {
  return `../../public/images/`;
};
*/

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
      <img className="sponsor-logo" src={"sponzor1.jpg"} alt="Sponzor1"></img>
      {/*
      <Image
        loader={sponzori}
        src="/sponzor1.jpg"
        alt="sponzor"
        width={500}
        height={500}
  />*/}

      <img
        className="sponsor-logo"
        src="/images/sponzor_2"
        alt="Sponzor2"
      ></img>
      <img
        className="sponsor-logo"
        src="/images/sponzor_3"
        alt="Sponzor3"
      ></img>
      <hr />
    </>
  );
}

export default HomePage;
