import React, { Component } from "react";

export default class Table extends Component {
  render() {
    const tableRows = this.props.TableRow.columns.map(column => (
      <th value={column}>{column}</th>
    ));
    const SelectedOption = this.props.SelectedOption;
    console.log(this.props);
    return (
      <table className="col col-7 col-lg-10 table table-responsive-lg table-striped table-bordered p-0 ml-auto overflow-auto">
        <thead className="thead-dark">{tableRows}</thead>
        <tr>{SelectedOption}</tr>
      </table>
    );
  }
}
