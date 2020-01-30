import React, { Component } from "react";
import RadioInput from "./RadioInput";
import SatSearch from "./SatSearch/SatSearch";
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
    return (
      <div
        // styled by style.css
        className="col col-12 col-sm-5 col-lg-2  p-0"
        id="config-container"
      >
        <form className="container mt-2 d-flex flex-column">
          <RadioInput
            options={this.props.radios}
            value={this.props.value}
            selectInfo={{ label: "Radio", inputName: "radioInput" }}
            onOptionChange={this.handleChange}
          />
          <SatSearch />
          <Channels
            channelStart={this.props.channelStart}
            handleChange={this.props.handleChange.bind(this)}
          />
          <Tone />
          <Power powerList={this.props.selectedRadio.power} />
          <Name />
        </form>
        <Update />
      </div>
    );
  }
}
