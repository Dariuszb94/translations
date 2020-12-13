import React from "react";
import Logo from "../../../Assets/logo.png";

const FooterLeft = () => {
  return (
    <div className="footer-left">
      <a href="/">
        <img src={Logo} className="footer-left__img" />
      </a>
      <div className="footer-left__text">
        Naszą misją jest zniesienie barier językowych poprzez połączenie pracy
        wykwalifikowanych tłumaczy z możliwościami sztucznej inteligencji, a
        także dostarczanie precyzyjnych rozwiązań i narzędzi lokalizacyjnych dla
        190 783 klientów na całym świecie.
      </div>
    </div>
  );
};

export default FooterLeft;
