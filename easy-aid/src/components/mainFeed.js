import React from "react";
import EventBubble from "./event.js";

function MainFeed() {
  return (
    <div>
      <h1>Main Feed</h1>
      <div className="EventBubble">{EventBubble()}</div>
    </div>
  );
}

export default MainFeed;
