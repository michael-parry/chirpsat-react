import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";

import { updateRadio } from "../../../actions/configActions"; // redux action

import radios from "../../../json/radios";

class RadioSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.updateRadio(e.target.value);
  };

  render() {
    const optionsList = radios.map(radio => (
      <option key={uuid()} value={radio.id} className="form-control">
        {radio.name}
      </option>
    ));
    return (
      <div className="form-group">
        <label>{this.props.selectInfo.label}</label>
        <select
          className="form-control"
          id="radioInput"
          value={this.state.value}
          name={this.props.selectInfo.inputName}
          onChange={this.handleChange}
        >
          <option value="0">Choose..</option>
          {optionsList}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config.radio
});

export default connect(mapStateToProps, { updateRadio })(RadioSelect);
