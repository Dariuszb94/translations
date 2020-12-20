import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import "./enterprisesStyle.scss";
import Culture from "./Culture/Culture";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <Banner />
      <Culture />
    </section>
  );
};

export default Homepage;
