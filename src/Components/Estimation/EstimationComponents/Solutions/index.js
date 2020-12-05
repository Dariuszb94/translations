import React, { useState, useEffect } from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import apiKeys from "../../../../apikeys";

const Solutions = ({ numberOfChars }) => {
  const [message, changeMessage] = useState("Sdsss");
  function sendEmail(e) {
    console.log(e.target);
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="solutions">
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
          <button className="solution__order">Zamówienie</button>
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
          <button className="solution__order">Zamówienie</button>
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
          <button className="solution__order">Zamówienie</button>
        </li>
      </ul>
      <form className="contact-form" onSubmit={sendEmail}>
        <textarea name="message" value={message} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

Solutions.propTypes = { numberOfChars: PropTypes.number };

export default Solutions;
