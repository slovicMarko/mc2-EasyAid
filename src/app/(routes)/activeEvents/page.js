"use client";
"use router";
import React, { useState, useRef, useEffect} from "react";
import { useRouter } from "next/navigation";
import { EventBubble } from "@/components/event";
import "./active.scss";

function ActiveFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();
  console.log(router.pathname);
  const isActive = (href) => {
    return router.pathname === href; // check if the current page's URL path matches the link's href attribute
  };

  const finishedLoadingAndCanShow = loading && !canShow;

  const activeEvents = [
    { id: 1, title: "Event 1 na kojem radis to to i to", date: "1. ožujka. 2023.", organizer: "Hrvatski Crveni Križ", about:"Loremm u bj bh bh bhb hbh bh bh bh bhb h hbh bh bh bhb hb m"},
    { id: 2, title: "Event 2", date: "1. travnja. 2023.", organizer: "72 sata bez kompromisa", about:"Loremmmf"},
    { id: 3, title: "Event 3", date: "1. svibnja. 2023.", organizer: "Župa Kutina", about:"Loremfs hhhh hhhh hhhhhhhhh hhhhhhhhhhhh hhhhhhhh hhhhhhhhh hhhh hhhhhhhmm"},
  ];

  console.log(finishedLoadingAndCanShow);

  return (
    <div>
      {finishedLoadingAndCanShow && (
        <div className="active-feed">
          <section id="section-events">
            <div className="active-events">
              <h1>Aktivne akcije</h1>
              {activeEvents.map((event) => (
                <EventBubble
                key={event.id}
                isPreview={false}
                isInActive={true}
                isInFeed={false}
                title={event.title}
                date={event.date}
                organizer = {event.organizer}
                about={event.about}
                />
              ))}
            </div>
            <div className="past-events">
              <h1>Prošle akcije</h1>
              <EventBubble isInActive/>
              <EventBubble isInActive/>
            </div>
          </section>
          <section id="section-info">
            <div id="about-event" >

            </div>
            <hr/>
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
      )}
    </div>
  );
}

export default ActiveFeed;
