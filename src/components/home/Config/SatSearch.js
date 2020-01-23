import React, { Component } from "react";
import sats from "../../../json/sats";

export default class SatSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      value: "",
      satFound: sats
    };
  }

  handleSearch(e) {
    this.setState({ value: e.target.value });
    let query = e.target.value.toUpperCase();
    let searchList = sats.filter(sat => sat.nickname.includes(query));
    if (searchList.length == 0) {
      searchList.push({ nickname: "None found..." });
    }
    this.setState({ satFound: searchList });
  }
  render() {
    const satList = this.state.satFound.map(sat => (
      <a href="#0" className="list-group-item list-group-item-action bg-light">
        {sat.nickname}
      </a>
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
          {satList}
        </div>
      </div>
    );
  }
}
