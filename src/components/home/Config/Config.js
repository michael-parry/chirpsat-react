import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCallsign, updateContact } from "../../../actions/configActions"; // redux acion

import TextInput from "./TextInput";
import RadioSelect from "./RadioSelect";
import SatSearch from "./SatSearch/SatSearch";
import Channels from "./Channels";
import PowerSelect from "./PowerSelect";
import Export from "./Export";
import HelpModal from "./HelpModal";

const body = ( //modal body for contact input
  <>
    <p>
      <span className="font-weight-bold bg-secondary text-white rounded p-1">
        Contact
      </span>{" "}
      sets the Zone for the channels.
    </p>
  </>
);

class Config extends Component {
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
            value={this.props.config.callsign}
            handleChange={e => this.props.updateCallsign(e.target.value)}
          />
          <RadioSelect
            selectInfo={{ label: "Radio", inputName: "radioInput" }}
          />
          <SatSearch />
          <TextInput
            name="channel-contact"
            label="Contact"
            handleChange={e => this.props.updateContact(e.target.value)}
            modal={<HelpModal body={body} title="Contact" />}
          />
          <Channels />
          <PowerSelect powerList={this.props.config.radio.power} />
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

export default connect(mapStateToProps, { updateCallsign, updateContact })(
  Config
);
