import React from "react";

export default function TextInput(props) {
  const { label, name, placeholder, handleChange } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        autoComplete="off"
        onBlur={handleChange ? handleChange.bind(this) : null}
      />
    </div>
  );
}
