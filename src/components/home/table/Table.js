import React, { Component } from "react";
import { connect } from "react-redux";

import { uuid } from "uuidv4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import Row from "./Row";

import emptyChannel from "../../../json/emptyChannel";
import sats from "../../../json/sats.json"; // @TEMP dummy data, needs to be passed sats from redux as prop

class Table extends Component {
  render() {
    const activeSatArray = this.props.config.sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    const bodyContent = [];
    activeSatArray.forEach((sat, index) => {
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !this.props.config.channel.start
        ? index + 1
        : parseInt(this.props.config.channel.start) + index;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
      newChannel["Radio ID"] = this.props.config.callsign;
      bodyContent.push(newChannel);
    });

    const tableRows = this.props.config.radio.channelDetails ? (
      this.props.config.radio.channelDetails.map(column => (
        <th key={uuid()} className="text-nowrap" value={column.class}>
          {column.title}
        </th>
      ))
    ) : (
      <th className="text-nowrap" colSpan="50" style={{ height: "49px" }}></th>
    );
    let bodyRows = bodyContent.map(contents => (
      <Row key={uuid()} rowContents={contents}></Row>
    ));
    let emptyHelper = [];
    if (bodyContent.length === 0) {
      emptyHelper = (
        <div
          className="d-flex bg-light align-items-center justify-content-center"
          style={{ height: "calc(100% - 52px)" }}
        >
          <FontAwesomeIcon
            icon={faRocket}
            size="6x"
            color="rgb(108, 117, 125)"
            className="d-none d-lg-inline m-2"
          />
          <FontAwesomeIcon
            icon={faRocket}
            size="4x"
            color="rgb(108, 117, 125)"
            className="d-block d-lg-none m-2"
          />
          <div className="d-inline-flex flex-column">
            <h1
              className="ml-2 display-4 text-muted"
              style={{ userSelect: "none" }}
            >
              Get started!
            </h1>
            <p className="lead text-muted" style={{ userSelect: "none" }}>
              You haven't selected a satellite yet, select one to create a
              channel.{" "}
            </p>
          </div>
        </div>
      );
    }
    return (
      <div
        className="col col-7 d-none d-sm-block offset-sm-5 offset-lg-2 col-lg-10 table-responsive p-0"
        style={{ height: "Calc(100vh - 56px)" }}
      >
        <table className="table table-striped table-bordered p-0  p-0 m-0">
          <thead className="thead-dark sticky-top">
            <tr>{tableRows}</tr>
          </thead>
          <tbody>{bodyRows}</tbody>
        </table>
        {emptyHelper}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps)(Table);
