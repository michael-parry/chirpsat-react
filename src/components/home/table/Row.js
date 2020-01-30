import React from "react";

export default function Row(props) {
  const contentArray = Object.values(props.rowContents);
  const rowContent = contentArray.map(data => (
    <td className="table-data text-nowrap">{data}</td>
  ));
  return <tr key={props["No."]}>{rowContent}</tr>;
}
