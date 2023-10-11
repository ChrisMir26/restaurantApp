import React from "react";
import Button from "../Button/Button";
import navStyles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <h1>BLACKWOOD</h1>
      <div className={navStyles.btnContainer}>
        <p>
          <a href="">About</a>
        </p>
        <p>
          <a href="">Menus</a>
        </p>
        <div className={navStyles.dropdown}>
          <p className={navStyles.dropbtn}>
            <a href="">Locations</a>
          </p>
          <div className={navStyles.dropdownContent}>
            <a href="#">Cronulla</a>
            <a href="#">Bondi</a>
          </div>
        </div>
        <p>
          <a href="">Event</a>
        </p>
        <p>
          <a href="">Whats On</a>
        </p>
        <p>
          <a href="">Contact</a>
        </p>
        <Button button="Bookings" />
      </div>
    </nav>
  );
};

export default Nav;
