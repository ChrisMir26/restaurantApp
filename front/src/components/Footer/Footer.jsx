import React from "react";
import stylesFooter from "./stylesFooter.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className={stylesFooter.footerCont}>
      <h2 className={stylesFooter.footerContH2}>BLACKWOOD</h2>
      <div className={stylesFooter.footerContOne}>
        <h2>MENU</h2>
        <p>about</p>
        <p>menus</p>
        <p>events</p>
        <p>whats on</p>
        <p>contact</p>
        <p>careers</p>
      </div>
      <div className={stylesFooter.footerContTwo}>
        <h2>Cronulla</h2>
        <p>5/33 Surf Ln Cronulla NSW 2230</p>
        <p>PHONE</p>
        <p>‍ 9544 4857</p>
        <p>EMAIL</p>
        <p>info@blackwoodhospitality.com.au</p>
        <p>HOURS</p>
        <p>Monday - Friday 7AM - 3:30PM (kitchen 2:30PM)</p>
        <p>Saturday- Sunday 7AM - 4PM (kitchen 3PM)</p>

        <div className={stylesFooter.socialNetwork}>
          <div>
            <FaFacebook size={26} color="white" />
          </div>
          <div>
            <FaInstagram size={26} color="white" />
          </div>
        </div>
      </div>
      <div className={stylesFooter.footerContThree}>
        <h2>BONDI</h2>
        <p>
          3/87-89 Glenayr Ave <br /> Bondi NSW 2026
        </p>
        <p>PHONE</p>
        <p>‍ 9544 4857</p>
        <p>EMAIL</p>
        <p>info@blackwoodhospitality.com.au</p>
        <p>HOURS</p>
        <p>Monday - Friday 7AM - 3PM (Kitchen 2:30PM)</p>
        <p>Saturday & Sunday 7AM - 4PM (Kitchen 3PM)</p>
        <p>‍Dinner Friday & Saturday 5PM till late</p>
        <p>‍Happy hour Friday and Saturday 4PM - 6PM</p>

        <div className={stylesFooter.socialNetwork}>
          <div>
            <FaFacebook size={26} color="white" />
          </div>
          <div>
            <FaInstagram size={26} color="white" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
