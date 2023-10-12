import React from 'react'
import DropStyles from "./Dropdown.module.css"
import Button from "../Button/Button"

const DropdowMenu = ({isOpen,isOpenSub,setTogglerSub}) => {
    

  return (
    <div className={`${DropStyles.dropDownCont} ${ isOpen ? DropStyles.dropDownCont : DropStyles.dropDownContActive}`}>
        <ul className={DropStyles.dropDownUl}>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Menus</a>
            </li>
            <div className={DropStyles.dropdown}>
            <li className={DropStyles.dropbtn}>
                <a onClick={setTogglerSub}>Locations</a>
                <ul className={`${DropStyles.dropdownContent} ${isOpenSub ? DropStyles.dropdownContent : DropStyles.dropdownContentActive} }`}>
                    <li>
                    <a href="#">Cronulla</a>
                    </li>
                    <li>
                    <a href="#">bondi</a>
                    </li>
                </ul>
            </li>
            </div>
            <li>
                <a href="">Event</a>
            </li>
            <li>
                <a href="">Whats on</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>

            <li>
                <Button button="Bookings" />
            </li>
        </ul>
    </div>
  )
}

export default DropdowMenu






{/* 
import React from 'react'
import DropStyles from "./Dropdown.module.css"
import Button from "../Button/Button"

const DropdowMenu = () => {


  return (
    <div className={DropStyles.dropDownCont}>
        <ul className={DropStyles.dropDownUl}>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Menus</a>
            </li>
            <li>
                <a href="">Locations</a>
            </li>
            <li>
                <a href="">Event</a>
            </li>
            <li>
                <a href="">Whats on</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>

            <li>
                <Button button="Bookings" />
            </li>
        </ul>
    </div>
  )
}

export default DropdowMenu */}