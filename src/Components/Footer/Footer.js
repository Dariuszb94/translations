import React, { useState, useEffect } from "react";
import FooterLeft from "./FooterComponents/FooterLeft/index";
import FooterRight from "./FooterComponents/FooterRight/index";

const Footer = () => {
  return (
    <section className="footer">
      <FooterLeft />
      <FooterRight />
    </section>
  );
};

export default Footer;
