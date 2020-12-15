import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import "./ContactFixedHiddenStyle.scss";

const ContactFixedHidden = () => {
  const rollDown = () => {
    document.querySelector(".contact-hidden").style.transform = "scaleX(0)";
    setTimeout(function () {
      document.querySelector(".contact").style.transform = "scaleY(1)";
    }, 300);
  };
  return (
    <div className="contact-hidden">
      {" "}
      <div className="contact-hide">
        <div className="contact-hide__columns">
          <div className="contact-hide__columns__column">
            <PhoneAndroidIcon /> <a href="tel:+48535262562">535 262 562</a>
          </div>
          <div className="contact-hide__columns__column">
            <MailIcon />
            <a href="mailto:dariusz.berer@gmail.com">dariusz.berer@gmail.com</a>
          </div>
        </div>
        <KeyboardBackspaceIcon
          className="contact-hide-back"
          onClick={rollDown}
        />
      </div>
    </div>
  );
};
export default ContactFixedHidden;
