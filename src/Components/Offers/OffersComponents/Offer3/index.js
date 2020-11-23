import React from "react";
import Offer from "../../../../Assets/developers_tools.png";
const Offer3 = () => {
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

export default Offer3;
