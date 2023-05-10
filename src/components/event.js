"use client";

import React, { useState, useRef } from "react";
import "./cssFiles/event.scss";
import { Event, EventDiv } from "./eventModal";
import reactDom from "react-dom";

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
