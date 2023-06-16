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

const imageURL = "/images/mainContentBack1.jpg";

const organiserEvents = [
  {
    id: 1,
    title: "Event 1",
    date: "1. ožujka. 2023.",
    organizer: "Hrvatski Crveni Križ",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: imageURL,
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
    return <div>Loading...</div>;
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
