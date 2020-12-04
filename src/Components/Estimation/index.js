import React, { useState, useEffect } from "react";
import From from "./EstimationComponents/From/index";
import To from "./EstimationComponents/To/index";
import Characters from "./EstimationComponents/Characters/index";
import Solutions from "./EstimationComponents/Solutions/index";

const Estimation = () => {
  const [numberOfChars, changeChars] = useState(3);
  const [solutionsShown, showSolutions] = useState(0);

  const chars = (chars) => {
    changeChars(chars);
  };
  return (
    <section className="estimation">
      <h1 className="estimation__header">
        Profesjonalne tłumaczenia w zasięgu ręki
      </h1>
      <h2 className="estimation__subheader">
        229 743 profesjonalnych tłumaczy i 190 073 klientów korzysta z
        inteligentnego sposobu tłumaczeń od 1999 roku.
      </h2>
      <div className="estimation-main">
        <From />
        <To />
        <Characters charsCallback={chars} />
        <button
          className="estimation__button"
          onClick={() => {
            showSolutions(1);
          }}
        >
          Pokaż ceny
        </button>
      </div>
      {solutionsShown ? <Solutions numberOfChars={numberOfChars} /> : null}
    </section>
  );
};

export default Estimation;
