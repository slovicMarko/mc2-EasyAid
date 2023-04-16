"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./cssFiles/event.scss";

export const Event = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="event">
      <div className="eventContent">
        <div className="eventHeader">
          <h2>Pomoć stradalima u potresu (selo to i to)</h2>
          <h3>Crveni Križ</h3>
        </div>
        <div className="eventSideInfo">
          <h4>Zainteresiranih</h4>
          <h5>28</h5>
          <h4>Dolazi</h4>
          <h5>12</h5>
        </div>
        <button className="closeButton" onClick={onClose}>
          Izađi
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>,
    document.body
  );
};

const EventDiv = () => {
  const portalContainer = document.getElementById("about-event");
  return ReactDOM.createPortal(
    <div className="event">
      <div className="eventContent">
        <div className="eventHeader">
          <h2>Pomoć stradalima u potresu (selo to i to)</h2>
          <h3>Crveni Križ</h3>
        </div>
        <div className="eventSideInfo">
          <h4>Zainteresiranih</h4>
          <h5>28</h5>
          <h4>Dolazi</h4>
          <h5>12</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>,
    portalContainer
  );
};

export function EventBubble({ isPreview, isInActive, isInFeed }) {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };
  /*
  console.log("isInActive: ", isInActive);
  console.log("isPreview: ", isPreview);
  console.log("isInFeed: ", isInFeed);
  */
  let eventClass = "";
  if (isPreview === true) {
    eventClass = "event--preview";
    isInFeed = false;
  } else if (isInActive === true) {
    eventClass = "event--active-feed";
    isInFeed = false;
  } else if (isInFeed === true) {
    eventClass = "eventButton";
  }
  console.log("eventClass", eventClass);

  return (
    <div className={eventClass}>
      <button onClick={handleEventClick}>
        <div className="eventBubble">
          <div className="eventBubbleHeader">
            <h2>Pomoć žrtvama potresa(centar Petrinje)</h2>
          </div>
          <div className="eventMiddle">
            <h3>Hrvatski crveni križ</h3>
            <h4>25.lipnja 2023.</h4>
          </div>
          <p>
            Potrebna pomoć u području graditeljstva (popravljanje krovova i
            skidanje dimnjaka), briga o starijim i nemoćnim osobama
          </p>
        </div>
      </button>

      {isEventOpen && <Event onClose={handleEventClose} />}
    </div>
  );
}

/*
export function EventSmall() {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  return (
    <div className="eventSmall">
      <button onClick={handleEventClick}>
        <div className="">
          <div className="">
            <h2>Naziv akcije</h2>
          </div>
          <div className="">
            <h3>Organizator</h3>
            <h4>16. svibnja 2023.</h4>
          </div>

          <p>Kratak opis, Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      </button>
      {isEventOpen && <Event onClose={handleEventClose} />}
    </div>
  );
}
*/
