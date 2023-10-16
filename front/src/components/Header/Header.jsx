import React from "react";
import Button from "../Button/Button";
import headerStyle from "./Header.module.css";

const Header = () => {
  const buttonStyle = {
    color: "white",
    zIndex: "3",

  };
  return (
    <header>
      <div className={headerStyle.overlay}></div>

      <div className={headerStyle.containerOne}>

        <div>
          <Button button="Explore Cronulla" customStyles={buttonStyle} />
        </div>
      </div>
      <div className={headerStyle.containerTwo}>
        <div>
          <Button button="Booking" customStyles={buttonStyle} />
          <Button button="Explore Bondi" customStyles={buttonStyle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
