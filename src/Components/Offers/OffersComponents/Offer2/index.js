import React from "react";
import Offer from "../../../../Assets/enterprise_solutions.png";
const Offer2 = () => {
  return (
    <div className="offer">
      <img className="offer__img" src={Offer} />
      <h3 className="offer__header">Rozwiązania dla przedsiębiorstw</h3>
      <p className="offer__content">
        Od zaawansowanych, adaptowalnych rozwiązań lokalizacji po obszerne,
        zautomatyzowane usługi tłumaczenia transakcji: oferujemy szeroki zakres
        w pełni zarządzanych usług tłumaczeniowych.
      </p>
      <a className="offer__link">Dowiedz się więcej</a>
    </div>
  );
};

export default Offer2;
