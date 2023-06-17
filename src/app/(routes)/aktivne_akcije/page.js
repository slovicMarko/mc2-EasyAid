"use client";
"use router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaderboard } from "@/components/leaderboard";
import { EventBubble } from "@/components/event/event";
import { FilterMenu } from "@/components/FilterMenu";
import { SortMenu } from "@/components/SortMenu";

import "firebase/auth";
import { fetchEvents } from "@/firebase/fetchEvents";
import "./aktivne_akcije.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

const imageURL = "/images/mainContentBack1.jpg";

function MainFeed() {
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterMenuOn, SetFilterMenu] = useState(false);
  const [sortMenuOn, SetSortMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
      });
      setListing(response);
      console.log(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  function UpperMenuSet() {
    if (filterMenuOn === true) SetFilterMenu(false);
    else SetFilterMenu(true);
  }

  if (loading) {
    return <div className="spin"></div>;
  }

  return (
    <div>
      <div className="feed-wrapper">
        <header className="feed-buttons">
          <button onClick={() => UpperMenuSet()}>
            {" "}
            <FontAwesomeIcon
              icon={faFilter}
              style={{ color: "#ffffff" }}
              size="lg"
            />{" "}
          </button>
          <div>
            <FontAwesomeIcon
              icon={faSort}
              style={{ color: "#ffffff" }}
              size="xl"
            />
            <SortMenu />
          </div>
        </header>
        {filterMenuOn ? <FilterMenu /> : <></>}
        {Listing.map((action) => (
          <Link href={`/aktivne_akcije/${action[0].actionID}`}>
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
        <aside>
          <Leaderboard />
        </aside>
      </div>
    </div>
  );
}

export default MainFeed;
