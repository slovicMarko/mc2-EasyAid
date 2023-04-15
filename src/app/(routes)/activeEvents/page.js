"use client";
"use router";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
        <section id="sectionEvents">
          <div className="activeEvents">
            <h2>Aktivne akcije</h2>
            <EventBubble isInActive/>
            <EventBubble isInActive/>
          </div>
          <div className="pastEvents">
            <h2>Prošle akcije</h2>
            <EventBubble isInActive/>
            <EventBubble isInActive/>
          </div>
        </section>
      )}
    </div>
  );
}

export default ActiveFeed;
