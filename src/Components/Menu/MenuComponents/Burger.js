import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const Burger = ({ showHideMenu, showMenuToBurger }) => {
  const [menu, showMenu] = useState(0);
  useEffect(() => {
    showHideMenu(menu);
  }, [menu]);
  useEffect(() => {
    showMenu(showMenuToBurger);
  }, [showMenuToBurger]);
  return (
    <React.Fragment>
      {menu ? (
        <CloseIcon
          className="menu__close"
          onClick={() => {
            showMenu(0);
          }}
        />
      ) : (
        <MenuIcon
          className="menu__open"
          onClick={() => {
            showMenu(1);
          }}
        />
      )}
    </React.Fragment>
  );
};
Burger.propTypes = {
  showHideMenu: PropTypes.func,
  showMenuToBurger: PropTypes.number,
};
export default Burger;
