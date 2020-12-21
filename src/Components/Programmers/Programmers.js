import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import "./ProgrammersStyle.scss";
import Grid from "./Grid/Grid";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <Banner />
      <Grid />
    </section>
  );
};

export default Homepage;
