import React from "react";
import { NavLink } from "react-router-dom";
import LogoSrc from "../../../Assets/logo.png";
const Logo = () => {
  return (
    <NavLink to="/home">
      <img src={LogoSrc} className="logo" />
    </NavLink>
  );
};

export default Logo;
