import "./App.css";
import React from "react";
import Menu from "./Components/Menu/index";
import Banner from "./Components/Banner/index";
import Offers from "./Components/Offers/index";
import Testimonial from "./Components/Testimonials/index";
import Culture from "./Components/Culture/index";

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Offers />
      <Testimonial />
      <Culture />
    </div>
  );
}

export default App;
