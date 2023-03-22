import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HomeScreen from './components/homeScreen';
import LoginScreen from './components/loginScreen';
import MainFeed from './components/mainFeed';
import { useState } from "react";

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


const LoginButton =() => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <button className={`login-button ${isActive ? "active" : ""}`} onClick={handleClick}>
      Click Me
    </button>
  );
}
 
const AppRouting = () => {
  return (
    <div className="router-position">
        <Router>
           <div className="App">
            <ul className="App-header-login">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/loginScreen">
                  <LoginButton/>
                </Link>
              </li>
              <li>
                <Link to="/mainFeed">feed</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< HomeScreen />}></Route>
                 <Route exact path='/loginScreen' element={< LoginScreen />}></Route>
                 <Route exact path='/mainFeed' element={< MainFeed />}></Route>
          </Routes>
          </div>
       </Router>
    </div>
    
  );
}

function App() {
  return (
    <>
    <AppRouting/>
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
