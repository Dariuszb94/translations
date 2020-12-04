import React from "react";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import MailIcon from "@material-ui/icons/Mail";
const FooterRight = () => {
  return (
    <div className="footer-right">
      <div className="footer-right__link-container">
        <PhoneEnabledIcon className="footer-right__icon" />
        <a className="footer-right__link" href="tel:(+48) 222922151">
          (+48) 222922151
        </a>
      </div>
      <div className="footer-right__link-container">
        <MailIcon className="footer-right__icon" />
        <a className="footer-right__link" href="mailto:info@translated.com">
          info@translated.com
        </a>
      </div>
      <div className="footer-right__text">
        229 743 profesjonalnych tłumaczy i 190 073 klientów korzysta z
        inteligentnego sposobu tłumaczeń od 1999 roku.
      </div>
    </div>
  );
};

export default FooterRight;
