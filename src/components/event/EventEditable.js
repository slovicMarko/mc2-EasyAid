"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./../cssFiles/eventEditable.scss";
import { Event } from "./eventModal";
import { EventEditModal } from "./EventEditableModal";

export function EventEdit({ action }) {
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
        <FontAwesomeIcon icon={faPen} className="edit-icon" />
      </button>
      <button onClick={handleEventClick}>
        <div className="event-edit-bubble">
          <div className="event-edit-bubble-header">
            <h2>{action.name}</h2>
          </div>
          <div className="event-edit-middle">
            <h3>Organizator</h3>
            <h4>{action.date}</h4>
          </div>
          <p>{action.about}</p>
        </div>
      </button>

      {isFormOpen && <EventEditModal onClose={handleFormClose} />}
      {isEventOpen && (
        <Event
          onClose={handleEventClose}
          title={title}
          date={date}
          organizer={organizer}
          about={about}
        />
      )}
    </div>
  );
}
