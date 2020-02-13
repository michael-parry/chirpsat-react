import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

export default class HelpModal extends Component {
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
    const { body, title } = this.props;
    return (
      <>
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
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
