import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";
import { Row } from "react-bootstrap/";

const Options = [
  {
    id: 1,
    title: "option 1"
  },
  {
    id: 2,
    title: "option 2"
  },
  {
    id: 3,
    title: "option 3"
  }
];

export default class home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.state = {
      SelectedOption: "1",
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
    this.columns = [
      "#",
      "Name",
      "TX",
      "RX",
      "Tone",
      "Power",
      "Bandwidth",
      "Zone"
    ];
  }

  handleChange(option) {
    this.setState({ SelectedOption: option });
  }

  setHeader(header) {
    this.setState({ tableRow: header });
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Row className="m-0 position-relative">
          <Config
            Options={Options}
            onOptionChange={this.handleChange}
            Option={this.state.SelectedOption}
          />
          <Table
            columns={this.columns}
            SelectedOption={this.state.SelectedOption}
            rowContents={this.state.rowContents}
          />
        </Row>
      </>
    );
  }
}
