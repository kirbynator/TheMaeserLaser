import React from "react";
import { Image } from "semantic-ui-react";
class About extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#6b7387"
          }}
        ></div>
        <div
          style={{
            height: `${window.innerHeight}px`,
            width: "100%",
            backgroundColor: "#6b7387"
          }}
        >
          <div
            style={{
              backgroundImage: "url(" + "https://i.imgur.com/0GntaD8.jpg" + ")",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "84%",
              height: "92%",
              marginLeft: "8%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <div
              style={{
                color: "#fff",
                padding: "5px",
                background: "rgb(42, 47, 59)",
                background: "rgba(42, 47, 59, 0.5)",
                width: window.innerWidth > 1000 ? "30%" : "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h1>Why "Maeser?"</h1>
              <h2 style={{ textAlign: "center" }}>
                Built in 1911 and still standing strong, the Maeser building is
                an key fixture of the BYU campus. Its sturdy construction and
                timeless, classical design are a fitting symbol for the ideals
                The Maeser Laser upholds and defends. While the building is
                named for Karl G. Maeser, The Maser Laser does not claim to be
                directly associated with the late Mr. Maeser and derives its
                name solely from the building on BYU campus.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
