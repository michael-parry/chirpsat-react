import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Select from "./Select";

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(option) {
    this.props.onOptionChange(option);
  }
  render() {
    const configStyle = {
      position: "fixed",
      top: "56px",
      left: 0,
      bottom: 0,
      overflowY: "auto"
    };
    return (
      <Container
        className="config col col-lg-2 col-sm-5 form-group mt-2 p-0"
        style={configStyle}
      >
        <Select
          Options={this.props.Options}
          onOptionChange={this.handleChange}
        ></Select>
      </Container>
    );
  }
}
