import React from "react";
import Overall from "./CultureComponents/Overall/index";
import CultureImg from "../../Assets/giardiniere-translated.png";
const Culture = () => {
  return (
    <section className="culture">
      <Overall />
      <img src={CultureImg} className="culture__img" />
    </section>
  );
};

export default Culture;
