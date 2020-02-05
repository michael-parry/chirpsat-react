import React, { Component } from "react";

import { connect } from "react-redux";
import { updateCallsign } from "../../actions/configActions";

import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";

// react-bootstrap components
import Row from "react-bootstrap/Row";

// json data
import emptyChannel from "../../json/emptyChannel.json";
import radios from "../../json/radios.json";
import sats from "../../json/sats.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1),
      channel: { start: "", spread: "" },
      callsign: "",
      satValue: "",
      sats: sats,
      satsFound: sats
    };
  }

  // Select handling

  handleRadioChange = option => {
    let foundRadio = radios.find(radio => radio.id === parseInt(option));
    foundRadio
      ? this.setState({ selectedRadio: foundRadio })
      : this.setState({ selectedRadio: radios[0] });
  };

  setHeader = header => {
    this.setState({ tableRow: header });
  };

  handleChannelChange = e => {
    const newChannel = { ...this.state.channel, start: e.target.value };
    this.setState({ channel: newChannel });
  };

  // SatSearch handling

  handleSatSearch = e => {
    this.setState({ satValue: e.target.value });
    const query = e.target.value.toUpperCase();
    let searchList = this.state.sats.filter(sat =>
      sat.nickname.toUpperCase().includes(query)
    );
    this.setState({
      satsFound: searchList
    });
  };

  handleSatClick = (id, e) => {
    e.preventDefault();
    let satObject = this.state.sats.find(sat => sat.number === parseInt(id));
    satObject.isActive = !satObject.isActive;
    const newSatArray = [
      ...this.state.sats.filter(sat => sat.number !== parseInt(id)),
      satObject
    ].sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    this.setState({
      sats: newSatArray
    });
  };

  render() {
    // state destructuring
    const { selectedRadio, channel, sats, satsFound, satValue } = this.state;

    // generate table rows from state, pass to table as prop
    const activeSatArray = this.state.sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    const newRows = [];
    activeSatArray.forEach((sat, index) => {
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !this.state.channel.start
        ? index + 1
        : parseInt(this.state.channel.start) + index;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
      newChannel["Contact"] = this.props.config.callsign;
      newRows.push(newChannel);
    });
    return (
      <>
        <Navbar />
        <Row className="row m-0">
          <Config
            radios={radios}
            selectedRadio={selectedRadio}
            channel={channel}
            sats={sats}
            satsFound={satsFound}
            satValue={satValue}
            handleCallsignChange={this.handleCallsignChange}
            handleChannelChange={this.handleChannelChange}
            onOptionChange={this.handleRadioChange}
            handleSatClick={this.handleSatClick}
            handleSatSearch={this.handleSatSearch}
          />
          <Table columns={selectedRadio.channelDetails} bodyContent={newRows} />
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps, { updateCallsign })(Home);
