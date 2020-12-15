import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CalculatorContact = ({ showMenuInherit, showHideMenu }) => {
  const [menu, showMenu] = useState(1);
  useEffect(() => {
    showHideMenu(menu);
  }, [menu]);
  return (
    <ul className={`calculatorContact${showMenuInherit ? "--active" : ""}`}>
      <li
        onClick={() => {
          showMenu(0);
        }}
      >
        <a href="tel:000" className="calculatorContact__contact">
          Kontakt
        </a>
      </li>
      <li
        onClick={() => {
          showMenu(0);
        }}
      >
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
CalculatorContact.propTypes = {
  showMenuInherit: PropTypes.number,
  showHideMenu: PropTypes.func,
};

export default CalculatorContact;
