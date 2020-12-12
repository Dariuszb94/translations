import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CalculatorContact = ({ showMenu }) => {
  return (
    <ul className={`calculatorContact${showMenu ? "--active" : ""}`}>
      <li>
        <a href="tel:000" className="calculatorContact__contact">
          Kontakt
        </a>
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
CalculatorContact.propTypes = {
  showMenu: PropTypes.boolean,
};
export default CalculatorContact;
