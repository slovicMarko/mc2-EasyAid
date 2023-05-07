"use client";

import React, { useState } from "react";
import "./cssFiles/eventEditable.scss";
import { Event } from "./eventModal";
import { EventEditModal } from "./EventEditableModal";


export function EventEdit() {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  const handleFormClick = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="event-organiser">
      <button id="edit-button" onClick={handleFormClick}>
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

      {isFormOpen && <EventEditModal onClose={handleFormClose} />}
      {isEventOpen && <Event onClose={handleEventClose} />}
    </div>
  );
}
