import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const Burger = ({ showHideMenu }) => {
  const [menu, showMenu] = useState(0);
  useEffect(() => {
    showHideMenu(menu);
  }, [menu]);

  return (
    <React.Fragment>
      {menu ? (
        <CloseIcon
          onClick={() => {
            showMenu(0);
          }}
        />
      ) : (
        <MenuIcon
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
};
export default Burger;
