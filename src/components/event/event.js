"use client";

import { useMemo, useState } from "react";
import "./../cssFiles/event.scss";
import { Event } from "./eventModal";

export function EventBubble({
  isPreview,
  isInActive,
  isInFeed,
  activeFunc,
  daysLeft,
  anyChanges,
  action,
  imageURL,
}) {
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
      <button onClick={activeFunc}>
        {daysLeft < 5 ? (
          <div className="days-alert">
            <h2>Još {daysLeft} dana za prijavu!</h2>
          </div>
        ) : (
          <></>
        )}
        {anyChanges ? (
          <div className="change-alert">
            <h2>Promjene na akciji!</h2>
          </div>
        ) : (
          <></>
        )}
        <div className="event-bubble">
          <div className="event-bubble-header">
            <img src={imageURL} />
          </div>
          <div className="event-middle">
            <h2>{action.name}</h2>
            <h3>{action.ownerID}</h3>
            <h4>{action.date}</h4>
          </div>
          <p>
            {action.about.length > 100
              ? action.about.slice(0, 100) + "..."
              : action.about}
          </p>
        </div>
      </button>
    </div>
  );
}
