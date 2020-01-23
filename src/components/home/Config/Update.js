import React from "react";

export default function Update() {
  const style = {
    position: "fixed",
    bottom: 0
  };
  return (
    <form
      className="form-group col col-lg-2 col-sm-5 flex-d justify-content-center align-items-center mx-0 px-0 mb-0"
      style={style}
    >
      <button
        className="btn btn-primary btn-large btn-block mx-0"
        id="sheetUpdate"
        style={{ borderRadius: "0" }}
      >
        Update
      </button>
    </form>
  );
}
