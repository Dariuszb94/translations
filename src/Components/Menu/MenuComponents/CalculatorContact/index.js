import React from "react";
import { NavLink } from "react-router-dom";
const CalculatorContact = () => {
  return (
    <ul className="calculatorContact">
      <li>
        <a className="calculatorContact__contact">Kontakt</a>
      </li>
      <li>
        <NavLink
          to="/estimation"
          activeClassName="active"
          className="calculatorContact__calculator"
        >
          Natychmiastowa wycena
        </NavLink>
      </li>
    </ul>
  );
};

export default CalculatorContact;
