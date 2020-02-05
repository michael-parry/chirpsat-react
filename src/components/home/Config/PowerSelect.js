import React, { Component } from "react";

const uuidv4 = require("uuid/v4");

export default class PowerSelect extends Component {
  render() {
    const optionsList = this.props.powerList.map(power => (
      <option key={uuidv4()} value={power}>
        {power}
      </option>
    ));
    return (
      <div className="form-group">
        <label>Power</label>
        <div className="input-group">
          <select
            name="power-select"
            id="power-select"
            className="form-control"
          >
            <option>Choose..</option>
            {optionsList}
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Watts</span>
          </div>
        </div>
      </div>
    );
  }
}
