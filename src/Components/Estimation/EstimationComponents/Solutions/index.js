import React, { useState } from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HighQualityIcon from "@material-ui/icons/HighQuality";
const Solutions = () => {
  return (
    <div className="solutions">
      <h2>Wybierz dla siebie</h2>
      <ul className="solutions__list">
        <li className="solution">
          <h4 className="solution__header">Premium</h4>
          <div className="solution__icons">
            <div>
              <PermIdentityIcon />
              Tłumacz
            </div>
            <div>
              <HighQualityIcon />
              Wyspecjalizowany weryfikator
            </div>
          </div>
          <div className="solution__price">zł639,75</div>
          <button className="solution__order">Zamówienie</button>
        </li>
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
          <div className="solution__price">zł639,75</div>
          <button className="solution__order">Zamówienie</button>
        </li>
        <li className="solution">
          <h4 className="solution__header">Premium</h4>
          <div className="solution__icons">
            <div>
              <PermIdentityIcon />
              Tłumacz
            </div>
            <div>
              <HighQualityIcon />
              Wyspecjalizowany weryfikator
            </div>
          </div>
          <div className="solution__price">zł639,75</div>
          <button className="solution__order">Zamówienie</button>
        </li>
      </ul>
    </div>
  );
};

Solutions.propTypes = {};

export default Solutions;
