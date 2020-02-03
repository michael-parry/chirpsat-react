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
      bodyContent: [],
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1),
      channelStart: "",
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
      newChannel["No."] = index + 3;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newRows.push(newChannel);
    });
    this.setState({
      bodyContent: newRows
    });
  };

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
    this.updateTable();
  };

  render() {
    return (
      <>
        <Navbar />
        <Row className="row m-0">
          <Config
            Option={this.state.selectedOption}
            radios={radios}
            selectedRadio={this.state.selectedRadio}
            value={this.state.selectedOption}
            channelStart={this.state.channelStart}
            sats={this.state.sats}
            satsFound={this.state.satsFound}
            satValue={this.state.satValue}
            handleChannelChange={this.handleChannelChange}
            onOptionChange={this.handleRadioChange}
            handleSatClick={this.handleSatClick}
            handleSatSearch={this.handleSatSearch}
          />
          <Table
            columns={this.state.selectedRadio.channelDetails}
            bodyContent={this.state.bodyContent}
          />
        </Row>
      </>
    );
  }
}
