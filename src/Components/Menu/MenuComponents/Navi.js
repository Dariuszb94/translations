import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navi = ({ showMenuInherit, showHideMenu }) => {
  const [menu, showMenu] = useState(1);
  useEffect(() => {
    showHideMenu(menu);
  }, [menu]);

  return (
    <ul className={`navi${showMenuInherit ? "--active" : ""}`}>
      <li
        onClick={() => {
          showMenu(0);
        }}
      >
        <NavLink
          to="/estimation"
          activeClassName="active"
          className={`navi__element${showMenuInherit ? "--active" : ""}`}
        >
          Przedsiębiorstwa
        </NavLink>
      </li>

      <li
        onClick={() => {
          showMenu(0);
        }}
      >
        <NavLink
          to="/estimation"
          activeClassName="active"
          className={`navi__element${showMenuInherit ? "--active" : ""}`}
        >
          Programiści
        </NavLink>
      </li>
      <li
        onClick={() => {
          showMenu(0);
        }}
      >
        <NavLink
          to="/estimation"
          activeClassName="active"
          className={`navi__element${showMenuInherit ? "--active" : ""}`}
        >
          Tłumacze
        </NavLink>
      </li>
      <li
        onClick={() => {
          showMenu(0);
        }}
      >
        <NavLink
          to="/estimation"
          activeClassName="active"
          className={`navi__element${showMenuInherit ? "--active" : ""}`}
        >
          Labs
        </NavLink>
      </li>
    </ul>
  );
};
Navi.propTypes = {
  showMenuInherit: PropTypes.boolean,
  showHideMenu: PropTypes.func,
};
export default Navi;
