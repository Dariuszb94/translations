import React from "react";
import Overall from "./CultureComponents/Overall";
import CultureImg from "../../../Assets/piloti-translated.png";
const Culture = () => {
  return (
    <section className="culture">
      <img src={CultureImg} className="culture__img" />
      <Overall />
    </section>
  );
};

export default Culture;
