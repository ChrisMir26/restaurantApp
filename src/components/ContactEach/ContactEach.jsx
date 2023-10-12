import React from "react";
import ContactEachStyle from "./ContactEach.module.css";

const ContactEach = ({ data }) => {
  return (
    <div className={ContactEachStyle.container}>
      <div className={ContactEachStyle.text}>
        <p>{data.name}</p>
        <p>PHONE</p>
        <p>{data.phone}</p>
        <p>EMAIL</p>
        <p>{data.email}</p>
        <p>OPENING HOURS</p>
        <p>
          Monday - Friday{" "}
          {`${data.openingHours.weekdays.open} - ${data.openingHours.weekdays.close} (${data.openingHours.weekdays.kitchenClose})`}
        </p>
        <p>
          Saturday - Sunday{" "}
          {`${data.openingHours.weekends.open} - ${data.openingHours.weekends.close} (${data.openingHours.weekends.kitchenClose})`}
        </p>
        {data.openingHours?.dinner ? (
          <>
            <p>
              Dinner{" "}
              {`${data.openingHours.dinner?.days[0]} & ${data.openingHours.dinner?.days[1]} ${data.openingHours.dinner?.start} til ${data.openingHours.dinner?.end}`}
            </p>
           
          </>
        ) : null}
      </div>
      <div className={ContactEachStyle.mapsCnt}>
        <div className={ContactEachStyle.maps}>

        </div>
      </div>
    </div>
  );
};

export default ContactEach;
