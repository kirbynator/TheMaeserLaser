import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Staff from "./Staff";
import Banner from "./BottomBanner.js";
import Creators from "./EditAuthors";

class Landing extends React.Component {
  render() {
    
    return (
      <div
        style={{
          height: `${window.innerHeight}px`,
          width: "100%",
          backgroundColor: "#002755"
        }}
      >
        {/* <div
          style={{
            position: "fixed",
            width: "100%",
            height: "50px",
            backgroundColor: "#6b7387",
            zIndex: "1"
          }}
        >
          <div
            style={{
              marginTop: "-11px",
              color: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <h3></h3>
            <h3>Home</h3> <h3>Mission Statement</h3>
            <h3>Team</h3>
            <h3>Articles</h3> <h3>Contact Us</h3>
            <h3></h3>
          </div>
        </div> */}
        <Home />
        <About />
        <Staff />
        <Creators />
        <Banner />
        <Contact />
      </div>
    );
  }
}
export default Landing;
