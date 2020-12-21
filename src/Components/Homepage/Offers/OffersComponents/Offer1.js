import React, { useState, useEffect } from "react";
import Offer from "../../../../Assets/professional_translation.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Offer1 = ({ isVisible, isVisibleMobile }) => {
  useEffect(() => {
    let classes = ["offer-sliding-left", "offer-sliding-left-mobile"];

    document.querySelector(".offer:nth-child(2)").classList.add(...classes);
    setTimeout(function () {
      if (document.querySelector(".offer:nth-child(2)")) {
        document
          .querySelector(".offer:nth-child(2)")
          .classList.remove(...classes);
      }
    }, 1000);
  }, [isVisible, isVisibleMobile]);
  return (
    <div className="offer offer1">
      <img className="offer__img" src={Offer} />
      <h3 className="offer__header">Profesjonalne tłumaczenie</h3>
      <p className="offer__content">
        Łatwy i szybki sposób profesjonalnego tłumaczenia dokumentów,
        instrukcji, witryn internetowych, oprogramowania i innych materiałów,
        zgodnie z Twoim harmonogramem i wymaganiami, na 183 języków i w 40
        obszarach specjalizacji.
      </p>
      <NavLink
        to="/estimation"
        activeClassName="active"
        className="offer__link"
      >
        Natychmiastowa wycena
      </NavLink>
    </div>
  );
};
Offer1.propTypes = {
  isVisible: PropTypes.number,
  isVisibleMobile: PropTypes.number,
};

export default Offer1;
