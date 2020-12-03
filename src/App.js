import "./App.css";
import React from "react";
import Homepage from "./Components/Homepage/index";
import Estimation from "./Components/Estimation/index";
import Menu from "./Components/Homepage/Menu/index";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
function App({ location }) {
  return (
    <div className="App">
             
      <Menu />
      <Switch location={location}>
                  
        <Route exact path="/home" component={Homepage} />
                  
        <Route path="/estimation" component={Estimation} />
                           
        <Route component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}
App.propTypes = {
  location: PropTypes.object,
};
export default App;
