import React, { useState, useRef } from 'react';
import '../styles/image.css';

const Image = ({ person, occasion, imageSrc, id }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="column-image not-loaded" onClick={handleImageClick}>
        <div className="blur">
          <div className="blur-person">{person}</div>
          <div className="blur-occasion">{occasion}</div>
        </div>
        <img data-lazy={imageSrc} alt={`#${id}: ${person}, ${occasion}.`} />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" ref={modalRef}>
            <img src={imageSrc} alt={`#${id}: ${person}, ${occasion}.`} />
            <div className="modal-content">
              <div className="blur-person">{person}</div>
              <div className="blur-occasion">{occasion}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
