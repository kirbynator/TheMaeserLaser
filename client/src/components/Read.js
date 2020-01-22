import React from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";
import Banner from "./BottomBanner";
import Contact from "./Contact";
import { Link, } from "react-router-dom";
class Read extends React.Component {
  state = { data: {} };
  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params.id}`).then(res => {
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
              boxShadow: "10px 10px 5px #2a2f3b"
            }}
          >
            <h1 style={{ color: "#002755" }}>{this.state.data.title}</h1>
            <p>by {this.state.data.author}</p>
            <Image
              style={{
                zIndex: "0",
                float: "left",
                height: "200px",
                width: "235px",
                paddingBottom: "10px",
                paddingRight: "10px"
              }}
              src={this.state.data.image}
            />
            <div id="body">Loading</div>
            {this.format()}
          </div>
        </div>
        <Banner></Banner>
        <Contact></Contact>
      </div>
    );
  }
}
export default Read;
