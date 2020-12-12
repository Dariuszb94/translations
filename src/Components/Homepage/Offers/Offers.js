import React, { useState, useEffect } from "react";
import Offer1 from "./OffersComponents/Offer1";
import Offer2 from "./OffersComponents/Offer2";
import Offer3 from "./OffersComponents/Offer3";

const Offers = () => {
  const [isVisible, updateVisibility] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function handleScroll() {
    if (
      document.querySelector(".offers").getBoundingClientRect().top <
      window.innerHeight - 200
    )
      updateVisibility(1);
    else updateVisibility(0);
  }
  return (
    <section className="offers">
      <header className="offers__header">Nasza oferta</header>
      <Offer1 isVisible={isVisible} />
      <Offer2 />
      <Offer3 isVisible={isVisible} />
    </section>
  );
};

export default Offers;
