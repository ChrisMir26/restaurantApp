import React from "react";
import cronulla from "../../assets/images/cronulla.jpg";
import imgStyle from "./ImgBackground.module.css"
const ImgBackground = () => {
  return (
    <div className={imgStyle.imgCnt}>
      <img src={cronulla} alt="" />
    </div>
  );
};

export default ImgBackground;
