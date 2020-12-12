import React, { useState, useEffect } from "react";
import "./menuStyle.scss";
import Logo from "./MenuComponents/Logo";
import Burger from "./MenuComponents/Burger";
import Navi from "./MenuComponents/Navi";
import CalculatorContact from "./MenuComponents/CalculatorContact";

const Menu = () => {
  const [showMenu, hideShowMenu] = useState(0);
  const show = (show) => {
    hideShowMenu(show);
  };
  return (
    <section className="menu">
      <Logo />
      <Navi showMenu={showMenu} />
      <CalculatorContact showMenu={showMenu} />
      <Burger showHideMenu={show} />
      <div className={`overlay${showMenu ? "--active" : ""}`} />
    </section>
  );
};

export default Menu;
