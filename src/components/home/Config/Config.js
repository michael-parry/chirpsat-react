import React, { Component } from "react";
import SelectInput from "./SelectInput";

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(option) {
    this.props.onOptionChange(option);
  }
  render() {
    // Config style
    const configStyle = {
      position: "fixed",
      top: "56px",
      left: 0,
      bottom: 0,
      overflowY: "auto"
    };

    return (
      <form
        className="col col-lg-2 col-sm-5 form-group mt-2 p-0"
        style={configStyle}
      >
        <SelectInput
          options={this.props.radios}
          selectInfo={{ label: "Radio", inputName: "radioInput" }}
          onOptionChange={this.handleChange}
        />
      </form>
    );
  }
}
