import React, { useState, useEffect } from "react";
import Offer from "../../../../Assets/developers_tools.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Offer3 = ({ isVisible, isVisibleMobile }) => {
  useEffect(() => {
    let classes = ["offer-sliding-right", "offer-sliding-left-mobile"];
    document.querySelector(".offer:nth-child(4)").classList.add(...classes);
    setTimeout(function () {
      if (document.querySelector(".offer:nth-child(4)")) {
        document
          .querySelector(".offer:nth-child(4)")
          .classList.remove(...classes);
      }
    }, 1000);
  }, [isVisible, isVisibleMobile]);
  return (
    <div className="offer offer3">
      <img className="offer__img" src={Offer} />
      <h3 className="offer__header">Narzędzia dla programistów</h3>
      <p className="offer__content">
        Najbardziej zaawansowane, a jednocześnie proste w obsłudze interfejsy
        API tłumaczeń do ciągłej lokalizacji, wyodrębniania treści z 71 formatów
        plików, adaptacyjne tłumaczenie maszynowe wykorzystujące sieci neuronowe
        i o wiele więcej.
      </p>
      <NavLink to="/programmers" activeClassName="offer__link">
        Dowiedz się więcej
      </NavLink>
    </div>
  );
};
Offer3.propTypes = {
  isVisible: PropTypes.bool,
  isVisibleMobile: PropTypes.bool,
};

export default Offer3;
