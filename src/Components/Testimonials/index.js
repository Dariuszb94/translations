import React, { useState } from "react";
import Overall from ".//TestimonialsComponents/Overall/index";
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
      <div className="testimonials__main">
        <Testimonial
          content={content[count]}
          company={company[count]}
          img={img[count]}
        />
        <ul className="testimonials__list">
          {Array.from([0, 1, 2], (i) => {
            return (
              <li>
                <button
                  className={`testimonials__list__button${
                    count === i ? "--active" : ""
                  }`}
                  onClick={() => setCount(i)}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
      <Overall />
    </section>
  );
};

export default Testimonials;
