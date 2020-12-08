import React from "react";
import "./menuStyle.scss";
import Logo from "./MenuComponents/Logo";
import Navi from "./MenuComponents/Navi";
import CalculatorContact from "./MenuComponents/CalculatorContact";

const Menu = () => {
  return (
    <section className="menu">
      <Logo />
      <Navi />
      <CalculatorContact />
      <div className="overlay" />
    </section>
  );
};

export default Menu;
