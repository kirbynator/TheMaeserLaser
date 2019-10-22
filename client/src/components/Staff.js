import React from "react";
import { Image } from "semantic-ui-react";
class Staff extends React.Component {
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
              backgroundColor: "#fff",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "84%",
              height: "92%",
              marginLeft: "8%",
              boxShadow: "10px 10px 5px #2a2f3b"
            }}
          >
            <h1>heack yahahehae</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Staff;
