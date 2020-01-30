import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Channel name</label>
        <input
          type="text"
          name="channelName"
          className="form-control"
          placeholder="AO-92"
        />
      </div>
    );
  }
}
