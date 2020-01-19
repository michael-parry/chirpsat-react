import React from "react";

export default function Row(props) {
  const row = props.rowContents.map(cell => <td>{cell}</td>);
  return <tr>{row}</tr>;
}
