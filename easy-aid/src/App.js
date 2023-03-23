import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import LoginScreen from "./components/loginScreen";
import MainFeed from "./components/mainFeed";
import { useState } from "react";

const LoginButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`login-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

const AppRouting = () => {
  return (
    <div className="router-position">
      <Router>
        <div className="App">
          
          <div className="navbar">
            <Link className="link navBtn" to="/">
              HOME
            </Link>

            <Link className="link navBtn" to="/loginScreen">
              LOGIN
              {/*<LoginButton />*/}
            </Link>

            <Link className="link navBtn" to="/mainFeed">
              FEED
            </Link>
          </div>

          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/loginScreen" element={<LoginScreen />}></Route>
            <Route exact path="/mainFeed" element={<MainFeed />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

function App() {
  return (
    <>
      <AppRouting />
    </>
  );
}

export default App;
