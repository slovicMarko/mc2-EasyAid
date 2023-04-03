import "./App.css";
import "./components/cssFiles/navBar.css";
import "./components/cssFiles/logRegScreen.css";
import "./components/cssFiles/mainFeed.css";
import "./components/cssFiles/homeScreen.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import HomeScreen from "./components/homeScreen";
import LoginScreen from "./components/loginScreen";
import MainFeed from "./components/mainFeed";
import RegisterScreen from "./components/registerScreen";
import { Logo1 } from "./logo1";

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

function App() {
  return (
    <>
      <div id="MainDiv">
        <div className="router-position">
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
              {/*<EmptySpace windowHeightPercentage={5} /> */}
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/loginScreen" element={<LoginScreen />} />
                <Route
                  exact
                  path="/registerForm"
                  element={<RegisterScreen />}
                />
                <Route exact path="/mainFeed" element={<MainFeed />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
