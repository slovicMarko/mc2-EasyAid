"use client";
"use router";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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

  console.log(finishedLoadingAndCanShow);

  return (
    <div>
      {finishedLoadingAndCanShow && (
        <div>
          <EventBubble />
          <EventBubble />
          <EventBubble />
          <EventBubble />
        </div>
      )}
    </div>
  );
}

export default MainFeed;
