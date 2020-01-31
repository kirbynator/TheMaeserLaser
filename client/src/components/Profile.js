import React from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";
import Banner from "./BottomBanner";
import Contact from "./Contact";
import { Link,} from "react-router-dom";
class Profile extends React.Component {
  state = { data: {} };
  componentDidMount() {
    axios.get(`/api/profiles/${this.props.match.params.id}`).then(res => {
      this.setState({ data: res.data });
    });
  }

  format = () => {
    var boody = document.getElementById("body");
    if (boody) {
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = `<h4>${this.state.data.body}</h4>`;
      console.log(tempDiv);
      var boody = document.getElementById("body");
      boody.innerHTML = tempDiv.innerHTML;
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#002755",
          height: `100%`,
          width: "100%"
        }}
      >
        <div style={{ width: "100%", background: "#6B7387" }}>
          <Image
            as={Link}
            to="/"
            style={{ width: "100px" }}
            src="https://i.imgur.com/5EfBiKU.png"
          />
        </div>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#002755",
            paddingBottom: "30px"
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "84%",
              height: "92%",
              padding: "15px",
              marginLeft: "8%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "space-around"
            }}
          >
            <div
              style={{
                width: "50%"
              }}
            >
              <h1 style={{ color: "#002755" }}>{this.state.data.name}</h1>
              <p>{this.state.data.title}</p>
              <h4>{this.state.data.bio}</h4>
            </div>
            <div
              style={{
                width: "50%"
              }}
            >
              <Image
                style={{
                  zIndex: "0",
                  padding: "10px",
                  width: "100%"
                }}
                src={
                  this.state.data.imagetwo
                    ? this.state.data.imagetwo
                    : this.state.data.imageone
                }
              />
            </div>
          </div>
        </div>
        <Banner></Banner>
        <Contact></Contact>
      </div>
    );
  }
}
export default Profile;
