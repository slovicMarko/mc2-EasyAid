"use client";
"use router";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EventBubble } from "@/components/event/event";
import "./active.scss";

const isActive = (href) => {
  return router.pathname === href;
};

const activeEvents = [
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
];

const pastEvents = [
  {
    id: 0,
    title: "Event 0",
    date: "1. ožujka. 2023.",
    organizer: "Hrvatski Crveni Križ",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: -1,
    title: "Event -1",
    date: "2. siječnja. 2023.",
    organizer: "72 sata bez kompromisa",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function ActiveFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();

  const finishedLoadingAndCanShow = loading && !canShow;

  return (
    <div>
      <div className="active-feed">
        <section id="section-events">
          <div className="active-events">
            <h1>Aktivne akcije</h1>
            {activeEvents.map((event) => (
              <EventBubble
                key={event.id}
                isPreview={false}
                isInActive
                isInFeed={false}
                title={event.title}
                date={event.date}
                organizer={event.organizer}
                about={event.about}
              />
            ))}
          </div>
          <div className="past-events">
            <h1>Prošle akcije</h1>
            {pastEvents.map((event) => (
              <EventBubble
                key={event.id}
                isPreview={false}
                isInActive
                isInFeed={false}
                title={event.title}
                date={event.date}
                organizer={event.organizer}
                about={event.about}
              />
            ))}
          </div>
        </section>
        <section id="section-info">
          <div id="about-event"></div>
          <hr />
          <div className="overall-statistics">
            <h2>Odrađenih akcija</h2>
            <p>5</p>
            <h2>Ukupno vrijeme rada</h2>
            <p>8 sati</p>
            <h2>Broj različitih organizacija</h2>
            <p>3</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ActiveFeed;
