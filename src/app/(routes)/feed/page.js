"use client";
"use router";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { EventBubble } from "@/components/event";
import "./feed.scss";

function MainFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();
  console.log(router.pathname);
  const isActive = (href) => {
    return router.pathname === href; // check if the current page's URL path matches the link's href attribute
  };

  const finishedLoadingAndCanShow = loading && !canShow;

  const feedEvents = [
    { id: 1, title: "Event 1 na kojem radis to to i to", date: "1. ožujka. 2023.", organizer: "Hrvatski Crveni Križ", about:"Loreremm u bj bh bh bhb hbh bh bh bh bhb h hbh bh bh bhb hb mmmm"},
    { id: 2, title: "Event 2", date: "1. travnja. 2023.", organizer: "72 sata bez kompromisa", about:"Loremmmf"},
    { id: 3, title: "Event 3", date: "1. svibnja. 2023.", organizer: "Župa Kutina", about:"Loremfs hhhh hhhh hhhhhhhhh hhhhhhhhhhhh hhhhhhhh hhhhhhhhh hhhh hhhhhhhmm"},
    { id: 4, title: "Event 4", date: "1. prosinca. 2023.", organizer: "Caritas Zagreb", about:"Loremfs dgdfdfhdfhdfh hhhhhhhhhhhh hhhhhhhh hhhhhhhhh hhhh hhhhhhhmm"}
  ];

  return (
    <div>
      {finishedLoadingAndCanShow && (
        <div>
          {feedEvents.map((event) => (
                <EventBubble
                key={event.id}
                isPreview={false}
                isInActive={false}
                isInFeed={true}
                title={event.title}
                date={event.date}
                organizer = {event.organizer}
                about={event.about}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default MainFeed;
