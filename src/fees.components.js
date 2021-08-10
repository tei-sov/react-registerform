import React from "react";

function Fees() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        height: "30vh",
        width: "50vw",
        border: "0.1px solid grey",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h4 className="parp">
        Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian
        applicants or $1,200 for international applicants) *{" "}
      </h4>
      <input></input>
    </div>
  );
}

export default Fees;
