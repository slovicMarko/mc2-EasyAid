"use client";

import ReactDOM from "react-dom";

import "./cssFiles/eventEditable.scss";

export const EventEditModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="eventEdit">
      <div className="eventEditContent">
        <div className="eventEditHeader">
          {/*form */}
        </div>
        <div className="eventEditSideInfo">
          {/*form */}
        </div>
        <button className="closeButton" onClick={onClose}>
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
