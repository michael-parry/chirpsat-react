import React, { Component } from "react";

import { connect } from "react-redux";
import { updateChannel } from "../../../actions/configActions";

import HelpModal from "./HelpModal";

// modal body prop
const body = (
  <>
    <p>
      <span className="font-weight-bold bg-secondary text-white rounded p-1">
        Start
      </span>{" "}
      determines which channel number the generated channels will begin with.
    </p>{" "}
    <p>
      <span className="font-weight-bold bg-secondary text-white rounded p-1">
        Spread
      </span>{" "}
      defines how many channels you would like to create for each satellite.
    </p>
  </>
);

class Channels extends Component {
  handleChange = e => {
    if (e.target.value === "" || Number(e.target.value)) {
      this.props.updateChannel(e);
    }
  };
  render() {
    const { channel } = this.props;
    return (
      <div className="form-group">
        <label>
          Channels
          <HelpModal body={body} title="Channels" />
        </label>
        <div className="form-row">
          <div className="input-group col-12">
            <input
              type="text"
              className="form-control"
              id="options-channel-start"
              placeholder="start"
              autoComplete="off"
              value={channel.start}
              onChange={this.handleChange}
            />

            <input
              type="text"
              className="form-control"
              id="options-channel-spread"
              placeholder="spread"
              autoComplete="off"
              value={channel.spread}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channel: state.config.channel
});

export default connect(mapStateToProps, { updateChannel })(Channels);
