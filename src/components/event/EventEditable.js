"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./../cssFiles/eventEditable.scss";

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
      <button onClick={handleEventClick} className="event-preview-button">
        <div className="event-edit-bubble">
          <div className="event-edit-bubble-header">
            {/*<img src={action.imageURL}/>*/}
            <img src="/images/mainContentBack1.jpg"/>
          </div>
          <div className="event-edit-middle">
            <h2>{action.name}</h2>
            <h3>Organizator</h3>
            <h4>{action.date}</h4>
          </div>
          <p>{action.about}</p>
        </div>
      </button>

    </div>
  );
}
