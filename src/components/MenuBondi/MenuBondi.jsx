import React from "react";
import bondiStyle from "./MenuBondi.module.css";
import bondiBrunch from "../../assets/images/bondiBrunch.jpg";
import bondiDinner from "../../assets/images/bondiDinner.jpg";
import bondiWines from "../../assets/images/bondiWines.jpg";

const MenuBondi = () => {
  return (
    <div className={bondiStyle.bondiCnt}>
      <p>
        With spacious, inviting interiors and plenty of outdoor seating,
        Blackwood Bondi transitions easily from day into night, offering the
        perfect place to catch up with friends for a morning coffee, casual
        lunch or Sunday sundowner.Walk-ins are welcome but bookings are
        recommended for dinner so we can guarantee you a table.
      </p>
      <div className={bondiStyle.bondiImages}>
        <div className={bondiStyle.bondiImagesOne}>
          <img src={bondiBrunch} alt="" _blac srcset="Brunch img" />
          <p className={bondiStyle.bondiImagesP}>
            {" "}
            <a href="#"> Brunch </a>{" "}
          </p>
        </div>
        <div className={bondiStyle.bondiImagesTwo}>
          <img src={bondiDinner} alt="" srcset="Dinner img" />
          <p className={bondiStyle.bondiImagesP}>
            {" "}
            <a href="#"> dinner </a>{" "}
          </p>
        </div>
        <div className={bondiStyle.bondiImagesThree}>
          <img src={bondiWines} alt="" srcset="Drinks img" />
          <p className={bondiStyle.bondiImagesP}>
            {" "}
            <a href="#"> Drinks </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuBondi;
