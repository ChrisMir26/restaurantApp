import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import ImgBackground from "../components/ImgBackground/ImgBackground";
import MenuBondi from "../components/MenuBondi/MenuBondi";
import Nav from "../components/Nav/Nav";


const BonLocation = () => {

    return (
        <>

            <Nav />
            <ImgBackground />
            <About />
            <MenuBondi  title={"MENU"}/>
            <Footer  />
        </>
    );
  
}

export default BonLocation
