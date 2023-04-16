"use client";
"use router";
import React, { useState } from "react";
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

  console.log(finishedLoadingAndCanShow);

  return (
    <div>
      {finishedLoadingAndCanShow && (
        <div className="activeFeed">
          <section id="section-events">
            <div className="active-events">
              <h2>Aktivne akcije</h2>
              <EventBubble isInActive/>
              <EventBubble isInActive/>
            </div>
            <div className="past-events">
              <h2>Prošle akcije</h2>
              <EventBubble isInActive/>
              <EventBubble isInActive/>
            </div>
          </section>
          <section id="section-info">
            <div id="about-event">

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
