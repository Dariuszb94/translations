import Banner from "./Banner/Banner";
import "./programmersStyle.scss";
import Culture from "./Culture/Culture";

import React from "react";

const Homepage = () => {
  return (
    <section>
      <Banner />
      <Culture />
    </section>
  );
};

export default Homepage;
