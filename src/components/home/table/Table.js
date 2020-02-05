import React, { Component } from "react";
import Row from "./Row";

import { uuid } from "uuidv4";

export default class Table extends Component {
  render() {
    const tableRows = this.props.columns.map(column => (
      <th key={uuid()} className="text-nowrap" value={column.class}>
        {column.title}
      </th>
    ));
    const bodyRows = this.props.bodyContent.map(contents => (
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
