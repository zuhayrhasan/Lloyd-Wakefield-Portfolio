import React, { useState } from 'react';
import '../styles/image.css';

const Image = ({ person, occasion, imageSrc }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="column-image" onClick={handleImageClick}>
        <div className="blur">
          <div className="blur-person">{person}</div>
          <div className="blur-occasion">{occasion}</div>
        </div>
        <img src={imageSrc} alt="Picture 1" />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <img src={imageSrc} alt="Picture 1" />
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
