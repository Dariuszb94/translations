import React, { useState, useEffect } from "react";
import Offer from "../../../../Assets/professional_translation.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Offer1 = ({ isVisible }) => {
  useEffect(() => {
    document
      .querySelector(".offer:nth-child(2)")
      .classList.add("offer-sliding-left");
    setTimeout(function () {
      document
        .querySelector(".offer:nth-child(2)")
        .classList.remove("offer-sliding-left");
    }, 1000);
  }, [isVisible]);
  return (
    <div className="offer">
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
  isVisible: PropTypes.boolean,
};

export default Offer1;
