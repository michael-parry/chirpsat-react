import React, { Component } from "react";

import { connect } from "react-redux";

import { uuid } from "uuidv4";

import Row from "./Row";

import emptyChannel from "../../../json/emptyChannel";
import sats from "../../../json/sats.json"; // @TEMP dummy data, needs to be passed sats from redux as prop

class Table extends Component {
  render() {
    const activeSatArray = sats
      .filter(sat => sat.isActive === true)
      .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
    const bodyContent = [];
    activeSatArray.forEach((sat, index) => {
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !this.props.config.channel.start
        ? index + 1
        : parseInt(this.state.channel.start) + index;
      newChannel["Channel Name"] = sat.nickname;
      newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
      newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
      newChannel["Contact"] = this.props.config.callsign;
      bodyContent.push(newChannel);
    });
    const tableRows = this.props.columns.map(column => (
      <th key={uuid()} className="text-nowrap" value={column.class}>
        {column.title}
      </th>
    ));
    const bodyRows = bodyContent.map(contents => (
      <Row key={uuid()} rowContents={contents}></Row>
    ));

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
      </div>
    );
  }
}
const mapStateToProps = state => ({
  config: state.config
});

export default connect(mapStateToProps)(Table);
