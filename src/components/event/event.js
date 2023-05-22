"use client";

import { useMemo, useState } from "react";
import "./../cssFiles/event.scss";
import { Event } from "./eventModal";

export function EventBubble({
  isPreview,
  isInActive,
  isInFeed,
  title,
  date,
  organizer,
  about,
  activeFunc,
}) {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  const eventClass = useMemo(() => {
    if (isPreview === true) {
      return "event--preview";
    } else if (isInActive === true) {
      return "event--active-feed";
    } else if (isInFeed === true) {
      return "event-button";
    }
    return "";
  }, [isPreview, isInActive, isInFeed]);

  return (
    <div className={eventClass}>
      <button onClick={isInActive ? activeFunc : handleEventClick}>
        <div className="event-bubble">
          <div className="event-bubble-header">
            <h2>{title}</h2>
          </div>
          <div className="event-middle">
            <h3>{organizer}</h3>
            <h4>{date}</h4>
          </div>
          <p>{about}</p>
        </div>
      </button>

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
