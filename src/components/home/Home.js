import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";
import { Row } from "react-bootstrap/";
import Update from "././Config/Update";

import radios from "../../json/radios.json";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.state = {
      selectedOption: 0,
      rowContents: [
        "1",
        "AO-91 (-2)",
        "435.240",
        "145.535",
        "67.7 Hz",
        "5 watts",
        "12.5kHz",
        "FM Sats"
      ],
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1)
    };
  }

  handleChange(option) {
    this.setState({ selectedOption: option });
    let foundRadio = radios.find(radio => radio.id === parseInt(option));
    foundRadio
      ? this.setState({ selectedRadio: foundRadio })
      : this.setState({ selectedRadio: radios[0] });
  }

  setHeader(header) {
    this.setState({ tableRow: header });
  }

  updateRadio(id) {}

  render() {
    return (
      <>
        <Navbar />
        <Row className="m-0 position-relative">
          <Config
            onOptionChange={this.handleChange}
            Option={this.state.selectedOption}
            radios={radios}
            value={this.state.selectedOption}
          />
          <Update />
          <Table
            columns={this.state.selectedRadio.channelDetails}
            selectedOption={this.state.selectedOption}
            rowContents={this.state.rowContents}
          />
        </Row>
      </>
    );
  }
}
