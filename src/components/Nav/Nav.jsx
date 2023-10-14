import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import navStyles from "./Nav.module.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import DropdowMenu from "../DropdownMenu/DropdownMenu";
import { FaBars } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";

  const setToggler = () => {
    setIsOpen(!isOpen);
  };
  const setTogglerSub = () => {
    setIsOpenSub(!isOpenSub);
    console.log(isOpenSub);
  };

  return (
    <nav className={navStyles.nav}>
      <Link to="/">
        <h1>BLACKWOOD</h1>
      </Link>

      <div className={navStyles.btnContainer}>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/menu">
            <a href="">Menus</a>
          </Link>
        </p>

        <div className={navStyles.dropdown}>
          <p className={navStyles.dropbtn}>
           
              Locations <FaCaretDown />
          
          </p>
          <div className={navStyles.dropdownContent}>
            <Link to="/cronulla-location">
              <a href="#">Cronulla</a>
            </Link>
            <Link to="/bondi-location">
              <a href="#">Bondi</a>
            </Link>
          </div>
        </div>
        <p>
        <Link to="/event">

          <a href="">Event</a>
          </Link>
        </p>
        <p>
          <Link to="/whats-on">
            <a href="">Whats On</a>
          </Link>
        </p>
        <p>
          <Link to="/contact">
            <a href="">Contact</a>
          </Link>
        </p>
        <Button button="Bookings" />
      </div>
      <div className={navStyles.icono} onClick={setToggler}>
        <FaBars size={22} color="#637d79" />
      </div>

      {open && (
        <div ref={dropdownRef}>
          <DropdowMenu
            isOpen={isOpen}
            isOpenSub={isOpenSub}
            setTogglerSub={setTogglerSub}
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
