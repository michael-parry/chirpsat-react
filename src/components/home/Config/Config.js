import React, { Component } from "react";
import RadioInput from "./RadioInput";
import SatSearch from "./SatSearch";
import Channels from "./Channels";
import Tone from "./Tone";
import Power from "./Power";
import Name from "./Name";
import Update from "./Update";

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
      bottom: 0,
      overflowY: "auto"
    };

    return (
      <form className="col col-lg-2 col-sm-5 mt-2 p-0" style={configStyle}>
        <div className="container">
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
          <Update />
        </div>
      </form>
    );
  }
}
