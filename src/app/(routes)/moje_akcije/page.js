"use client";
"use router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { EventEdit } from "@/components/event/EventEditable";
import "./moje_akcije.scss";

import { fetchOwnerEvents } from "@/firebase/fetchOwnerEvents";

function OrganiserFeed() {
  const [loading, setLoading] = useState(true);
  const [ListingActive, setListingActive] = useState([]);
  const [ListingPast, setListingPast] = useState([]);
  const router = useRouter();

  const addEvent = () => {
    router.push("/dodaj");
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseActive = await fetchOwnerEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
        docFieldTwo: "ownerID",
        docValueTwo: localStorage.getItem("user"),
      });
      const responsePast = await fetchOwnerEvents({
        collection: "actions",
        docField: "active",
        docValue: false,
        docFieldTwo: "ownerID",
        docValueTwo: localStorage.getItem("user"),
      });
      setListingActive(responseActive);
      setListingPast(responsePast);
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
      <h1>Aktivne akcije</h1>
      <div className="organiser-container">
        {ListingActive.reverse().map((action) => (
          <EventEdit key={action[0].actionID} action={action[0]} />
        ))}
      </div>
      <h1>Neaktivne akcije</h1>
      <div className="organiser-container">
        {ListingPast.reverse().map((action) => (
          <EventEdit key={action[0].actionID} action={action[0]} />
        ))}
      </div>
    </div>
  );
}

export default OrganiserFeed;
