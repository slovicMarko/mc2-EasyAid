import React from "react";
import { EmptySpace } from "../standard.js";
import { Logo1, Logo1Full } from "../logo1.js";

import "./homePage.css";

/*
https://react-icons.github.io/react-icons/    za ikone, instalirao sam sve
https://www.freecodecamp.org/news/how-to-use-svg-icons-in-react-with-react-icons-and-font-awesome/  za dodatne ikone, isto sve rj
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
      <img
        className="sponsor-logo"
        src="/images/sponzor_1"
        alt="Sponzor1"
      ></img>
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
