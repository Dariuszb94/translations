import React from "react";
import "./index.scss";
import Logo from "./MenuComponents/Logo/index";
import Navi from "./MenuComponents/Navi/index";
import CalculatorContact from "./MenuComponents/CalculatorContact/index";

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
