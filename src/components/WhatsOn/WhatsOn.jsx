import React from "react";
import WhatsStyle from "./Whats.module.css";
import whatsonsOne from "../../assets/images/whatson1.jpg"
import whatsonsTwo from "../../assets/images/whatson2.jpg"


const WhatsOn = () => {
  return (
    <div className={WhatsStyle.whatsContainer}>
      <div className={WhatsStyle.whatsCnt}> 
        <h2>What's on</h2>
        <div className={WhatsStyle.whatsImgBox}>
          <div className={WhatsStyle.whatsImgOne}>
            <img src={whatsonsOne} alt="whatson one pic" srcset="" />
            <p>Sunday sessions launch</p>
          </div>
          <div className={WhatsStyle.whatsImgTwo }>
          <img src={whatsonsTwo} alt="whatson one pic" srcset="" />
            <p>Happy Hour at Bondi Blackwood (Friday & Saturday)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
