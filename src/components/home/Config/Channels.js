import React, { Component } from "react";
import HelpModal from "./HelpModal";
export default class Channels extends Component {
  render() {
    const body = (
      <>
        <p>
          <span className="font-weight-bold bg-secondary text-white rounded p-1">
            Start
          </span>{" "}
          determines which channel number the generated channels will begin
          with.
        </p>{" "}
        <p>
          <span className="font-weight-bold bg-secondary text-white rounded p-1">
            Spread
          </span>{" "}
          defines how many channels you would like to create for each satellite.
        </p>
      </>
    );
    return (
      <div className="form-group">
        <label>
          Channels
          <HelpModal body={body} title={"Channels"} />
        </label>
        <div className="form-row">
          <div className="input-group col-12">
            <input
              type="text"
              className="form-control"
              id="options-channel-start"
              value={this.props.channel.start}
              placeholder="start"
              onChange={this.props.handleChange.bind(this)}
            />

            <input
              type="text"
              className="form-control"
              id="options-channel-range"
              value={this.props.channel.spread}
              placeholder="spread"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
