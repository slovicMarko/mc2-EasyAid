import './App.css';
import React from 'react';

const EventBubble=() => {
  return (
    <>
    <div className="rectangle-container">
      <div className="rectangle" >
        <h1 className="event-name-style">Ime eventa</h1>
        <h2 className="organiser-style">Organizator</h2>
        <p>Kratak opis akcije......</p>
      </div>
    </div>
    <br/>
    <br/>
    </>
  );
}

function App() {
  return (
    <>
    <br/>
    <br/>

    <div className="App">
    <EventBubble/>
    <EventBubble/>
    <EventBubble/>
    <EventBubble/>
    </div>
    </>
    
  );
}

export default App;
