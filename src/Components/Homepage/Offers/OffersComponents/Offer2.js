import React, { useState, useEffect } from "react";
import Offer from "../../../../Assets/enterprise_solutions.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Offer2 = ({ isVisibleMobile }) => {
  useEffect(() => {
    let classes = ["offer-sliding-right-mobile"];
    document.querySelector(".offer:nth-child(3)").classList.add(...classes);
    setTimeout(function () {
      if (document.querySelector(".offer:nth-child(3)")) {
        document
          .querySelector(".offer:nth-child(3)")
          .classList.remove(...classes);
      }
    }, 1000);
  }, [isVisibleMobile]);
  return (
    <div className="offer offer2">
      <img className="offer__img" src={Offer} />
      <h3 className="offer__header">Rozwiązania dla przedsiębiorstw</h3>
      <p className="offer__content">
        Od zaawansowanych, adaptowalnych rozwiązań lokalizacji po obszerne,
        zautomatyzowane usługi tłumaczenia transakcji: oferujemy szeroki zakres
        w pełni zarządzanych usług tłumaczeniowych.
      </p>
      <NavLink to="/enterprises" activeClassName="offer__link">
        Dowiedz się więcej
      </NavLink>
    </div>
  );
};
Offer2.propTypes = {
  isVisibleMobile: PropTypes.number,
};

export default Offer2;
