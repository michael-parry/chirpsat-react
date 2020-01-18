import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./Table";
import Config from "./Config";
import { Row } from "react-bootstrap/";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      SelectedOption: "1",
      Options: [
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
      ],
      TableRow: {
        columns: [
          "Number",
          "Name",
          "TX",
          "RX",
          "Tone",
          "Power",
          "Bandwidth",
          "Zone"
        ]
      }
    };
  }

  handleChange(option) {
    this.setState({ SelectedOption: option });
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Row className="m-0 position-relative">
          <Config
            Options={this.state.Options}
            onOptionChange={this.handleChange}
            Option={this.state.SelectedOption}
          />
          <Table
            TableRow={this.state.TableRow}
            SelectedOption={this.state.SelectedOption}
          />
        </Row>
      </>
    );
  }
}
