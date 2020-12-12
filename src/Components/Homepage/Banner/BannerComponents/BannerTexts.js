import React from "react";
import { NavLink } from "react-router-dom";

const BannerTexts = () => {
  return (
    <div className="banner-texts">
      <h1 className="banner-texts__header">Przemawiamy językiem możliwości</h1>
      <h2 className="banner-texts__subheader">
        Profesjonalne usługi tłumaczeniowe stały się łatwiejsze. Stworzone przez
        specjalistów, wsparte technologią, sprawnie dostarczane.
      </h2>
      <NavLink to="/estimation" className="banner-texts__calculator">
        Natychmiastowa wycena
      </NavLink>
      <a className="banner-texts__about">O nas</a>
    </div>
  );
};

BannerTexts.propTypes = {};

export default BannerTexts;
