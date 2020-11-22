import React from "react";
import BannerTexts from "./BannerComponents/BannerTexts/index";
import BannerImage from "./BannerComponents/BannerImage/index";

const Banner = () => {
  return (
    <div className="banner">
      <BannerTexts />
      <BannerImage />
    </div>
  );
};

export default Banner;
