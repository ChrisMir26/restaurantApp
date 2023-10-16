import React,{useState} from "react";
import cronulla from "../../assets/images/cronulla.jpg";
import bondi from "../../assets/images/bondi.jpg";
import imgStyle from "./ImgBackground.module.css"
const ImgBackground = ({place}) => {


  return (
    <div className={imgStyle.imgCnt}>
      <img src={place === "bondi" ? bondi : cronulla} alt="" />
    </div>
  );
};

export default ImgBackground;
