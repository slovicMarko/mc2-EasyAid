import React, {useState} from "react";

/*
function Bubble(props) {
  const handleClick = () => {
    console.log('Div was clicked!');
    // do something else here
  };

  return (
    <div onClick={handleClick}>
      {props.children}
    </div>
  );
}
*/

function Bubble(props) {
  return (
    <div className="bubble-div">
      {props.children}
    </div>
  );
}

const EventBubble = () => {
  return (
    <>
      <div className="rectangle-container">
        <Bubble>
        <div className="rectangle">
            <h1 className="event-name-style">Ime eventa</h1>
            <h2 className="organiser-style">Organizator</h2>
            <p>Kratak opis akcije...</p>
          </div>
        </Bubble>
      </div>  
    </>
  );
};

export default EventBubble;
