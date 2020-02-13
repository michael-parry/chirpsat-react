import React, { Component } from "react";

import Row from "react-bootstrap/Row";

import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";

// react-bootstrap components

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Row className="row m-0">
          <Config />
          <Table />
        </Row>
      </>
    );
  }
}
