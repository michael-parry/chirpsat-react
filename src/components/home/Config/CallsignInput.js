import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCallsign } from "../../../actions/configActions";

class CallsignInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value.toUpperCase()
    });
  };
  render() {
    return (
      <div className="form-group">
        <label>Callsign</label>
        <input
          type="text"
          name="callsign"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={e => this.props.updateCallsign(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps, { updateCallsign })(CallsignInput);
