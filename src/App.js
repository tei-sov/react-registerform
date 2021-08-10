import React, { Component } from "react";
import Navbar from "./navbar.components";
import Box from "./box.components";
import Phone from "./phone.components";
import Fees from "./fees.components";
import "./rip.css";
import Indicate from "./indicate.components";

class App extends Component {
  render() {
    return (
      <div>
        <br />

        <Navbar />

        <br />

        <Box title="Email" placeholder="Your Email " />

        <br />

        <Box title="Fullname" placeholder="Your Answer" />

        <br />

        <Box title="Phonenumber" />

        <br />

        <Phone placeholder="Your Answer" />

        <br />

        <Fees />

        <br />

        <Indicate />

        <br />

        <Box title="Location *" placeholder="Your Answer" />

        <br />

        <Box title="Current or previous school *" placeholder="Your Answer" />

        <br />

        <Box
          title="Why do you want to join Codetrain * "
          placeholder="Your Answer"
        />

        <br />

        <Box
          title="How did you hear about Codetrain ? * "
          placeholder="Your Answer"
        />

        <h4 className="under">
          A copy of your responses will be emailed to the address you provided.
        </h4>

        <br />

        <button type="text" className="woo">
          <h3 className="kk">Submit</h3>
        </button>

        <br />

        <button className="move"></button>
        <h4 className="fire">Page 1 of 1</h4>
        <br />

        <h5 className="under">Never submit passwords through Google Forms.</h5>

        <br />
      </div>
    );
  }
}

export default App;
