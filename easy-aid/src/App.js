import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import LoginScreen from "./components/loginScreen";
import MainFeed from "./components/mainFeed";
import { useState } from "react";
import RegisterScreen from "./components/registerScreen";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Logo1 } from "./logo1";
import { EmptySpace } from "./components/standard";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKBJXxJapVO-5xhKjSRoGbkdh839CF78U",
  authDomain: "test-project-3762d.firebaseapp.com",
  projectId: "test-project-3762d",
  storageBucket: "test-project-3762d.appspot.com",
  messagingSenderId: "654001614157",
  appId: "1:654001614157:web:f219a26d530eb94846db04",
  measurementId: "G-F7LMM1DB14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    <div className="router-position" >
      <Router>
        <div className="App">
          <div className="navbar">
            <Logo1 />
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
          <EmptySpace windowHeightPercentage={5} />
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/loginScreen" element={<LoginScreen />}></Route>
            <Route
              exact
              path="/registerForm"
              element={<RegisterScreen />}
            ></Route>
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
      <div id="MainDiv">
        <AppRouting />

      </div>
    </>
  );
}

export default App;
