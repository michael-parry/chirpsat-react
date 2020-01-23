import React, { Component } from "react";

export default class Power extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Power</label>
        <div className="input-group">
          <select
            name="power-select"
            id="power-select"
            className="form-control"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="turbo">Turbo</option>
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Watts</span>
          </div>
        </div>
      </div>
    );
  }
}
