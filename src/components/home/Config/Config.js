import React, { Component } from "react";
import RadioInput from "./RadioInput";
import SatSearch from "./SatSearch";
import Channels from "./Channels";
import Tone from "./Tone";
import Power from "./Power";
import Name from "./Name";

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(option) {
    this.props.onOptionChange(option);
  }
  render() {
    // Config style
    const configStyle = {
      position: "fixed",
      top: "56px",
      left: 0,
      bottom: "38px",
      overflowY: "auto"
    };

    return (
      <div className="col col-lg-2 col-sm-5 mt-0 p-0" style={configStyle}>
        <form className="container mt-2 d-flex flex-column">
          <RadioInput
            options={this.props.radios}
            value={this.props.value}
            selectInfo={{ label: "Radio", inputName: "radioInput" }}
            onOptionChange={this.handleChange}
          />
          <SatSearch />
          <Channels />
          <Tone />
          <Power />
          <Name />
        </form>
      </div>
    );
  }
}
