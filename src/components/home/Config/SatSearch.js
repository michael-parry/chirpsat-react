import React, { Component } from "react";

export default class SatSearch extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Satellites</label>
        <div className="list-group" id="satListGroup">
          <input
            type="search"
            name="sat-search"
            className="list-group-item"
            placeholder="Search.."
          />
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light"
          >
            AO-92
          </a>
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light"
          >
            AO-91
          </a>
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light"
          >
            SO-50
          </a>
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light"
          >
            PO-101
          </a>
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light"
          >
            CAS-3H
          </a>
          <a
            href="#0"
            className="list-group-item list-group-item-action bg-light disabled"
          >
            AO-95
          </a>
        </div>
      </div>
    );
  }
}
