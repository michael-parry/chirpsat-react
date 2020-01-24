import React, { Component } from "react";
import Row from "./Row";

export default class Table extends Component {
  render() {
    const tableRows = this.props.columns.map(column => (
      <th className="text-nowrap" value={column.class}>
        {column.title}
      </th>
    ));

    return (
      <div
        className="col col-7 flex-frow-1 col-lg-10 table-responsive p-0 offset-2"
        style={{ height: "Calc(100vh - 56px)" }}
      >
        <table className="table table-striped table-bordered p-0  p-0 m-0">
          <thead className="thead-dark">
            <tr>{tableRows}</tr>
          </thead>
          <tbody>
            <Row rowContents={this.props.rowContents} />
          </tbody>
        </table>
      </div>
    );
  }
}
