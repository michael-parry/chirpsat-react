import React, { Component } from "react";

export default class Callsign extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Callsign</label>
        <input type="text" name="channelRadioID" className="form-control" />
      </div>
    );
  }
}
