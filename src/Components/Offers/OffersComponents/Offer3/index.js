import React from "react";
import Offer from "../../../../Assets/developers_tools.png";
const Offer3 = () => {
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
      <a className="offer__link">Natychmiastowa wycena</a>
    </div>
  );
};

export default Offer3;
