import React from "react";
import DropStyles from "./Dropdown.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const DropdowMenu = ({ isOpen, isOpenSub, setTogglerSub }) => {
  return (
    <div
      className={`${DropStyles.dropDownCont} ${
        isOpen ? DropStyles.dropDownCont : DropStyles.dropDownContActive
      }`}
    >
      <ul className={DropStyles.dropDownUl}>
        <li>
          <Link to="/about">
            <a href="">About</a>
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <a href="">Menus</a>
          </Link>
        </li>
        <div className={DropStyles.dropdown}>
          <li className={DropStyles.dropbtn}>
            <a onClick={setTogglerSub}>Locations</a>
            <ul
              className={`${DropStyles.dropdownContent} ${
                isOpenSub
                  ? DropStyles.dropdownContent
                  : DropStyles.dropdownContentActive
              } }`}
            >
              <li>
                <Link to="/cronulla-location">
                  <a href="#">Cronulla</a>
                </Link>
              </li>
              <li>
                <Link to="/cronulla-location">
                  <a href="#">bondi</a>
                </Link>
              </li>
            </ul>
          </li>
        </div>
        <li>
          <Link to="/event">
            <a href="">Event</a>
          </Link>
        </li>
        <li>
          <Link to="/whats-on">
            <a href="">Whats on</a>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <a href="">Contact</a>
          </Link>
        </li>

        <li>
          <Link to="/booking">
            <Button button="Bookings" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdowMenu;
