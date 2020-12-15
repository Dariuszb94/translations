import React from "react";

const ContactFixed = () => {
  const rollUp = () => {
    document.querySelector(".contact").style.transform = "scaleY(0)";
    setTimeout(function () {
      document.querySelector(".contact-hidden").style.transform = "scaleX(1)";
    }, 300);
  };
  return (
    <section className="contact" onMouseEnter={rollUp}>
      <div className="contact-text">Contact&nbsp;me</div>
    </section>
  );
};

export default ContactFixed;
