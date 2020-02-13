import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClose = e => {
    this.setState({ show: false });
  };
  handleShow = e => {
    e.preventDefault();
    this.setState({ show: true });
  };
  render() {
    return (
      <form
        className="form-group col mb-2 col-sm-5 mb-sm-0 col-lg-2  flex-d justify-content-center align-items-center"
        id="sheet-update-form"
      >
        <button
          className="btn btn-primary btn-large btn-block"
          id="sheet-update-button"
          onClick={this.handleShow}
        >
          Export
        </button>
        <Modal
          show={this.state.show}
          size="sm"
          onHide={this.handleClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>All finished?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Download your channels and import the file into your{" "}
              <abbr title="customer programming software">CPS</abbr> to write
              them to your radio.
            </p>
            <button
              class="btn btn-success btn-block"
              onClick={this.handleClose}
            >
              Download
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}
