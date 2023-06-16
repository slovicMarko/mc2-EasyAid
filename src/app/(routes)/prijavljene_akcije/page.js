"use client";
"use router";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EventBubble } from "@/components/event/event";

import { getAuth } from "firebase/auth";
import { fetchEvents } from "@/firebase/fetchEvents";

import "./prijavljene_akcije.scss";

const isActive = (href) => {
  return router.pathname === href;
};

const imageURL = "/images/mainContentBack1.jpg";

function ActiveFeed() {
  const [showEvent, setShowEvent] = useState(false);
  const [ListingActive, setListingActive] = useState([]);
  const [ListingPast, setListingPast] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const router = useRouter();

  const handleClick = () => {
    console.log("radi djelomicno sad treba rj div");
    setShowEvent(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseActive = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: "true",
      });
      const responsePast = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: "false",
      });
      setListingActive(responseActive);
      setListingPast(responsePast);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const responseActive = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
      });
      const responsePast = await fetchEvents({
        collection: "actions",
        docField: "active",
        docValue: false,
      });
      setListingActive(responseActive);
      setListingPast(responsePast);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return auth.currentUser ? (
    auth.currentUser.emailVerified ? (
      <div>
        <div className="active-feed">
          <section className="section-events">
            <h1>Aktivne akcije</h1>
            <div className="active-events">
              {ListingActive.map((action) => (
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
              ))}
            </div>
            <h1>Prošle akcije</h1>
            <div className="past-events">
              {ListingPast.map((action) => (
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
              ))}
            </div>
          </section>
        </div>
      </div>
    ) : (
      router.push("/aktivne_akcije")
    )
  ) : (
    router.push("/aktivne_akcije")
  );
}

export default ActiveFeed;
