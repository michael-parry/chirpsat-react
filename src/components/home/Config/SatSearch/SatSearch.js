import React, { Component } from "react";
import SatItem from "./SatItem";
import SatItemActive from "./SatItemActive";

const uuidv4 = require("uuid/v4");

export default class SatSearch extends Component {
  render() {
    const InactiveSats = this.props.satsFound
      .filter(sat => sat.isActive === false)
      .sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    let foundSatArray = InactiveSats.map(sat => (
      <SatItem
        key={uuidv4()}
        number={sat.number}
        nickname={sat.nickname}
        isDisabled={sat.disabled}
        handleSatClick={this.props.handleSatClick}
      ></SatItem>
    ));
    if (foundSatArray.filter(sat => !sat.isActive).length === 0) {
      foundSatArray = (
        <div className="list-group-item list-group-item-action bg-light">
          None found..
        </div>
      );
    }
    const activeSatArray = this.props.sats
      .filter(sat => sat.isActive === true)
      .map(sat => (
        <SatItemActive
          key={uuidv4()}
          number={sat.number}
          nickname={sat.nickname}
          isDisabled={sat.disabled}
          handleSatClick={this.props.handleSatClick.bind(this)}
        ></SatItemActive>
      ));
    return (
      <div className="form-group">
        <label>Satellites</label>
        <div className="list-group" id="satListGroup">
          <input
            type="search"
            name="sat-search"
            className="list-group-item"
            placeholder="Search.."
            value={this.props.value}
            onChange={this.props.handleSatSearch.bind(this)}
          />
          {foundSatArray}
          {activeSatArray}
        </div>
      </div>
    );
  }
}
