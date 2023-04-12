"use client";
import React, { useState } from "react";
import EventPortal from "@/components/event";
//import { Portal } from "react-portal";
import Event from '@/components/event';


/*
function MainFeed() {
  return (
    <div>
      <h1>Main Feed</h1>
      <div className="Events">
        <Portal>
          <h1> Welcome to React Portal!</h1>
        </Portal>
      </div>
    </div>
  );
}
*/

function MainFeed() {
  const [isEventOpen, setIsEventOpen] = useState(false);

  const handleEventClick = () => {
    setIsEventOpen(true);
  };

  const handleEventClose = () => {
    setIsEventOpen(false);
  };

  return (
    <div>
      <button onClick={handleEventClick}>Open Event</button>
      {isEventOpen && <Event onClose={handleEventClose} />}
    </div>
  );
};


export default MainFeed;
