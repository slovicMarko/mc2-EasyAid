"use client";
"use router";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EventBubble } from "@/components/event/event";
import Link from "next/link";
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
    return <div className="spin"></div>;
  }

  return auth.currentUser ? (
    auth.currentUser.emailVerified ? (
      <div>
        <div className="active-feed">
          <section className="section-events">
            <h1>Aktivne akcije</h1>
            <div className="active-events">
              {ListingActive.map((action) => (
                <Link href={`/aktivne_akcije/${action.actionID}`}>
                  <EventBubble
                    key={action[0].actionID}
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
            </div>
            <h1>Prošle akcije</h1>
            <div className="past-events">
              {ListingPast.map((action) => (
                <Link href={`/aktivne_akcije/${action.actionID}`}>
                  <EventBubble
                    key={action[0].actionID}
                    isPreview={false}
                    isInActive={false}
                    isInFeed={true}
                    action={action}
                    daysLeft={999}
                    anyChanges={false}
                    imageURL={imageURL}
                  />
                </Link>
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
