import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import Row from "./Row";

import emptyChannel from "../../../json/emptyChannel";

class Table extends Component {
  render() {
    const { start, spread } = this.props.config.channel;
    const activeSatArray = this.props.config.sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    let isSpread = spread ? spread : 1;
    if (spread && spread % 2 === 0) {
      isSpread = spread - 1;
    }
    const bodyContent = [];
    let totalCount = 0;
    activeSatArray.forEach(sat => {
      for (let i = 0; i < isSpread; i++) {
        const spreadShift = (i - isSpread / 2 + (isSpread % 2) / 2) * 5e3;
        let newChannel = { ...emptyChannel[0] };
        newChannel["No."] = !start
          ? totalCount + 1
          : parseInt(start) + totalCount;
        newChannel["Channel Name"] = sat.nickname;
        if (isSpread === 1) {
          newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
          newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
        } else if (parseInt(sat.downlink) > parseInt(sat.uplink)) {
          newChannel["Receive Frequency"] = (
            (parseInt(sat.downlink) + spreadShift) *
            1e-6
          ).toFixed(3);
          newChannel["Transmit Frequency"] = (
            parseInt(sat.uplink) * 1e-6
          ).toFixed(3);
        } else if (sat.downlink < sat.uplink) {
          newChannel["Receive Frequency"] = (
            parseInt(sat.downlink) * 1e-6
          ).toFixed(3);
          newChannel["Transmit Frequency"] = (
            (parseInt(sat.uplink) + parseInt(spreadShift)) *
            1e-6
          ).toFixed(3);
        }
        newChannel["Transmit Power"] = this.props.config.power;
        newChannel["CTCSS/DCS Encode"] = sat.tone.toFixed(1);
        newChannel["Contact"] = this.props.config.contact;
        newChannel["Radio ID"] = this.props.config.callsign;
        bodyContent.push(newChannel);
        totalCount++;
      }
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
    let divContent = [];
    if (
      bodyContent.length === 0 ||
      Object.entries(this.props.config.radio) < 1
    ) {
      divContent = (
        <div className="d-flex bg-light h-100 align-items-center justify-content-center">
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
              Select a radio and a satellite to create your first channel.{" "}
            </p>
          </div>
        </div>
      );
    } else {
      divContent = (
        <table
          className="table table-bordered table-striped p-0  p-0 m-0"
          id="main-table"
        >
          <thead className="thead-dark sticky-top">
            <tr>{tableRows}</tr>
          </thead>
          <tbody>{bodyRows}</tbody>
        </table>
      );
    }
    return (
      <div
        className="col col-7 d-none d-sm-block offset-sm-5 offset-lg-2 col-lg-10 table-responsive p-0"
        style={{ height: "Calc(100vh - 56px)" }}
      >
        {divContent}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps)(Table);
