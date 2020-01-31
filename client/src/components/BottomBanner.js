import React from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
class Banner extends React.Component {
  state = { data: [], num: 0 };

  componentDidMount() {
    axios.get("/api/articles").then(res => {
      this.setState({
        data: [...res.data],
        num: res.data.length - 1,
        num1: Math.floor(Math.random() * (res.data.length - 1)),
        num2: Math.floor(Math.random() * (res.data.length - 1)),
        num3: Math.floor(Math.random() * (res.data.length - 1)),
        num4: Math.floor(Math.random() * (res.data.length - 1))
      });
    });
  }

  fith() {
    if (window.innerWidth > 1500) {
      return (
        <Container
          onClick={() =>
            window.location.assign(
              `/articles/${this.state.data[this.state.num4].id}`
            )
          }
          style={{
            cursor: "pointer",
            backgroundImage: `url(${this.state.data[this.state.num4].image})`,
            borderRadius: "15px",
            backgroundColor: "#000",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            width: "260px",
            height: "80%",
            boxShadow: "10px 10px 5px #2a2f3b",
            display: "flex",
            alignItems: "flex-end",
            padding: "2px"
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
            {this.state.data[this.state.num4].title}
          </h1>
        </Container>
      );
    }
  }

  render() {
    if(window.innerWidth > 1000){
    if (this.state.data[this.state.num1]) {
      return (
        <div
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "200px",
            backgroundColor: "#002755"
          }}
        >
          <Container
            onClick={() =>
              window.location.assign(
                `/articles/${this.state.data[this.state.num].id}`
              )
            }
            style={{
              cursor: "pointer",
              backgroundImage: `url(${this.state.data[this.state.num].image})`,
              borderRadius: "15px",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "260px",
              height: "80%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "flex-end",
              padding: "2px"
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
          <Container
            onClick={() =>
              window.location.assign(
                `/articles/${this.state.data[this.state.num1].id}`
              )
            }
            style={{
              cursor: "pointer",
              backgroundImage: `url(${this.state.data[this.state.num1].image})`,
              borderRadius: "15px",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "260px",
              height: "80%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "flex-end",
              padding: "2px"
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
              {this.state.data[this.state.num1].title}
            </h1>
          </Container>
          <Container
            onClick={() =>
              window.location.assign(
                `/articles/${this.state.data[this.state.num2].id}`
              )
            }
            style={{
              cursor: "pointer",
              backgroundImage: `url(${this.state.data[this.state.num2].image})`,
              borderRadius: "15px",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "260px",
              height: "80%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "flex-end",
              padding: "2px"
            }}
          >
            <h1
              style={{
                cursor: "pointer",
                color: "#fff",
                padding: "5px",
                background: "rgb(42, 47, 59)",
                background: "rgba(42, 47, 59, 0.5)",
                width: "100%"
              }}
            >
              {this.state.data[this.state.num2].title}
            </h1>
          </Container>
          <Container
            onClick={() =>
              window.location.assign(
                `/articles/${this.state.data[this.state.num3].id}`
              )
            }
            style={{
              cursor: "pointer",
              backgroundImage: `url(${this.state.data[this.state.num3].image})`,
              borderRadius: "15px",
              backgroundColor: "#000",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              width: "260px",
              height: "80%",
              boxShadow: "10px 10px 5px #2a2f3b",
              display: "flex",
              alignItems: "flex-end",
              padding: "2px"
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
              {this.state.data[this.state.num3].title}
            </h1>
          </Container>
          {this.fith()}
        </div>
      );
    } else {
      return "LOADING";
    }
  }else{
    if (this.state.data[this.state.num1]) {
    return( <div
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "200px",
        backgroundColor: "#002755"
      }}
    >
      <Container
        onClick={() =>
          window.location.assign(
            `/articles/${this.state.data[this.state.num].id}`
          )
        }
        style={{
          cursor: "pointer",
          backgroundImage: `url(${this.state.data[this.state.num].image})`,
          borderRadius: "15px",
          backgroundColor: "#000",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: `100%`,
          height: "80%",
          boxShadow: "10px 10px 5px #2a2f3b",
          display: "flex",
          alignItems: "flex-end",
          padding: "2px"
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
      <Container
        onClick={() =>
          window.location.assign(
            `/articles/${this.state.data[this.state.num1].id}`
          )
        }
        style={{
          cursor: "pointer",
          backgroundImage: `url(${this.state.data[this.state.num1].image})`,
          borderRadius: "15px",
          backgroundColor: "#000",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: `${window.innerWidth}px`,
          height: "80%",
          boxShadow: "10px 10px 5px #2a2f3b",
          display: "flex",
          alignItems: "flex-end",
          padding: "2px"
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
          {this.state.data[this.state.num1].title}
        </h1>
      </Container>
      </div>)
  }else {
    return "LOADING";
  }}}
}

export default Banner;
