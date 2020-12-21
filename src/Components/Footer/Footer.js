import React from "react";
import "./FooterStyle.scss";
import FooterLeft from "./FooterComponents/FooterLeft";
import FooterRight from "./FooterComponents/FooterRight";

const Footer = () => {
  return (
    <section className="footer">
      <FooterLeft />
      <FooterRight />
    </section>
  );
};

export default Footer;
