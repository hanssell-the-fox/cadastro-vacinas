import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <li
        className="optionButton"
        title={this.props.title}
        onClick={this.props.onClick}
      >
        <img src={this.props.icon} alt={this.props.alt} />
        <p>{this.props.description}</p>
      </li>
    );
  }
}
