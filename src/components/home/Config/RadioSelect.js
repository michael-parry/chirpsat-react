import React, { Component } from "react";

export default class RadioSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onOptionChange(e.target.value);
  }
  render() {
    const optionsList = this.props.options.map(option => (
      <option key={option.id} value={option.id} className="form-control">
        {option.radioName}
      </option>
    ));
    return (
      <div className="form-group">
        <label>{this.props.selectInfo.label}</label>
        <select
          className="form-control"
          id="radioInput"
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