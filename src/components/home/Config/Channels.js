import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export default class Channels extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="form-group">
        <label>
          Channels
          <a
            variant="white"
            size="sm"
            className="m-1 p-1"
            href="#0"
            onClick={this.handleShow}
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="xs"
              className="text-secondary"
            ></FontAwesomeIcon>
          </a>
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Channels</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <span class="font-weight-bold bg-secondary text-white rounded p-1">
                  Start
                </span>{" "}
                determines which channel number the generated channels will
                begin with.
              </p>{" "}
              <p>
                <span class="font-weight-bold bg-secondary text-white rounded p-1">
                  Spread
                </span>{" "}
                defines how many channels you would like to create for each
                satellite.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
