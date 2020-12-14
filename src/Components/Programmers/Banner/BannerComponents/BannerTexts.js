import React from "react";
import { NavLink } from "react-router-dom";

const BannerTexts = () => {
  return (
    <div className="banner-texts">
      <h1 className="banner-texts__header">
        Wspieramy globalizację właściwymi narzędziami
      </h1>
      <h2 className="banner-texts__subheader">
        Interfejsy API tłumaczenia dla ciągłej lokalizacji, zaawansowane
        wykorzystywanie powtarzania, wyodrębnianie treści z 71 formatów plików i
        21 rodzajów plików źródłowych, adaptacyjne tłumaczenie maszynowe
        wykorzystujące sieci neuronowe i o wiele więcej.
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
