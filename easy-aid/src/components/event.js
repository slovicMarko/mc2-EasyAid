import React, {useState} from "react";
import ReactModal from "react-modal";

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

//////////////////////

const EventBubble = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    document.body.classList.add('modal-open');
    //const mainDiv=document.getElementById('MainDiv');
    //mainDiv.classList.add("modal-open");
    setShowModal(true);
  }

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    //const mainDiv=document.getElementById('MainDiv');
    //mainDiv.classList.remove("modal-open");
    setShowModal(false);
  }

  const EventInfoModal = () => (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false} // This is required to avoid a warning message
      className="event-window-info"
      style={{
        overlay: {
          backgroundColor: 'rgba(230, 255, 230, 0.2)' // Boja pozadine kad se otvori modal
        }}}
    >
      <h2>Organiziranje pomoći X i Y</h2>
      <h3>Udruga ta i ta</h3>
      <button onClick={handleCloseModal} className="event-modal-button">IZAĐI</button>
      <h4>Datum:</h4>
      <p>12.travnja 2023.</p>
      <h4>Opis</h4>
      <div className="event-info-text">
        Lorem ipsum Lorem Ipsum Lorem Ipsum WWW WWWWWWWWW WWWWWWWWWWWWWW WWWWW WWWWWWWWWWW WWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWW WWWWWWW WWWWWWWWWWWWWWWW WWWWWWWWW
      </div>
      
    </ReactModal>
  );

  /*
  <ChildComponent handleCloseModal={handleCloseModal} />
  */
  /*
  const ChildComponent = ({ handleCloseModal }) => (
    <div>
      <p>This is a child component inside the modal.</p>
      <button onClick={handleCloseModal}>Izađi</button>
    </div>
  );
  */
  //////////////////

  
  return (
    <>
    <div >
      <div className="rectangle-container" >
        <Bubble>
        {showModal && <EventInfoModal/>}

        <div className="rectangle" onClick={handleOpenModal}>
            <h1 className="event-name-style">Ime eventa</h1>
            <h2 className="organiser-style">Organizator</h2>
            <p>Kratak opis akcije...</p>
          </div>
        </Bubble>
      </div>  
    </div>
    </>
  );
};

export default EventBubble;
