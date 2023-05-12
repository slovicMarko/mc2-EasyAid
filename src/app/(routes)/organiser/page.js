"use client";
"use router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { EventEdit } from "@/components/event/EventEditable";
import "./organiser.scss";

const isActive = (href) => {
  return router.pathname === href;
};

const organiserEvents = [
  {
    id: 1,
    title: "Event 1",
    date: "1. ožujka. 2023.",
    organizer: "Hrvatski Crveni Križ",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Event 2",
    date: "1. travnja. 2023.",
    organizer: "72 sata bez kompromisa",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Event 3",
    date: "1. svibnja. 2023.",
    organizer: "Župa Kutina",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  
  },
  {
    id: 4,
    title: "Event 4",
    date: "1. prosinca. 2023.",
    organizer: "Caritas Zagreb",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  
  },
];

function OrganiserFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();

  const addEvent = () => {
    router.push("/dodaj");
  };

  const finishedLoadingAndCanShow = loading && !canShow;

  return (
    <div>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="add-icon"
        onClick={addEvent}
      />
      {finishedLoadingAndCanShow && (
        <div>
          {organiserEvents.map((event) => (
            <EventEdit
              key={event.id}
              title={event.title}
              date={event.date}
              organizer={event.organizer}
              about={event.about}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OrganiserFeed;
