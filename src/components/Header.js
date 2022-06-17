import React from "react";

import "./Header.css";
import virus from "../images/virus.png";

export default class Header extends React.Component {
  render() {
    return (
      <header className="mainHeader">
        <img src={virus} alt="Ilustração de um virus" />
        <div>
          <h2>Campanha de vacinação</h2>
          <h3>COVID-19</h3>
        </div>
      </header>
    );
  }
}
