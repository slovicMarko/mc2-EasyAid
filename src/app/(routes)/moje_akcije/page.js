"use client";
"use router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; 

import { EventEdit } from "@/components/event/EventEditable";
import "./moje_akcije.scss";

import { fetchEvents } from "@/firebase/fetchEvents";

const isActive = (href) => {
  return router.pathname === href;
};

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
  }, []);

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
        {Listing.map((action) => (
          <Link href={`/aktivne_akcije/${action.actionID}`}>
            <EventEdit key={action[0].actionID} action={action[0]} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OrganiserFeed;
