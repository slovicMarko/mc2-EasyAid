/*

"use client";
"use router";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaderboard } from "@/components/leaderboard";
import { EventBubble } from "@/components/event/event";
import "./feed.scss";

function MainFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href; // check if the current page's URL path matches the link's href attribute
  };

  const finishedLoadingAndCanShow = loading && !canShow;

  const feedEvents = [
    {
      id: 1,
      title: "Event 1 ",
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
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Event 4",
      date: "1. prosinca. 2023.",
      organizer: "Caritas Zagreb",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="feed-wrapper">
      <aside>
        <Leaderboard />
      </aside>
      <div>
          <div>
            {feedEvents.map((event) => (
              <EventBubble
                key={event.id}
                isPreview={false}
                isInActive={false}
                isInFeed={true}
                title={event.title}
                date={event.date}
                organizer={event.organizer}
                about={event.about}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default MainFeed;

*/
"use client";
"use router";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Leaderboard } from "@/components/leaderboard";
import { EventBubble } from "@/components/event/event";
import "./feed.scss";

function MainFeed() {
  const [loading, setLoading] = useState(true);
  const [canShow, setCanShow] = useState(false);

  const router = useRouter();
  const isActive = (href) => {
    return router.pathname === href; // check if the current page's URL path matches the link's href attribute
  };

  const finishedLoadingAndCanShow = loading && !canShow;

  const feedEvents = [
    {
      id: 1,
      title: "Event 1 ",
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

  return (
    <div className="feed-wrapper">
      <header>
        <button>Filteri</button>
        <button>Sortiranje</button>
      </header>
      <aside>
        <Leaderboard />
      </aside>
      {feedEvents.map((event) => (
        <Link href={`/feed/${event.id + event.title}`}>
          <EventBubble
            key={event.id}
            isPreview={false}
            isInActive={false}
            isInFeed={true}
            title={event.title}
            date={event.date}
            organizer={event.organizer}
            about={event.about}
          />
        </Link>
      ))}
    </div>
  );
}

export default MainFeed;
