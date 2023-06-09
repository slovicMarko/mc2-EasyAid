"use client";
"use router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaderboard } from "@/components/leaderboard";
import { EventBubble } from "@/components/event/event";

import "firebase/auth";
import { fetchEvents } from "@/firebase/fetchEvents";
import "./aktivne_akcije.scss";

function MainFeed() {
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
      });
      setListing(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="feed-wrapper">
      <header className="feed-buttons">
        <button>Filteri</button>
        <button>Sortiranje</button>
      </header>
      <aside>
        <Leaderboard />
      </aside>
      {Listing.map((action) => (
        <Link href={`/aktivne_akcije/${action.actionID}`}>
          <EventBubble
            key={action.actionID}
            isPreview={false}
            isInActive={false}
            isInFeed={true}
            action={action}
            daysLeft={2}
            anyChanges={false}
          />
        </Link>
      ))}
    </div>
  );
}

export default MainFeed;
