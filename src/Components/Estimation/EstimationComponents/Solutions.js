import React, { useState } from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import apiKeys from "../../../apikeys";

const Solutions = ({ numberOfChars, text }) => {
  const [mail, changeMail] = useState("");
  const [readyToSend, changeReadyToSend] = useState(0);
  const messageEco = (numberOfChars * 0.3 + 23).toFixed(2);
  const messagePro = (numberOfChars * 0.7 + 40).toFixed(2);
  const messagePremium = (numberOfChars * 0.5 + 32).toFixed(2);
  function validateMail() {
    const re = /\S+@\S+\.\S+/;
    if (re.test(String(mail).toLowerCase())) {
      changeReadyToSend(1);
    } else {
      changeReadyToSend(0);
    }
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        () => {
          alert("Mail został wysłany");
          e.target.querySelector('input[type="submit"]').style.backgroundColor =
            "green";
          e.target.querySelector('input[type="submit"]').style.boxShadow =
            "box-shadow: 0px 2px 12px green;";
        },
        () => {
          alert("Wystąpił problem podczas wysyłki e-mail");
          e.target.querySelector('input[type="submit"]').style.backgroundColor =
            "red";
          e.target.querySelector('input[type="submit"]').style.boxShadow =
            "box-shadow: 0px 2px 12px red;";
        }
      );
  }
  return (
    <div className="solutions">
      <div className="solutions__mail-description">Wpisz swój mail</div>
      <input
        type="text"
        placeholder="Email"
        value={mail}
        id="mail"
        name="mail"
        className={`solutions__mail-input${!readyToSend ? "--invalid" : ""}`}
        onChange={(e) => {
          changeMail(e.target.value);
          validateMail();
        }}
      />
      <h2>Wybierz dla siebie</h2>
      <ul className="solutions__list">
        <li className="solution">
          <h4 className="solution__header">Premium</h4>
          <div className="solution__icons">
            <div className="solution__icons__icon">
              <PermIdentityIcon />
              Tłumacz
            </div>
            <div className="solution__icons__icon">
              <HighQualityIcon />
              Wyspecjalizowany weryfikator
            </div>
          </div>
          <div className="solution__price">
            {(numberOfChars * 0.5 + 32).toFixed(2)} zł
          </div>
          <form className="contact-form" onSubmit={sendEmail}>
            <textarea
              readOnly
              name="message"
              value={messagePremium}
              className="mail-message"
            />
            <textarea
              readOnly
              name="option"
              value="Premium"
              className="mail-message"
            />
            <textarea
              readOnly
              name="text"
              value={text}
              className="mail-message"
            />
            <input readOnly name="mail" value={mail} className="mail-message" />
            <input
              className={`solution__order${readyToSend ? "--active" : ""}`}
              type="submit"
              value="Zamówienie"
            />
          </form>
        </li>
        <li className="solution">
          <h4 className="solution__header">Profesjonalne</h4>
          <div className="solution__icons">
            <div className="solution__icons__icon">
              <PermIdentityIcon />
              Tłumacz
            </div>
            <div className="solution__icons__icon">
              <HighQualityIcon />
              Wyspecjalizowany weryfikator
            </div>
          </div>
          <div className="solution__price">
            {(numberOfChars * 0.7 + 40).toFixed(2)} zł
          </div>
          <form className="contact-form" onSubmit={sendEmail}>
            <textarea
              readOnly
              name="message"
              value={messagePro}
              className="mail-message"
            />
            <textarea
              readOnly
              name="option"
              value="Pro"
              className="mail-message"
            />
            <textarea
              readOnly
              name="text"
              value={text}
              className="mail-message"
            />
            <input readOnly name="mail" value={mail} className="mail-message" />
            <input
              className={`solution__order${readyToSend ? "--active" : ""}`}
              type="submit"
              value="Zamówienie"
            />
          </form>
        </li>
        <li className="solution">
          <h4 className="solution__header">Ekonomia</h4>
          <div className="solution__icons">
            <div className="solution__icons__icon">
              <PermIdentityIcon />
              Tłumacz
            </div>
            <div className="solution__icons__icon">
              <FlashOnIcon />
              Tłumaczenie maszynowe
            </div>
          </div>
          <div className="solution__price">
            {(numberOfChars * 0.3 + 23).toFixed(2)} zł
          </div>
          <form
            onMouseEnter={() => {
              validateMail();
            }}
            className="contact-form"
            onSubmit={sendEmail}
          >
            <textarea
              readOnly
              name="message"
              value={messageEco}
              className="mail-message"
            />
            <textarea
              readOnly
              name="option"
              value="Eco"
              className="mail-message"
            />
            <textarea
              readOnly
              name="text"
              value={text}
              className="mail-message"
            />
            <input readOnly name="mail" value={mail} className="mail-message" />
            <input
              className={`solution__order${readyToSend ? "--active" : ""}`}
              type="submit"
              value="Zamówienie"
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

Solutions.propTypes = {
  numberOfChars: PropTypes.number,
  text: PropTypes.string,
};

export default Solutions;
