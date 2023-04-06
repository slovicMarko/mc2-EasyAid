"use client";
import React, { useState } from "react";
import EventPortal from "@/components/event";
import { Portal } from "react-portal";
import MyPortal from '@/components/event';


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
 
  const trigger = <div className="trigger">Click me to show the portal!</div>;

  return (
    <div>
      <h1>Welcome to my app</h1>
      {trigger}
      <MyPortal trigger={trigger}>
        <p>This is my portal content</p>
      </MyPortal>
    </div>
  );
}

export default MainFeed;
