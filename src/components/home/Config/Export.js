import React from "react";

export default function Export() {
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <form
      className="form-group col mb-2 col-sm-5 mb-sm-0 col-lg-2  flex-d justify-content-center align-items-center"
      id="sheet-update-form"
    >
      <button
        className="btn btn-primary btn-large btn-block"
        id="sheet-update-button"
        onClick={handleClick}
      >
        Export
      </button>
    </form>
  );
}
