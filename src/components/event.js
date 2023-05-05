"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./cssFiles/event.scss";
import { Event } from "./eventModal";

const EventDiv = () => {
  const portalContainer = document.getElementById("about-event");            //ref
  return ReactDOM.createPortal(
    <div className="event">
      <div className="event-content">
        <div className="event-header">
          <h2>Pomoć stradalima u potresu (selo to i to)</h2>
          <h3>Crveni Križ</h3>
        </div>
        <div className="event-side-info">
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

  let eventClass = "";
  if (isPreview === true) {
    eventClass = "event--preview";
    isInFeed = false;
  } else if (isInActive === true) {
    eventClass = "event--active-feed";
    isInFeed = false;
  } else if (isInFeed === true) {
    eventClass = "event-button";
  }
  console.log("event-class", eventClass);

  return (
    <div className={eventClass}>
      <button onClick={handleEventClick}>
        <div className="event-bubble">
          <div className="event-bubble-header">
            <h2>Pomoć žrtvama potresa(centar Petrinje)</h2>
          </div>
          <div className="event-middle">
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
