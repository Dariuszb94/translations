import React from "react";
import BannerTexts from "./BannerComponents/BannerTexts";
import BannerImage from "./BannerComponents/BannerImage";

const Banner = () => {
  return (
    <div className="banner">
      <BannerTexts />
      <BannerImage />
    </div>
  );
};

export default Banner;
