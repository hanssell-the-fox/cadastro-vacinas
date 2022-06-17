import React from "react";

import "./GoBack.css";
import arrow from "../images/left-arrow.png";

export default class GoBackButton extends React.Component {
  handleGoBack() {
    document.getElementById("home").focus();
  }

  render() {
    return (
      <div className="goBack" onClick={this.handleGoBack}>
        <img src={arrow} alt="" />
      </div>
    );
  }
}
