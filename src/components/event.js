"use client";
//import React, { useState } from "react";
//import ReactDOM from "react-dom";


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
*/

/*

      <h2>Organiziranje pomoći X i Y</h2>
      <h3>Udruga ta i ta</h3>
      <button onClick={handleCloseModal} className="event-modal-button">
        IZAĐI
      </button>
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
        <b>Zainteresiranih</b>
        <p className="event-stats-numbers">50</p>
      </div>
*/

/*
const EventPortal = ({children}) => {
  return ReactDOM.createPortal(
    <div className="portal-container">
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};
 
export default EventPortal;

*/

/*
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "./event.css";

function MyPortal(props) {
  const [isVisible, setIsVisible] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    const el = document.createElement('div');
    elRef.current = el;
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (elRef.current) {
    return (
      <>
        <div onClick={handleClick}>{props.trigger}</div>
        {isVisible && ReactDOM.createPortal(
          <div className="portal">
            <button onClick={handleDelete}>Delete</button>
            {props.children}
          </div>,
          elRef.current
        )}
      </>
    );
  } else {
    return null;
  }
}

export default MyPortal;

*/

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './event.css';

export const Event = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="event">
      <div className="eventContent">
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
        <h2>Naziv akcije</h2>
        <h3>Organizator</h3>
        <p>Opis akcije WW WWWWW WW WWW WWWWWW WWWWW WW  WWW WWWWW WWWW WWW WWW WWWWW WWW WWWWW WWW WW WWWW WW WWWWWW WWWW WWWWWW WW WWWWWW WWW WWWW WWWWW  W</p>
      </div>
    </div>,
    document.body
  );
};

export function EventBubble() {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  return (
    <div className="eventButton">
      <button onClick={handleEventClick}>
        <div className='eventBubble'>
          <div className="eventHeader">
            <h2>Naziv akcije</h2>
          </div>
          <div className='eventMiddle'>
            <h3>Organizator</h3>
            <p>16. svibnja 2023.</p>
          </div>
          
          <p>Kratak opis, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      </button>
      {isEventOpen && <Event onClose={handleEventClose} />}
    </div>
  );
};
