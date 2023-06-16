"use client";
"use router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { EventEdit } from "@/components/event/EventEditable";
import "./moje_akcije.scss";

import { getAuth } from "firebase/auth";
import { fetchEvents } from "@/firebase/fetchEvents";

const isActive = (href) => {
  return router.pathname === href;
};

function OrganiserFeed() {
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userID, setUserID] = useState();

  const router = useRouter();

  const addEvent = () => {
    router.push("/dodaj");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEvents({
        collection: "actions",
        docField: "ownerID",
        docValue: "cJ0CTN4rsoVXdFiNSf4Z11FgUU22",
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
      <div>
        {Listing.map((action) => (
          <EventEdit key={action.actionID} action={action} />
        ))}
      </div>
    </div>
  );
}

export default OrganiserFeed;
