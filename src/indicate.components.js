import React from "react";

function Indicate() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        height: "30vh",
        width: "50vw",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h4 className="parp">Please indicate who is going to pay your fees * </h4>
      <input type="radio" className="radio"></input>
      <label htmlFor="name">Yourself</label>

      <input type="radio" className="radio"></input>
      <label htmlFor="name">Parent/Sponsor</label>

      <input type="radio"></input>
      <label htmlFor="name">Organisation</label>
    </div>
  );
}

export default Indicate;
