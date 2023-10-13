import React, { useState } from "react";
import styleMenu from "./Menus.module.css";
import MenuBondi from "../MenuBondi/MenuBondi";
import MenuCronulla from "../MenuCronulla/MenuCronulla";
import Button from "../Button/Button";

const Menus = () => {
  const [selectedMenu, setSelectedMenu] = useState("bondi");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOptionClick = (menu) => {
    if (selectedMenu !== menu) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedMenu(menu);
        setIsTransitioning(false);
      }, 500);
    }
  };
  return (
    <div className={styleMenu.menuContainer}>
      <div className={styleMenu.menusCnt}>
        <h2>MENUS</h2>
        <div className={styleMenu.menusP}>
          <p
            onClick={() => handleOptionClick("bondi")}
            className={selectedMenu === "bondi" ? styleMenu.optionActive : ""}
          >
            Bondi
          </p>
          <p
            onClick={() => handleOptionClick("cronulla")}
            className={
              selectedMenu === "cronulla" ? styleMenu.optionActive : ""
            }
          >
            Cronulla
          </p>
        </div>
        <div
          className={
            styleMenu.menusBox +
            (isTransitioning ? " " + styleMenu["transition-out"] : "")
          }
        >
          {selectedMenu === "bondi" ? <MenuBondi /> : <MenuCronulla />}
        </div>

        <Button button="book now" />
      </div>
    </div>
  );
};

export default Menus;
