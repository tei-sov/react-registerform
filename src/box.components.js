import React from "react";

function Box(props) {
  return (
    <div
      style={{
        margin: "auto",
        height: "25vh",
        width: "50vw",
        border: "0.1px solid grey",
        borderRadius: "5px",
        backgroundColor: "white",
      }}
    >
      <h3 className="parp">{props.title}</h3>
      <input classname="south" placeholder={props.placeholder} />
    </div>
  );
}

export default Box;
