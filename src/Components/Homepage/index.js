import Banner from "./Banner/index";
import Offers from "./Offers/index";
import Testimonial from "./Testimonials/index";
import Culture from "./Culture/index";

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
