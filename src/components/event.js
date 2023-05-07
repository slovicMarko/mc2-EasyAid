"use client"

import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./cssFiles/event.scss";
import { Event, EventDiv } from "./eventModal";

export function EventBubble({ isPreview, isInActive, isInFeed }) {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const eventRoot = useRef(null);

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

  if (isEventOpen && isInActive) {
    ReactDOM.createRoot(eventRoot.current).render(<EventDiv />);
  }

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

      <div ref={eventRoot}></div>

      {isEventOpen && isInFeed && <Event onClose={handleEventClose} />}
    </div>
  );
}