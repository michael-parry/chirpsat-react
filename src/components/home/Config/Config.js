import React, { Component } from "react";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import SatSearch from "./SatSearch/SatSearch";
import Channels from "./Channels";
import Tone from "./Tone";
import Power from "./Power";
import Export from "./Export";

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
          <TextInput name={"callsign"} placeholder={""} label={"Callsign"} />
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
          <Power powerList={this.props.selectedRadio.power} />
          <TextInput
            name={"channel-name"}
            placeholder={"AO-92"}
            label={"Channel name"}
          />
        </form>
        <Export />
      </div>
    );
  }
}
