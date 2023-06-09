"use client";
"use router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaderboard } from "@/components/leaderboard";
import { EventBubble } from "@/components/event/event";
import {FilterMenu} from "@/components/FilterMenu"
import {SortMenu} from "@/components/SortMenu"

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

  const [MenuOn, SetMenu] = useState(false);
  const [filterMenuOn, SetFilterMenu] = useState(false);
  const [sortMenuOn, SetSortMenu]=  useState(false);
  //let filterMenuOn = false;
  //let sortMenuOn = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  function UpperMenuSet (button) {
    if (button == "filter") {
      if (filterMenuOn === true) {
        SetFilterMenu(false);
      }
      else if(sortMenuOn == true) {
        SetSortMenu(false);
        SetFilterMenu(true);
      }
      else if (filterMenuOn === false) {
        SetFilterMenu(true);
      }

    }
    else if(button=="sort") {
      if (sortMenuOn === true) {
        SetSortMenu(false);
      }
      else if(filterMenuOn == true) {
        SetFilterMenu(false);
        SetSortMenu(true);
      }
      else if (sortMenuOn === false) {
        SetSortMenu(true);
      }

    }

  }

  return (
    <div>
      <div className="feed-wrapper">
        <header className="feed-buttons">
          <button onClick={() => UpperMenuSet("filter")}>Filteri</button>
          <button onClick={() => UpperMenuSet("sort")}>Sortiranje</button>
        </header>
        {filterMenuOn ? <FilterMenu/> : <></>}
        {sortMenuOn ? <SortMenu/> : <></>}
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
    </div>
  );
}

export default MainFeed;