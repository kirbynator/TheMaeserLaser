import React from "react";
import { Icon, Container } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
class Carosal extends React.Component {
  state = { data: [], num: 0 };

  componentDidMount() {
    axios.get("/api/articles").then(res => {
      this.setState({
        data: [
          res.data[res.data.length - 1],
          res.data[res.data.length - 2],
          res.data[Math.floor(Math.random() * (res.data.length - 2))],
          res.data[Math.floor(Math.random() * (res.data.length - 2))],
          res.data[Math.floor(Math.random() * (res.data.length - 2))]
        ]
      });
    });
  }

  addNum() {
    if (this.state.num === 4) {
      this.setState({ num: 0 });
    } else {
      this.setState({ num: this.state.num + 1 });
    }
  }

  minNum() {
    if (this.state.num === 0) {
      this.setState({ num: 4 });
    } else {
      this.setState({ num: this.state.num - 1 });
    }
  }

  render() {
    if (this.state.data[this.state.num]) {
      return (
        <div
          class="Carosal"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "50%",
            height: "100%"
          }}
        >
          <Icon
            style={{ cursor: "pointer" }}
            onClick={() => this.minNum()}
            name="angle left"
            size="massive"
            inverted
            color="grey"
          />
          <Container
            as={Link}
            to={`/articles/${this.state.data[this.state.num].id}`}
            style={{
              backgroundImage: `url(${this.state.data[this.state.num].image})`,
              borderRadius: "15px",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "80%",
              height: "75%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "flex-end"
            }}
          >
            <h1
              style={{
                color: "#fff",
                padding: "5px",
                background: "rgb(42, 47, 59)",
                background: "rgba(42, 47, 59, 0.5)",
                width: "100%"
              }}
            >
              {this.state.data[this.state.num].title}
            </h1>
          </Container>
          <Icon
            style={{ cursor: "pointer" }}
            onClick={() => this.addNum()}
            name="angle right"
            size="massive"
            inverted
            color="grey"
          />
        </div>
      );
    } else {
      return "LOADING";
    }
  }
}
export default Carosal;
