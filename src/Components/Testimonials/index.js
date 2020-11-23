import React, { useState } from "react";
import TestimonialImg1 from "../../Assets/vanek.jpg";
import TestimonialImg2 from "../../Assets/mauri.png";
import TestimonialImg3 from "../../Assets/corallo.png";

import Testimonial from "./TestimonialsComponents/Testimonial/index";
const Testimonials = () => {
  const img = [TestimonialImg1, TestimonialImg2, TestimonialImg3];
  const content = [
    " Zespół Translated zawsze okazywał się profesjonalny i pomocny. Szybko reaguje na prośby o pomoc i przestrzega ustalonych terminów.",
    "Zespół Translated jest skuteczny zarówno pod względem handlowym, jak i operacyjnym. Jest przykładnie sumienny w dotrzymywaniu terminów i w razie potrzeby szybko rozwiązuje wszelkie problemy po dostarczeniu tłumaczenia.",
    "Wysokiej jakości tłumaczenia o krótkim czasie realizacji. Kampanie  AdWords i na Facebooku na potrzeby rynków zagranicznych nie są dla nas żadnym problemem!",
  ];
  const company = [
    "Fabio Vanek – Italiaonline",
    "Davide Scalvi – Docebo",
    "Laura Corallo – Eataly",
  ];
  const [count, setCount] = useState(0);
  return (
    <section className="testimonials">
      <Testimonial
        content={content[count]}
        company={company[count]}
        img={img[count]}
      />
      <ul className="testimonials__list">
        <li>
          <button
            className={`testimonials__list__button${
              count === 0 ? "--active" : ""
            }`}
            onClick={() => setCount(0)}
          ></button>
        </li>
        <li>
          <button
            className={`testimonials__list__button${
              count === 1 ? "--active" : ""
            }`}
            onClick={() => setCount(1)}
          ></button>
        </li>
        <li>
          <button
            className={`testimonials__list__button${
              count === 2 ? "--active" : ""
            }`}
            onClick={() => setCount(2)}
          ></button>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;
