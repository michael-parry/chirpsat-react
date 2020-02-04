import React, { Component } from "react";

const classActive =
  "list-group-item list-group-item-action bg-secondary text-white";

export default class SatItem extends Component {
  render() {
    return (
      <button
        key={this.props.number}
        value={this.props.number}
        className={classActive}
        disabled={this.props.isDisabled}
        onClick={this.props.handleSatClick.bind(this, this.props.number)}
      >
        {this.props.nickname}
      </button>
    );
  }
}
