"use client";
"use router";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { EventEdit} from "@/components/EventEditable";
import "./organiser.scss";

function OrganiserFeed() {
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
          <EventEdit />
          <EventEdit/>
          <EventEdit />
          <EventEdit />
        </div>
      )}
    </div>
  );
}

export default OrganiserFeed;
