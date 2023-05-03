"use client";

import React, { useState } from "react";
import "./cssFiles/eventEditable.scss";
import { Event } from "./eventModal";
import { EventEditModal } from "./EventEditableModal";


export function EventEdit() {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  return (
    <div className="event-organiser">
      <button id="edit-button">
          Edit
        </button>
      <button onClick={handleEventClick}>
        
        <div className="event-edit-bubble">
          <div className="event-edit-bubble-header">
            <h2>Pomoć žrtvama potresa(centar Petrinje)</h2>
          </div>
          <div className="event-edit-middle">
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
