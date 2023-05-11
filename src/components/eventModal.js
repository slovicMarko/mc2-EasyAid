"use client";

import ReactDOM from "react-dom";

import "./cssFiles/event.scss";

export const Event = ({ onClose, title, date, organizer, about}) => {
  return ReactDOM.createPortal(
    <div className="event">
      <div className="event-content">
        <div className="event-header">
            <h2>{title}</h2>
            <h3>{organizer}</h3>
        </div>
        <div className="event-side-info">
            <h4>Zainteresiranih</h4>
            <h5>28</h5>
            <h4>Dolazi</h4>
            <h5>12</h5>
        </div>
        <button className="close-button" onClick={onClose}>
            Izađi
        </button>
        <button className="register-button" >
            Prijavi se!
        </button>
        <div className="main-content">
          <section>
            <p>{about}</p>
            <div>
              <h4>Potrebni materijali</h4>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const EventDiv = () => {
  return (
    <div className="event-stat">
      <div className="event-content-stat">
        <div className="event-header-stat">
          <h2>Pomoć stradalima u potresu (selo to i to)</h2>
          <h3>Crveni Križ</h3>
        </div>
        <div className="event-side-info-stat">
          <h4>Zainteresiranih</h4>
          <h5>28</h5>
          <h4>Dolazi</h4>
          <h5>12</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
