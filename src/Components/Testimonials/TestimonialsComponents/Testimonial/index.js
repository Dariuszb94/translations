import React from "react";

import PropTypes from "prop-types";
const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <img className="testimonial__img" src={props.img} />
      <p className="testimonial__content">{props.content}</p>
      <p className="testimonial__company">{props.company}</p>
    </div>
  );
};
Testimonial.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  company: PropTypes.string,
};
export default Testimonial;
