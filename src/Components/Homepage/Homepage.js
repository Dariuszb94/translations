import Banner from "./Banner/Banner";
import Offers from "./Offers/Offers";
import "./homepageStyle.scss";
import Testimonial from "./Testimonials/Testimonials";
import Culture from "./Culture/Culture";

import React from "react";

const Homepage = () => {
  return (
    <section>
      <Banner />
      <Offers />
      <Testimonial />
      <Culture />
    </section>
  );
};

export default Homepage;
