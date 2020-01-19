import React, { Component } from "react";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onOptionChange(e.target.value);
  }
  render() {
    const optionsList = this.props.Options.map(choice => (
      <option value={choice.id} className="form-control">
        {choice.title}
      </option>
    ));
    const Option = this.props.SelectedOption;
    return (
      <div className="form-group">
        <select
          className="form-control"
          value={Option}
          onChange={this.handleChange}
        >
          {optionsList}
        </select>
      </div>
    );
  }
}
