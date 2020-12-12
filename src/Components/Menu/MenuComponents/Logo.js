import React from "react";
import LogoSrc from "../../../Assets/logo.png";
const Logo = () => {
  return (
    <a href="/">
      <img src={LogoSrc} className="logo" />
    </a>
  );
};

export default Logo;
