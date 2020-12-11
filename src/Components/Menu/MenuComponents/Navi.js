import React from "react";
import PropTypes from "prop-types";

const Navi = ({ showMenu }) => {
  return (
    <ul className={`navi${showMenu ? "--active" : ""}`}>
      <li className={`navi__element${showMenu ? "--active" : ""}`}>
        Przedsiębiorstwa
      </li>
      <li className={`navi__element${showMenu ? "--active" : ""}`}>
        Programiści
      </li>
      <li className={`navi__element${showMenu ? "--active" : ""}`}>Tłumacze</li>
      <li className={`navi__element${showMenu ? "--active" : ""}`}>Labs</li>
    </ul>
  );
};
Navi.propTypes = {
  showMenu: PropTypes.boolean,
};
export default Navi;
