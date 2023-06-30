"use client";
"use router";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EventBubble } from "@/components/event/event";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { fetchSubmittedEvents } from "@/firebase/fetchSubmittedEvents";

import "./prijavljene_akcije.scss";

function ActiveFeed() {
  const [Listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSubmittedEvents({
        collection: "actions",
        docField: "active",
        docValue: true,
        docFieldTwo: "registered",
        docValueTwo: localStorage.getItem("user"),
      });
      setListing(response);
      console.log(Listing);
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
            <div className="active-events">
              {Listing.map((action) => (
                <Link href={`/aktivne_akcije/${action[0].actionID}`}>
                  <EventBubble
                    isPreview={false}
                    isInActive={false}
                    isInFeed={true}
                    action={action}
                    daysLeft={999}
                    anyChanges={false}
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
