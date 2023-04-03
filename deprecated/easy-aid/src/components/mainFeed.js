import React, { useState } from "react";
import EventBubble from "./event.js";
import { EmptySpace } from "./standard.js";
import ReactModal from "react-modal";

function MainFeed() {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "visible";
  }

  return (
    <div>
      <h1>Main Feed</h1>
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5} />
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5} />
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5} />
      <div className="EventBubble">{EventBubble()}</div>
    </div>
  );
}

export default MainFeed;
