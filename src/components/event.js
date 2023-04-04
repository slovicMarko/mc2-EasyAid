'use client';

import React, { useState } from "react";
//import ReactModal from "react-modal";
import { EmptySpace } from "./standard";
import { Portal } from 'react-portal';


/*
function Bubble(props) {
  const handleClick = () => {
    console.log('Div was clicked!');
    // do something else here
  };

  return (
    <div onClick={handleClick}>
      {props.children}
    </div>
  );
}
*/

/*
function Bubble(props) {
  return <div className="bubble-div">{props.children}</div>;
}


const EventBubble = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    document.body.classList.add("modal-open");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove("modal-open");
    setShowModal(false);
  };




  
  const EventInfoModal = () => (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false} // This is required to avoid a warning message
      className="event-window-info"
      id="modal-window"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "0.3s",
        },
      }}
    >
      <h2>Organiziranje pomoći X i Y</h2>
      <h3>Udruga ta i ta</h3>
      <button onClick={handleCloseModal} className="event-modal-button">
        IZAĐI
      </button>

      <EmptySpace windowHeightPercentage={2} isGlobal={false}/>
      <div className="event-info-text">
        <b>Datum:</b>
        <p>12.travnja 2023.</p>
        <h4>Opis</h4>
        <div >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A amet ipsum
          ipsam sed adipisci, id doloribus consequatur aliquam voluptas iste quasi
          eligendi cumque ut hic, cupiditate iure voluptatem provident nobis ipsa
          voluptatum sunt soluta? At commodi animi assumenda repellat, asperiores,
          nemo id maiores iure, blanditiis eius quis doloremque corporis
          consequatur incidunt harum? Voluptatum reprehenderit laudantium,
          necessitatibus libero iure tenetur, ratione deleniti similique quo
          suscipit repellat commodi, sequi accusantium nihil culpa unde eligendi
          tempora. Illum placeat sapiente quaerat ipsam molestias eaque magnam,
          magni deleniti id expedita! Non, iste quis reiciendis officiis assumenda
          dolorum ex perferendis, quos consequatur, optio nobis magni dolores.
        </div>
      </div>
      
      <div className="event-info-stats" id="event-info-statsID">
        <b>Broj ljudi</b>
        <p className="event-stats-numbers">28</p>
        <EmptySpace windowHeightPercentage={5} isGlobal={false}/>
        <b>Zainteresiranih</b>
        <p className="event-stats-numbers">50</p>
      </div>
    </ReactModal>
  );

  return (
    <>
      <div>
        <div className="rectangle-container">
          <Bubble>
            {showModal && <EventInfoModal />}

            <div className="rectangle" onClick={handleOpenModal}>
              <h1 className="event-name-style">Ime eventa</h1>
              <h2 className="organiser-style">Organizator</h2>
              <p>Kratak opis akcije...</p>
            </div>
          </Bubble>
        </div>
      </div>
    </>
  );
};


export default EventBubble;
*/