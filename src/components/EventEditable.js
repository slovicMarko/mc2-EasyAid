"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./cssFiles/eventEditable.scss";

export const EventEditModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="eventEdit">
      <div className="eventEditContent">
        <div className="eventEditHeader">
          
        </div>
        <div className="eventEditSideInfo">
          
        </div>
        <button className="closeButton" onClick={onClose}>
          Izađi
        </button>
        <div>
          
        </div>
      </div>
    </div>,
    document.body
  );
};

export function EventEdit() {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  return (
    <div className="eventOrganiser">
      <button onClick={handleEventClick}>
        <div className="eventEditBubble">
          <div className="eventEditBubbleHeader">
            <h2>Pomoć žrtvama potresa(centar Petrinje)</h2>
          </div>
          <div className="eventEditMiddle">
            <h3>Hrvatski crveni križ</h3>
            <h4>25.lipnja 2023.</h4>
          </div>
          <p>
            Potrebna pomoć u području graditeljstva (popravljanje krovova i
            skidanje dimnjaka), briga o starijim i nemoćnim osobama
          </p>
        </div>
      </button>

      {isEventOpen && <EventEditModal onClose={handleEventClose} />}
    </div>
  );
}
