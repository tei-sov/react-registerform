import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        width: "50vw",
        border: "0.1px solid grey",
        borderRadius: "5px",
        backgroundColor: "white",
        borderTop: "10px solid rgb(50,117,243)",
      }}
    >
      <h1 className="parpi">CodeTrain Registration Form</h1>

      <h5 className="koo">
        This form is the first step to register for Codetrain's program starting
        on 25th July 2020. Our admissions team will reach out to you after
        successfully submitting your form.
      </h5>
      <h5 className="parp">* Required</h5>
    </div>
  );
}

export default Navbar;
