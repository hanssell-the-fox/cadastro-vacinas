import React from "react";

import personImage from "../images/vaccination.svg";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default class Home extends React.Component {
  render() {
    return (
      <div id="home" tabIndex={this.props.tab} autoFocus>
        <img src={personImage} alt="Ilustração de uma pessoa sendo vacinada" />
        <section>
          <Header />
          <NavBar />
        </section>
      </div>
    );
  }
}
