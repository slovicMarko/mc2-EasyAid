"use client";

import { useMemo } from "react";
import Link from "next/link";
import "./../cssFiles/event.scss";

export function EventBubble({
  isPreview,
  isInActive,
  isInFeed,
  activeFunc,
  daysLeft,
  anyChanges,
  action,
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
            <img src={action[0].photo} />
          </div>
          <div className="event-middle">
            <h2>{action[0].name}</h2>
            {/* <Link href={`/profil/${action[1].userID}`} className="link"> */}
            <h3>{`${action[1]?.fname} ${action[1]?.lname}`}</h3>
            {/* </Link> */}
            <h4>{action[0].date}</h4>
          </div>
          <p>
            {action[0].about.length > 100
              ? action[0].about.slice(0, 100) + "..."
              : action[0].about}
          </p>
        </div>
      </button>
    </div>
  );
}
