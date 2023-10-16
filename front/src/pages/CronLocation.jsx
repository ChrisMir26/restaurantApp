import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import ImgBackground from "../components/ImgBackground/ImgBackground";
import MenuCronulla from "../components/MenuCronulla/MenuCronulla";
import Nav from "../components/Nav/Nav";


const CronLocation = () => {

    return (
        <>

            <Nav />
            <ImgBackground />
            <About />
            <MenuCronulla title={"MENU"} />
            <Footer  />
        </>
    );
};

export default CronLocation;
