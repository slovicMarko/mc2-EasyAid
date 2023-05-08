"use client";

import ReactDOM from "react-dom";

import "./cssFiles/eventForm.scss";

export const EventEditModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="event-edit">
      <div className="event-edit-content" id="edit-content">
        <form action="eventChange.html">
          <div id="edit-header">
            <label for="event-name-field">Naziv akcije:</label><br/>
            <textarea type="text" name="eventName" id="event-name-field" maxLength="150" required></textarea>
            <h3>Organizator</h3>
          </div>
          <button className="close-button" onClick={onClose}>
            Izađi
          </button>
            <div id="edit-middle">
              <label for="event-about-field">Opis:</label><br/>
              <textarea type="text" name="eventAbout" id="event-about-field" cols="20" rows="10" required></textarea>
              {/*slika */}
            </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
