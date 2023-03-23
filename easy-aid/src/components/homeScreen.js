import React from 'react';
//import sponzor1 from "../images";
  
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
            <img className='sponsor-logo' src="../images/sponzor1.jpg" alt="Sponzor1"></img>
            <img className='sponsor-logo' src="../images/sponzor2.jpg" alt="Sponzor2"></img>
            <img className='sponsor-logo' src="../images/sponzor3.jpg" alt="Sponzor3"></img>
            <hr/>

        </>
    );
};
  
export default HomeScreen;