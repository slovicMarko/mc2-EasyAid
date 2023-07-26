"use client";

import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./../cssFiles/eventEditable.scss";

const months = ["siječnja","veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"]

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

  const date = action.date.split('-') 

  return (
    <div className="event-organiser">
      <Link href={`moje_akcije/${action.actionID}`}>
        <button id="edit-button" onClick={handleFormClick}>
          <FontAwesomeIcon icon={faPen} className="edit-icon" />
        </button>
      </Link>
      <Link href={`/aktivne_akcije/${action.actionID}`}>
        <button onClick={handleEventClick} className="event-preview-button">
          <div className="event-edit-bubble">
            <div className="event-edit-bubble-header">
              <img src={action.photo} />
            </div>
            <div className="event-edit-middle">
              <h2>{action.name}</h2>
              <h4>{date[2]}. {months[date[1]-1]} {date[0]}.</h4>
            </div>
            <p>
              {action.about.length > 100
                ? action.about.slice(0, 100) + "..."
                : action.about}
            </p>
          </div>
        </button>
      </Link>
    </div>
  );
}
