import React, { useState, useEffect } from "react";
import ContactEachStyle from "./ContactEach.module.css";

const ContactEach = ({ data, isVisible }) => {
  const [showMap, setShowMap] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(false); // Oculta el contenido

    const timer = setTimeout(() => {
      setIsActive(true); // Muestra el contenido después de un breve retraso
    }, 300);

    return () => clearTimeout(timer); // Limpia el temporizador en desmonte
  }, [data]);

  return (
    <div className={ContactEachStyle.container}>
      <div className={ContactEachStyle.text}>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          {data.name}
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          PHONE
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          {data.phone}
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          EMAIL
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          {data.email}
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          OPENING HOURS
        </p>
        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          Monday - Friday{" "}
          {`${data.openingHours.weekdays.open} - ${data.openingHours.weekdays.close} (${data.openingHours.weekdays.kitchenClose})`}
        </p>

        <p
          className={`${ContactEachStyle.text} ${
            isActive
              ? ContactEachStyle.showContent
              : ContactEachStyle.hideContent
          }`}
        >
          Saturday - Sunday{" "}
          {`${data.openingHours.weekends.open} - ${data.openingHours.weekends.close} (${data.openingHours.weekends.kitchenClose})`}
        </p>
        {data.openingHours?.dinner ? (
          <>
            <p
              className={`${ContactEachStyle.text} ${
                isActive
                  ? ContactEachStyle.showContent
                  : ContactEachStyle.hideContent
              }`}
            >
              Dinner{" "}
              {`${data.openingHours.dinner?.days[0]} & ${data.openingHours.dinner?.days[1]} ${data.openingHours.dinner?.start} til ${data.openingHours.dinner?.end}`}
            </p>
          </>
        ) : null}
      </div>
      <div className={ContactEachStyle.mapsCnt}>
        <div className={ContactEachStyle.maps}>
          {data.name === "BONDI" ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3312.1597869774196!2d151.27057072065475!3d-33.8855384126919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x6b12ad7b99531f85%3A0x59677b20ecba9ec5!2sBlackwood%20Bondi%2C%20Shop%203%2F87-89%20Glenayr%20Ave%2C%20Bondi%20Beach%20NSW%202026!3m2!1d-33.8856931!2d151.2731344!5e0!3m2!1sen!2sau!4v1697171968343!5m2!1sen!2sau&center=-33.8856931,151.2731344"
              className={`${ContactEachStyle.mapsIframe} ${
                !showMap ? ContactEachStyle.hidden : ""
              }`}
              center="-34.0537701,151.1532028"
              style={{ border: "0" }}
              zoom={5}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d52889.829081609074!2d151.11200333572586!3d-34.05376322781505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x6b12c81213df31bd%3A0x13dca3ffe40f75c2!2sBlackwood%20Cronulla%2C%205%20Surf%20Lane%2C%20Cronulla%20NSW!3m2!1d-34.0537701!2d151.1532028!5e0!3m2!1sen!2sau!4v1697172994091!5m2!1sen!2sau&center=-34.0537701,151.1532028"
              className={`${ContactEachStyle.mapsIframe} ${
                !showMap ? ContactEachStyle.hidden : ""
              }`}
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactEach;
