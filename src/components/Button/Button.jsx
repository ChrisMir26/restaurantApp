import React from 'react';
import buttonStyles from "./Button.module.css";

const Button = ({ button, customStyles }) => {
  return (
    <button className={buttonStyles.btnAction} style={customStyles}>{button}</button>
  );
}

export default Button;
