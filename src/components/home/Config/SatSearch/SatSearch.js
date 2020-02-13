import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSatellites } from "../../../../actions/configActions";

import { uuid } from "uuidv4";

import SatItem from "./SatItem";
import SatItemActive from "./SatItemActive";

import sats from "../../../../json/sats.json";

class SatSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sats: sats,
      satsFound: sats
    };
  }
  handleSatSearch = e => {
    this.setState({ value: e.target.value });
    const query = e.target.value.toUpperCase();
    let searchList = this.state.sats.filter(sat =>
      sat.nickname.toUpperCase().includes(query)
    );
    this.setState({
      satsFound: searchList
    });
  };

  handleSatClick = (id, e) => {
    e.preventDefault();
    let satObject = this.props.config.sats.find(
      sat => sat.number === parseInt(id)
    );
    satObject.isActive = !satObject.isActive;
    const newSatArray = [
      ...sats.filter(sat => sat.number !== parseInt(id)),
      satObject,
      {}
    ].sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    this.props.updateSatellites(newSatArray);
  };

  render() {
    const InactiveSats = this.state.satsFound
      .filter(sat => sat.isActive === false)
      .sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    let foundSatArray = InactiveSats.map(sat => (
      <SatItem
        key={uuid()}
        number={sat.number}
        nickname={sat.nickname}
        isDisabled={sat.disabled}
        handleSatClick={this.handleSatClick}
      ></SatItem>
    ));
    if (foundSatArray.filter(sat => !sat.isActive).length === 0) {
      foundSatArray = (
        <div className="list-group-item list-group-item-action bg-light">
          None found..
        </div>
      );
    }
    const activeSatArray = this.state.sats
      .filter(sat => sat.isActive === true)
      .map(sat => (
        <SatItemActive
          key={uuid()}
          number={sat.number}
          nickname={sat.nickname}
          isDisabled={sat.disabled}
          handleSatClick={this.handleSatClick.bind(this)}
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
            onChange={this.handleSatSearch.bind(this)}
          />
          {foundSatArray}
          {activeSatArray}
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  config: state.config
});

export default connect(MapStateToProps, { updateSatellites })(SatSearch);
