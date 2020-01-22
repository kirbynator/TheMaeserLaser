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
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "#002755"
            }}
          >
            <h1 style={{ padding: "15px", fontSize: "75px" }}>Our Mission</h1>
            <h1 style={{ padding: "15px" }}>
              We strive to:
              <ul>
                <li>
                  Provide insightful coverage and commentary regarding campus
                  and local news that is neglected by other publications;
                  <br />
                </li>
                <br />
                <li>
                  Provide conservative viewpoints to counterbalance the liberal
                  bias present in said other publications;
                  <br />
                </li>
                <br />
                <li>
                  Unite the student body by including funny, witty, or even
                  snarky articles;
                  <br />
                </li>
                <br />
                <li>
                  Support the teachings of The Church of Jesus Christ of
                  Latter-day Saints.
                  <br />
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Staff;
