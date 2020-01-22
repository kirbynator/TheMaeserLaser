import React from "react";
import Carosal from "./Carosal";
import { Icon, Image, Form, Container } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
class Home extends React.Component {
  state = { search: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    axios.get(`/api/search/${search}`).then(res => {
      this.setState({ results: res.data });
    });
  };

  results() {
    if (this.state.results) {
      return (
        <div style={{ marginLeft: "8%" }}>
          {this.state.results.map(r => (
            <Container
              as={Link}
              to={`/articles/${r.id}`}
              style={{
                cursor: "pointer",
                color: "#002755",
                background: "#fff",
                border: "solid",
                borderColor: "gray",
                borderWidth: "thin"
              }}
              key={r.id}
            >
              {r.title}
              {" by "}
              {r.author}
            </Container>
          ))}
        </div>
      );
    }
  }

  redirect(v) {
    if (v === 1) {
      window.open("https://www.facebook.com/MaeserLaser/", "_blank");
    } else if (v === 2) {
      window.open("https://www.twitter.com/maeserlaser", "_blank");
    }
  }

  render() {
    return (
      <div
        style={{
          height: `${window.innerHeight}px`,
          width: "100%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ paddingTop: "5%", width: "100%", height: "70%" }}>
            <Image
              style={{ zIndex: "0" }}
              src="https://i.imgur.com/5EfBiKU.png"
            />
          </div>
          <div style={{ marginTop: "3%", marginLeft: "8%", display: "flex" }}>
            <Icon
              style={{ cursor: "pointer" }}
              onClick={() => this.redirect(1)}
              inverted
              color="grey"
              name="facebook square"
              size="huge"
            />
            <Icon
              style={{ cursor: "pointer" }}
              onClick={() => this.redirect(2)}
              inverted
              color="grey"
              name="twitter square"
              size="huge"
            />
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                style={{
                  height: "52px",
                  width: "220%",
                  paddingTop: "4px",
                  marginLeft: "7px"
                }}
                name="search"
                required
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="Search"
              />
            </Form>
          </div>
          {this.results()}
        </div>
        <Carosal></Carosal>
      </div>
    );
  }
}
export default Home;
