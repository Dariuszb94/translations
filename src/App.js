import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import Enterprises from "./Components/Enterprises/Enterprises";
import Programmers from "./Components/Programmers/Programmers";
import Estimation from "./Components/Estimation/Estimation";
import Menu from "./Components/Menu/Menu";
import ContactFixed from "./Components/ContactFixed/ContactFixed";
import ContactFixedHidden from "./Components/ContactFixedHidden/ContactFixedHidden";
import Footer from "./Components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
function App({ location }) {
  return (
    <div className="App">
      <Menu />
      <ContactFixed />
      <ContactFixedHidden />
      <Switch location={location}>
               
        <Route exact path="/home" component={Homepage} />
        <Route path="/estimation" component={Estimation} />
                     
        <Route path="/enterprises" component={Enterprises} />
        <Route path="/programmers" component={Programmers} />
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
