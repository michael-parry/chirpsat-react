import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePower } from "../../../actions/configActions";
const uuidv4 = require("uuid/v4");

class PowerSelect extends Component {
  render() {
    const optionsList =
      this.props.config.radio.power &&
      this.props.config.radio.power.map(power => (
        <option key={uuidv4()} value={power}>
          {power}
        </option>
      ));
    return (
      <div className="form-group">
        <label>Power</label>
        <div className="input-group">
          <select
            name="power-select"
            id="power-select"
            className="form-control"
            value={this.props.config.power}
            onChange={this.props.updatePower}
          >
            <option value="Choose..">Choose..</option>
            {optionsList}
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Watts</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  config: state.config
});
export default connect(mapStateToProps, { updatePower })(PowerSelect);
