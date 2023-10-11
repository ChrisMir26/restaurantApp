import React from "react";
import Button from "../Button/Button";
import imgOne from "../../assets/images/blackwoodBondi.jpg";
import imgTwo from "../../assets/images/blacwoodCron.jpg";
import headerStyle from "./Header.module.css";

const Header = () => {
  const customButtonStyles = {
  
    position: 'absolute',
    bottom: '175px',
    left:"400px",
  };


  return (
    <header>
      <div className={headerStyle.containerOne}>
        <img src={imgOne} alt="image Blackwood Bondi" />
        <Button customStyles={customButtonStyles} button="Explore Cronulla" />
      </div>
      <div className={headerStyle.containerTwo}>
        <img src={imgTwo} alt="image Blackwood Cronulla" />
        <div className={headerStyle.positionsBtn}>
        <Button /* customStyles={customButtonStylesBondi} */ button="Booking" />
        <Button /* customStyles={customButtonStyles} */ button="Explore Bondi" />
        </div>

      </div>
    </header>
  );
};

export default Header;
