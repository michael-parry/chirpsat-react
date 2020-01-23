import React, { Component } from "react";

export default class Tone extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Tone</label>
        <div className="input-group">
          <select
            name="tone"
            className="form-control"
            id="option-tone"
            aria-label="Tone"
            aria-describedby="tone-addon"
          >
            <option value="choose">Choose..</option>
            <option value="67.0">67.0</option>
            <option value="71.9">71.9</option>
            <option value="74.4">74.4</option>
            <option value="77.0">77.0</option>
            <option value="79.7">79.7</option>
            <option value="82.5">82.5</option>
            <option value="85.4">85.4</option>
            <option value="88.5">88.5</option>
            <option value="91.5">91.5</option>
            <option value="94.8">94.8</option>
            <option value="97.4">97.4</option>
            <option value="100.0">100.0</option>
            <option value="103.5">103.5</option>
            <option value="107.2">107.2</option>
            <option value="110.9">110.9</option>
            <option value="114.8">114.8</option>
            <option value="118.8">118.8</option>
            <option value="123.0">123.0</option>
            <option value="127.3">127.3</option>
            <option value="131.8">131.8</option>
            <option value="136.5">136.5</option>
            <option value="141.3">141.3</option>
            <option value="146.2">146.2</option>
            <option value="151.4">151.4</option>
            <option value="156.7">156.7</option>
            <option value="162.2">162.2</option>
            <option value="167.9">167.9</option>
            <option value="173.8">173.8</option>
            <option value="179.9">179.9</option>
            <option value="186.2">186.2</option>
            <option value="192.8">192.8</option>
            <option value="203.5">203.5</option>
            <option value="210.7">210.7</option>
            <option value="218.1">218.1</option>
            <option value="225.7">225.7</option>
            <option value="233.6">233.6</option>
            <option value="241.8">241.8</option>
            <option value="250.3">250.3</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text">Hz</label>
          </div>
        </div>
      </div>
    );
  }
}
