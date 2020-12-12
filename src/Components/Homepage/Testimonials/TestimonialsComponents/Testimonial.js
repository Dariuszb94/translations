import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Testimonial = (testimonialInner) => {
  useEffect(() => {
    document.querySelector(".testimonial").classList.add("sliding");
    setTimeout(function () {
      document.querySelector(".testimonial").classList.remove("sliding");
    }, 500);
  }, [testimonialInner]);
  return (
    <div className="testimonial">
      <img className="testimonial__img" src={testimonialInner.img} />
      <p className="testimonial__content">{testimonialInner.content}</p>
      <p className="testimonial__company">{testimonialInner.company}</p>
    </div>
  );
};
Testimonial.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  company: PropTypes.string,
};
export default Testimonial;
