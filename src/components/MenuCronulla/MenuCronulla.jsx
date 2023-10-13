import React from "react";
import CronullaStyle from "./MenuCronula.module.css";
import cronullaBrunch from "../../assets/images/brunchCronulla.jpg";
import cronullaDrink from "../../assets/images/drinkCronulla.jpg";

const MenuCronolla = ({title}) => {
  return (
    <div className={CronullaStyle.cronContainer}>
      {title ? <h1 className={CronullaStyle.heroTitle} >{title}</h1> : ""}
      <p>
        Join us for breakfast, brunch or lunch seven days a week at one of
        Cronulla’s most popular destinations, named after Blackwoods Beach, a
        local hidden gem. With both indoor and outdoor seating, we offer an
        all-day menu where we keep things light, fresh and approachable, suited
        to a relaxed meal with mates. Enjoy breakfast hits like our much-loved
        Morning Glory bowl or the cult favourite Coconut Hotcake. All-day
        top-picks include Schnitty Schnitty Bang Bang, Nourish Bowl and Miso
        Avo. Walk-ins only.
      </p>
      <div className={CronullaStyle.cronImages}>
        <div className={CronullaStyle.cronImagesone}>
          <img src={cronullaBrunch} alt="" srcset="Brunch img" />
          <p className={CronullaStyle.cronImagesP}>
            {" "}
            <a href="#"> Brunch </a>{" "}
          </p>
        </div>
        <div className={CronullaStyle.cronImagesTwo}>
          <img src={cronullaDrink} alt="" srcset="Drinks img" />
          <p className={CronullaStyle.cronImagesP}>
            {" "}
            <a href="#"> Drinks </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCronolla;
