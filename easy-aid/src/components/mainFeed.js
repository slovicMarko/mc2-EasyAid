import React from "react";
import EventBubble from "./event.js";
import EmptySpace from "./standard.js";

function MainFeed() {
  return (
    <div>
      <h1>Main Feed</h1>
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5}/>
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5}/>
      <div className="EventBubble">{EventBubble()}</div>
      <EmptySpace windowHeightPercentage={5}/>
      <div className="EventBubble">{EventBubble()}</div>
    </div>
  );
}

export default MainFeed;
