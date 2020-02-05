import React, { Component } from "react";

import { connect } from "react-redux";
import { updateCallsign } from "../../../actions/configActions";

import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import SatSearch from "./SatSearch/SatSearch";
import Channels from "./Channels";
// import Tone from "./Tone";
import Power from "./Power";
import Export from "./Export";

class Config extends Component {
  handleCallsignChange = e => {
    const value = e.target.value;
    this.props.updateCallsign(value);
  };

  render() {
    return (
      <div
        // styled by style.css
        className="col col-12 col-sm-5 col-lg-2  p-0"
        id="config-container"
      >
        <form className="container mt-2 d-flex flex-column">
          <TextInput
            name="callsign"
            label="Callsign"
            handleChange={this.handleCallsignChange}
          />
          <RadioInput
            options={this.props.radios}
            value={this.props.value}
            selectInfo={{ label: "Radio", inputName: "radioInput" }}
            onOptionChange={this.props.onOptionChange.bind(this)}
          />
          <SatSearch
            sats={this.props.sats}
            satsFound={this.props.satsFound}
            value={this.props.satValue}
            handleSatClick={this.props.handleSatClick.bind(this)}
            handleSatSearch={this.props.handleSatSearch.bind(this)}
          />
          <TextInput name="channel-contact" label="Contact" />
          <Channels
            channelStart={this.props.channelStart}
            handleChange={this.props.handleChannelChange.bind(this)}
          />
          <Power powerList={this.props.selectedRadio.power} />
          <TextInput
            name="channel-name"
            placeholder="AO-92"
            label="Channel name"
          />
        </form>
        <Export />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps, { updateCallsign })(Config);
