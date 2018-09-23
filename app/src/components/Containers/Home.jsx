import React, { Fragment, Component } from "react";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <Fragment>
      <Header title = {'Accueil'} />
        <p>Bienvenue sur le site du portager virtuel</p>
      </Fragment>
    );
  }
}

export default Home;
