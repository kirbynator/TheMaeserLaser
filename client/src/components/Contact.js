import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: "25px",
          width: "100%",
          backgroundColor: "rgba(42, 47, 59, 0.5)",
          color: "#fff"
        }}
      >
        <h4 style={{ padding: "15px", paddingBottom: "5px" }}>
          Questions, Comments, want to write for us? Get in touch and we'll get
          back to you as soon as we can. We look forward to hearing from you!{" "}
          <a href="mailto:maeserlaserbyu@gmail.com" subect="Query">
            maeserlaserbyu@gmail.com
          </a>
        </h4>
        <h5 style={{ padding: "15px", paddingTop: "0px" }}>
          Website made by Zach Kirby:{" "}
          <a href="mynameiszacharykirby.com">mynameiszacharykirby.com</a>
        </h5>
      </div>
    );
  }
}
export default Contact;
