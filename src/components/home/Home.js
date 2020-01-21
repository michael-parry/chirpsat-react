import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";
import { Row } from "react-bootstrap/";

import radios from "../../json/radios.json";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.state = {
      selectedOption: 1,
      rowContents: [
        "1",
        "AO-91 (-2)",
        "435.240",
        "145.535",
        "67.7 Hz",
        "5 watts",
        "12.5kHz",
        "FM Sats"
      ]
    };
  }

  handleChange(option) {
    this.setState({ selectedOption: option });
  }

  setHeader(header) {
    this.setState({ tableRow: header });
  }

  render() {
    var selectedRadioObject = radios.find(
      radio => radio.id === this.state.selectedOption
    );
    this.columns = selectedRadioObject.channelDetails.map(
      options => options.title
    );
    return (
      <>
        <Navbar></Navbar>
        <Row className="m-0 position-relative">
          <Config
            onOptionChange={this.handleChange}
            Option={this.state.selectedOption}
            radios={radios}
          />
          <Table
            columns={this.columns}
            selectedOption={this.state.selectedOption}
            rowContents={this.state.rowContents}
          />
        </Row>
      </>
    );
  }
}
