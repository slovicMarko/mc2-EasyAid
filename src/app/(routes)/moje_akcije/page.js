"use client";
"use router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { EventEdit } from "@/components/event/EventEditable";
import "./moje_akcije.scss";

import { fetchEvents } from "@/firebase/fetchEvents";

function OrganiserFeed() {
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const userID = localStorage.getItem("user");
  const router = useRouter();

  const addEvent = () => {
    router.push("/dodaj");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEvents({
        collection: "actions",
        docField: "ownerID",
        docValue: userID,
      });
      setListing(response);
      setLoading(false);
    };
    fetchData();
  }, [userID]);

  if (loading) {
    return <div className="spin"></div>;
  }
  return (
    <div>
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="add-icon"
        onClick={addEvent}
      />
      <div className="organiser-container">
        {Listing.reverse().map((action) => (
          <EventEdit key={action[0].actionID} action={action[0]} />
        ))}
      </div>
    </div>
  );
}

export default OrganiserFeed;
