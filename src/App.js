import "./App.css";
import React from "react";
import Menu from "./Components/Menu/index";
import Banner from "./Components/Banner/index";
import Offers from "./Components/Offers/index";

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Offers />
    </div>
  );
}

export default App;
