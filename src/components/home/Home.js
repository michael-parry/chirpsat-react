import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";
import Row from "react-bootstrap/Row";

import emptyChannel from "../../json/emptyChannel.json";
import radios from "../../json/radios.json";
import sats from "../../json/sats.json";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1),
      channelStart: "",
      callsign: "",
      satValue: "",
      sats: sats,
      satsFound: sats
    };
  }

  // Update table

  updateTable = () => {
    const activeSatArray = this.state.sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    const newRows = [];
    activeSatArray.forEach((sat, index) => {
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !this.state.channelStart
        ? index + 1
        : this.state.channelStart + index;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newChannel["Transmit Frequency"] = (sat.uplinkk * 1e-6).toFixed(3);
      newChannel["Contact"] = toString(this.state.callsign);
      newRows.push(newChannel);
    });
    this.setState({
      bodyContent: newRows
    });
  };

  componentDidMount() {
    this.updateTable();
  }

  // Select handling

  handleRadioChange = option => {
    let foundRadio = radios.find(radio => radio.id === parseInt(option));
    foundRadio
      ? this.setState({ selectedRadio: foundRadio })
      : this.setState({ selectedRadio: radios[0] });
    this.updateTable();
  };

  setHeader = header => {
    this.setState({ tableRow: header });
  };

  handleChannelChange = e => {
    this.setState({ channelStart: e.target.value });
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
    const {
      callsign,
      selectedOption,
      selectedRadio,
      channelStart,
      sats,
      satsFound,
      satValue
    } = this.state;

    // generate table rows from state, pass to table as prop
    const activeSatArray = this.state.sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    const newRows = [];
    activeSatArray.forEach((sat, index) => {
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !this.state.channelStart
        ? index + 1
        : parseInt(this.state.channelStart) + index;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newChannel["Transmit Frequency"] = (sat.uplinkk * 1e-6).toFixed(3);
      newChannel["Contact"] = toString(this.state.callsign);
      newRows.push(newChannel);
    });
    return (
      <>
        <Navbar />
        <Row className="row m-0">
          <Config
            callsign={callsign}
            Option={selectedOption}
            radios={radios}
            selectedRadio={selectedRadio}
            value={selectedOption}
            channelStart={channelStart}
            sats={sats}
            satsFound={satsFound}
            satValue={satValue}
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
