import React from 'react';
import '../styles/home.css';

const Image = ({ person, occasion, imageSrc }) => {
  return (
    <div className="column-image">
      <div className="blur">
        <div className="blur-person">{person}</div>
        <div className="blur-occasion">{occasion}</div>
      </div>
      <img src={imageSrc} alt="Picture 1"/>
    </div>
  );
};

export default Image;