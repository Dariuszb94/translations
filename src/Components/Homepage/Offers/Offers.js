import React, { useState, useEffect } from "react";
import Offer1 from "./OffersComponents/Offer1";
import Offer2 from "./OffersComponents/Offer2";
import Offer3 from "./OffersComponents/Offer3";

const Offers = () => {
  const [isVisible, updateVisibility] = useState(0);
  const [isVisibleMobile1, updateVisibilityMobile1] = useState(0);
  const [isVisibleMobile2, updateVisibilityMobile2] = useState(0);
  const [isVisibleMobile3, updateVisibilityMobile3] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  function handleScroll() {
    console.log(document.querySelector(".offers").getBoundingClientRect());
    if (
      document.querySelector(".offers").getBoundingClientRect().top <
      window.innerHeight - 120
    )
      updateVisibility(1);
    else updateVisibility(0);
    if (
      document.querySelector(".offer1").getBoundingClientRect().top <
      window.innerHeight - 80
    )
      updateVisibilityMobile1(1);
    else updateVisibilityMobile1(0);
    if (
      document.querySelector(".offer2").getBoundingClientRect().top <
      window.innerHeight - 80
    )
      updateVisibilityMobile2(1);
    else updateVisibilityMobile2(0);
    if (
      document.querySelector(".offer3").getBoundingClientRect().top <
      window.innerHeight - 80
    )
      updateVisibilityMobile3(1);
    else updateVisibilityMobile3(0);
  }

  return (
    <section className="offers">
      <header className="offers__header">Nasza oferta</header>
      <Offer1 isVisible={isVisible} isVisibleMobile={isVisibleMobile1} />
      <Offer2 isVisibleMobile={isVisibleMobile2} />
      <Offer3 isVisible={isVisible} isVisibleMobile={isVisibleMobile3} />
    </section>
  );
};

export default Offers;
