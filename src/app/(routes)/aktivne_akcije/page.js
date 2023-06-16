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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'


const imageURL = "/images/mainContentBack1.jpg";

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

  function UpperMenuSet(button) {
    if (button == "filter") {
      if (filterMenuOn === true) {
        SetFilterMenu(false);
      } else if (sortMenuOn == true) {
        SetSortMenu(false);
        SetFilterMenu(true);
      } else if (filterMenuOn === false) {
        SetFilterMenu(true);
      }
    } else if (button == "sort") {
      if (sortMenuOn === true) {
        SetSortMenu(false);
      } else if (filterMenuOn == true) {
        SetFilterMenu(false);
        SetSortMenu(true);
      } else if (sortMenuOn === false) {
        SetSortMenu(true);
      }
    }
  }

  const [MenuOn, SetMenu] = useState(false);
  const [filterMenuOn, SetFilterMenu] = useState(false);
  const [sortMenuOn, SetSortMenu] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="feed-wrapper">
        <header className="feed-buttons">
          <button onClick={() => UpperMenuSet("filter")}> <FontAwesomeIcon icon={faFilter} style={{color: "#ffffff",}} /> </button>
          <button onClick={() => UpperMenuSet("sort")}> <FontAwesomeIcon icon={faSort} style={{color: "#ffffff",}} /> </button>
        </header>
        {filterMenuOn ? <FilterMenu /> : <></>}
        {sortMenuOn ? <SortMenu /> : <></>}
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
              imageURL={imageURL}
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
