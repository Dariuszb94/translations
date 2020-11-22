import React from "react";
import Logo from "./MenuComponents/Logo/index";
import Navi from "./MenuComponents/Navi/index";
import CalculatorContact from "./MenuComponents/CalculatorContact/index";

const Menu = () => {
  return (
    <section className="menu">
      <Logo />
      <Navi />
      <CalculatorContact />
    </section>
  );
};

export default Menu;
