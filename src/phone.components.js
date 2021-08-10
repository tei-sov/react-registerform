import React from "react";

function Phone(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        height: "25vh",
        width: "50vw",
        border: "0.1px solid grey",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h3 className="parp">Phone Number *</h3>

      <h5 className="koo">
        Phone number of someone we can reach out to in case your phone is off or
        not reachable. Eg, your parent, guardian or sibling, or spouse
      </h5>
      <input placeholder={props.placeholder} />
    </div>
  );
}

export default Phone;
