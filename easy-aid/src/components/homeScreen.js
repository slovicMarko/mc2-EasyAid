import React from 'react';
import sponzor_1 from "../images/sponzor1.jpg";
import sponzor_2 from "../images/sponzor2.jpg";
import sponzor_3 from "../images/sponzor3.jpg";

function EmptySpace ({windowHeightPercentage}) {
    return (
        <div style={{ height: `${windowHeightPercentage}vh` }}> </div>
    );
}

function HomeScreen () {
    return(
        <>
            <EmptySpace windowHeightPercentage={15} />
            <div className="front-windows">
                <p className="front-window-font">
                    Oduvijek ste željeli volontirati, a neznate kako početi?
                </p>
            </div>
            <EmptySpace windowHeightPercentage={10} />

            <div className="front-windows">
                <p className="front-window-font">
                    Bavite se organizacijom volonterskih akcija i planiranje Vam je oduvijek bio problem?
                </p>
            </div>
            <EmptySpace windowHeightPercentage={10} />

            <div className="front-windows">
                <p className="front-window-font">
                    ---
                </p>
            </div>
            <EmptySpace windowHeightPercentage={5} />

            <hr/>
            <h2>Sponzori</h2>
            <img className='sponsor-logo' src={sponzor_1} alt="Sponzor1"></img>
            <img className='sponsor-logo' src={sponzor_2} alt="Sponzor2"></img>
            <img className='sponsor-logo' src={sponzor_3} alt="Sponzor3"></img>
            <hr/>

        </>
    );
};
  
export default HomeScreen;