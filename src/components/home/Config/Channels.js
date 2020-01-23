import React, { Component } from "react";

export default class Channels extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Channel</label>
        <div className="form-row">
          <div className="input-group col-12">
            <input
              type="text"
              className="form-control"
              id="options-channel-start"
              placeholder="start"
            />
            <input
              type="text"
              className="form-control"
              id="options-channel-range"
              placeholder="spread"
            />
          </div>
        </div>
      </div>
    );
  }
}
