import React, { Component } from "react";

import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";

// react-bootstrap components
import Row from "react-bootstrap/Row";

// json data
import emptyChannel from "../../json/emptyChannel.json";
import radios from "../../json/radios.json";
import sats from "../../json/sats.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1),
      channel: { start: "", spread: "" },
      satValue: "",
      sats: sats,
      satsFound: sats
    };
  }

  // Select handling

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
            handleChannelChange={this.handleChannelChange}
            handleSatClick={this.handleSatClick}
            handleSatSearch={this.handleSatSearch}
          />
          <Table columns={selectedRadio.channelDetails} />
        </Row>
      </>
    );
  }
}
