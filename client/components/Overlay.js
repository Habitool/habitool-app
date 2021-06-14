import React from 'react';
import '../stylesheets/componentStyles/Overlay.css';

const Overlay = ({ show, click }) => {
  return  show && <div className="overlay" onClick={click}></div>;
};

export default Overlay;
