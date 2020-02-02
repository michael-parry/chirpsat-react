import React, { Component } from "react";

const uuidv4 = require("uuid/v4");

const classInactive = "list-group-item list-group-item-action bg-light";

export default class SatItem extends Component {
  render() {
    return (
      <button
        value={this.props.number}
        className={this.props.isDisabled ? "d-none" : classInactive}
        disabled={this.props.isDisabled}
        onClick={this.props.handleClick.bind(this, this.props.number)}
      >
        {this.props.nickname}
      </button>
    );
  }
}
