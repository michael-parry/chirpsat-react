import React, { Component } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default class Channels extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Channel</label>
        <label className="px-2">
          <span>
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip id={`channels-tooltip`}>Username</Tooltip>}
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="sm"
                className="text-secondary"
              ></FontAwesomeIcon>
            </OverlayTrigger>
          </span>
        </label>
        <div className="form-row">
          <div className="input-group col-12">
            <input
              type="text"
              className="form-control"
              id="options-channel-start"
              value={this.props.channelStart}
              placeholder="start"
              onChange={this.props.handleChange.bind(this)}
            />

            <input
              type="text"
              className="form-control"
              id="options-channel-range"
              placeholder="spread"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
