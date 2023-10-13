import React, { useState } from "react";
import ContactEach from "../ContactEach/ContactEach";
import contactStyle from "./Contact.module.css";
import { bondiData, cronullaData } from "../../helpers/info"

const Contact = () => {

  const [selectedContact, setSelectedContact] = useState(bondiData)
      const [isVisible, setIsVisible] = useState(true);


  const handleContactClick = (contactData) => {
    setSelectedContact(contactData);
  };

  return (
    <div className={contactStyle.contactContainer}>
      <div className={contactStyle.contactCnt}>
        <h2>CONTACT</h2>
        <div className={contactStyle.contactPBox}>
          <p onClick={() => handleContactClick(bondiData)} className={`${selectedContact === bondiData ? contactStyle.contactActive : ""} ${contactStyle.contacts}`}>Bondi</p>
          <p onClick={() => handleContactClick(cronullaData)} className={`${selectedContact === cronullaData ? contactStyle.contactActive : ""} ${contactStyle.contacts}`}>Cronulla</p>
        </div>
        <div className={contactStyle.contactPropBox}>
          <ContactEach data={selectedContact} isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
