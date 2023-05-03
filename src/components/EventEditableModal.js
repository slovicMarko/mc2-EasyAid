"use client";

import ReactDOM from "react-dom";

import "./cssFiles/eventEditable.scss";

export const EventEditModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="event-edit">
      <div className="event-edit-content">
        <div className="event-edit-header">
          {/*form */}
        </div>
        <div className="event-edit-side-info">
          {/*form */}
        </div>
        <button className="close-button" onClick={onClose}>
          Izađi
        </button>
        <div>
          {/*form */}
          {/*slika */}
        </div>
      </div>
    </div>,
    document.body
  );
};
