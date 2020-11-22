import React from "react";
import Offer1 from "./OffersComponents/Offer1/index";
import Offer2 from "./OffersComponents/Offer2/index";
import Offer3 from "./OffersComponents/Offer3/index";

const Offers = () => {
  return (
    <section className="offers">
      <header className="offers__header">Nasza oferta</header>
      <Offer1 />
      <Offer2 />
      <Offer3 />
    </section>
  );
};

export default Offers;
