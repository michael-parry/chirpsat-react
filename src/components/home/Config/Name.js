import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <input
        type="text"
        name="channelName"
        className="form-control"
        placeholder="AO-92"
      />
    );
  }
}
