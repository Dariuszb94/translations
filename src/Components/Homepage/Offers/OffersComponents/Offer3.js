import React, { useState, useEffect } from "react";
import Offer from "../../../../Assets/developers_tools.png";
import PropTypes from "prop-types";

const Offer3 = ({ isVisible }) => {
  useEffect(() => {
    document
      .querySelector(".offer:nth-child(4)")
      .classList.add("offer-sliding-right");
    setTimeout(function () {
      document
        .querySelector(".offer:nth-child(4)")
        .classList.remove("offer-sliding-right");
    }, 1000);
  }, [isVisible]);
  return (
    <div className="offer">
      <img className="offer__img" src={Offer} />
      <h3 className="offer__header">Narzędzia dla programistów</h3>
      <p className="offer__content">
        Najbardziej zaawansowane, a jednocześnie proste w obsłudze interfejsy
        API tłumaczeń do ciągłej lokalizacji, wyodrębniania treści z 71 formatów
        plików, adaptacyjne tłumaczenie maszynowe wykorzystujące sieci neuronowe
        i o wiele więcej.
      </p>
      <a className="offer__link">Dowiedz się więcej</a>
    </div>
  );
};
Offer3.propTypes = {
  isVisible: PropTypes.boolean,
};

export default Offer3;
