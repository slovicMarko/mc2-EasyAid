"use client";

import React, { useState, useRef } from "react";
import "./cssFiles/event.scss";
import { Event, EventDiv } from "./eventModal";
import reactDom from "react-dom";

export function EventBubble({ isPreview, isInActive, isInFeed, title, date, organizer, about}) {
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
            <h2>{title}</h2>
          </div>
          <div className="event-middle">
            <h3>{organizer}</h3>
            <h4>{date}</h4>
          </div>
          <p>
            {about}
          </p>
        </div>
      </button>

      {isEventOpen && 
          <Event onClose={handleEventClose} 
          title = {title}
          date = {date}
          organizer = {organizer}
          about = {about}
          />}
    </div>
  );
}
