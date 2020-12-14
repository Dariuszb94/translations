import React from "react";
import { NavLink } from "react-router-dom";

const BannerTexts = () => {
  return (
    <div className="banner-texts">
      <h1 className="banner-texts__header">
        Stwarzamy nowe możliwości dla biznesu
      </h1>
      <h2 className="banner-texts__subheader">
        Wszystko, czego potrzebuje Twoje przedsiębiorstwo: od tłumaczenia
        prostego dokumentu poprzez spersonalizowane rozwiązania lokalizacyjne aż
        po zautomatyzowane i szybkie usługi tłumaczeniowe w 184 językach.
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
