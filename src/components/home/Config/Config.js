import React, { Component } from "react";
import Select from "./Select";
import SelectInput from "./SelectInput";

// Radio Options
const radios = [
  {
    name: {
      brand: "AnyTone",
      model: "878",
      fullName: "AnyTone 878"
    },
    id: 1,
    details: [
      {
        title: "Channel",
        class: "cellChannel"
      },
      {
        title: "Name",
        class: "cellName"
      },
      {
        title: "TX",
        class: "cellTx"
      },
      {
        title: "RX",
        class: "cellRx"
      }
    ]
  },
  {
    name: {
      brand: "Retevis",
      model: "RT 82",
      fullName: "Retevis RT82"
    },
    id: 2,
    details: [
      {
        title: "Channel",
        class: "cellChannel"
      },
      {
        title: "Name",
        class: "cellName"
      },
      {
        title: "TX",
        class: "cellTx"
      },
      {
        title: "RX",
        class: "cellRx"
      }
    ]
  }
];

const radioSelectInfo = {
  label: "Radio",
  id: "radioSelect"
};

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
    const Option = this.props.Option;
    return (
      <form
        className="col col-lg-2 col-sm-5 form-group mt-2 p-0"
        style={configStyle}
      >
        <Select
          Options={this.props.Options}
          onOptionChange={this.handleChange}
          SelectedOption={Option}
        ></Select>
        <SelectInput options={radios} selectInfo={radioSelectInfo} />
      </form>
    );
  }
}
