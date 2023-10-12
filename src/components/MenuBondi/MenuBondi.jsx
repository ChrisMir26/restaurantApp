import React from "react";
import bondiStyle from "./MenuBondi.module.css";

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
    </div>
  );
};

export default MenuBondi;
