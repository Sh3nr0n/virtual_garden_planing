//Import React library
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import the Header object from the Header.js component
import Header from "./Header";
import VegetableGarden from "./Containers/VegetableGarden";
import Contact from "./Containers/Contact";
import Home from "./Containers/Home";


class App extends React.Component {
  render() {
    
    return (
      <Fragment>
        <Header />
        <Router>
          <Fragment>
            <Route exact path="/" component={Home}/>
            <Route exact path="/potager" component={VegetableGarden}/>
            <Route exact path="/contact" component={Contact} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
