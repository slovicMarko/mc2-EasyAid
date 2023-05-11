"use client";

import { useState } from "react";
import "./cssFiles/eventEditable.scss";
import { Event } from "./eventModal";
import { EventEditModal } from "./EventEditableModal";

export function EventEdit({ title, date, organizer, about }) {
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
      {/*
      <button id="info-button" >
          Info
      </button>
      */}
      <button onClick={handleEventClick}>
        <div className="event-edit-bubble">
          <div className="event-edit-bubble-header">
            <h2>{title}</h2>
          </div>
          <div className="event-edit-middle">
            <h3>{organizer}</h3>
            <h4>{date}</h4>
          </div>
          <p>{about}</p>
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
