import React from "react";
import From from "./EstimationComponents/From/index";
import To from "./EstimationComponents/To/index";

const Estimation = () => {
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
        <div>adasda</div>
      </div>
    </section>
  );
};

export default Estimation;
