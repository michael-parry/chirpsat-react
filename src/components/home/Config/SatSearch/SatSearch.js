import React, { Component } from "react";
import sats from "../../../../json/sats";
import SatItem from "./SatItem";
import SatItemActive from "./SatItemActive";

export default class SatSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: "",
      sats: sats,
      satsFound: sats
    };
  }

  handleSearch(e) {
    this.setState({ value: e.target.value });
    const query = e.target.value.toUpperCase();
    let searchList = this.state.sats.filter(sat =>
      sat.nickname.toUpperCase().includes(query)
    );
    this.setState({
      satsFound: searchList
    });
  }

  handleClick(id, e) {
    e.preventDefault();
    let satObject = this.state.sats.find(sat => sat.number === parseInt(id));
    satObject.isActive = !satObject.isActive;
    const newSatArray = [
      ...this.state.sats.filter(sat => sat.number !== parseInt(id)),
      satObject
    ].sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    this.setState({
      sats: newSatArray
    });
  }

  render() {
    const InactiveSats = this.state.satsFound
      .filter(sat => sat.isActive === false)
      .sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    let foundSatArray = InactiveSats.map(sat => (
      <SatItem
        number={sat.number}
        nickname={sat.nickname}
        isDisabled={sat.disabled}
        handleClick={this.handleClick}
      ></SatItem>
    ));
    if (foundSatArray.length === 0) {
      foundSatArray = (
        <div className="list-group-item list-group-item-action bg-light">
          None found..
        </div>
      );
    }
    const activeSats = this.state.sats.filter(sat => sat.isActive === true);
    const activeSatArray = activeSats.map(sat => (
      <SatItemActive
        number={sat.number}
        nickname={sat.nickname}
        isDisabled={sat.disabled}
        handleClick={this.handleClick}
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
            value={this.state.value}
            onChange={this.handleSearch}
          />
          {foundSatArray}
          {activeSatArray}
        </div>
      </div>
    );
  }
}
