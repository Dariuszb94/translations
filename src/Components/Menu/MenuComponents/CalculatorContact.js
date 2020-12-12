import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CalculatorContact = ({ showMenu }) => {
  return (
    <ul className={`calculatorContact${showMenu ? "--active" : ""}`}>
      <li>
        <a
          className={`calculatorContact__contact${showMenu ? "--active" : ""}`}
        >
          Kontakt
        </a>
      </li>
      <li>
        <NavLink
          to="/estimation"
          activeClassName="active"
          className={`calculatorContact__calculator${
            showMenu ? "--active" : ""
          }`}
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
