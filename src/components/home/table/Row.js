import React from "react";

const uuidv4 = require("uuid/v4");

export default function Row(props) {
  const contentArray = Object.values(props.rowContents);
  const rowContent = contentArray.map(data => (
    <td key={uuidv4()} className="table-data text-nowrap">
      {data}
    </td>
  ));
  return <tr>{rowContent}</tr>;
}
