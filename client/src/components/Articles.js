import React from "react";
import { Button, Form, Icon, Image } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Articles extends React.Component {
  state = {
    title: "",
    author: "",
    body: "",
    image: "",
    tags: "",
    eye: false,
    edit: false,
    redirect: false
  };

  componentDidMount() {
    if (this.props.p) {
      this.setState({
        title: this.props.p.title,
        author: this.props.p.author,
        body: this.props.p.body,
        image: this.props.p.image,
        tags: this.props.p.tags,
        edit: true
      });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, body, image, tags, edit } = this.state;
    if (edit) {
      axios
        .patch(`/api/articles/${this.props.p.id}`, {
          title: title,
          author: author,
          body: body,
          image: image,
          tags: tags
        })
        .then(res => {
          this.setState({ redirect: true });
        });
    } else {
      axios
        .post("/api/articles", {
          title: title,
          author: author,
          body: body,
          image: image,
          tags: tags
        })
        .then(res => {
          this.setState({ redirect: true });
        });
    }
  };

  redirect() {
    if (this.props.p && this.state.redirect) {
      return <Redirect to={`/articles/${this.props.p.id}`} />;
    } else if (this.state.redirect) {
      axios.get("/api/articles").then(res => {
        this.setState({ theID: res.data[res.data.length - 1].id });
      });
      console.log(this.state.theID);
      if (this.state.theID) {
        return <Redirect to={`/articles/${this.state.theID}`} />;
      }
    }
  }

  inseret(e) {
    if (e === "i") {
      this.setState({
        body:
          this.state.body +
          ' <Image src="Keeping the quotations, insert image link here"/>'
      });
    } else if (e === "b") {
      this.setState({
        body: this.state.body + " <br/>"
      });
    } else if (e === "l") {
      this.setState({
        body:
          this.state.body +
          ' <a href="Keeping the quotations, insert link here" >Type what you want the link to say here</a>'
      });
    }
  }

  format() {
    var boody = document.getElementById("body");
    if (boody) {
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = `<h4>${this.state.body}</h4>`;
      console.log(tempDiv);
      var boody = document.getElementById("body");
      boody.innerHTML = tempDiv.innerHTML;
    }
  }

  eye() {
    if (this.state.eye) {
      return (
        <div
          style={{
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
            <h1 style={{ color: "#002755" }}>{this.state.title}</h1>
            <p>by {this.state.author}</p>
            <Image
              style={{
                zIndex: "0",
                float: "left",
                height: "200px",
                width: "235px",
                paddingBottom: "10px",
                paddingRight: "10px"
              }}
              src={this.state.image}
            />
            <div id="body">Loading</div>
            {this.format()}
          </div>
        </div>
      );
    }
  }

  render() {
    const { title, author, body, image, tags } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Title"
            name="title"
            required
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Author"
            name="author"
            required
            value={author}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Tags"
            name="tags"
            value={tags}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Image"
            name="image"
            required
            value={image}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Body"
            name="body"
            required
            value={body}
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </Form>
        <Icon
          size="large"
          name="image"
          onClick={() => this.inseret("i")}
        ></Icon>
        <Icon
          size="large"
          name="level down alternate"
          onClick={() => this.inseret("b")}
        ></Icon>
        <Icon
          size="large"
          name="linkify"
          onClick={() => this.inseret("l")}
        ></Icon>
        <Icon
          size="large"
          name={this.state.eye ? "eye" : "eye slash"}
          onClick={() => this.setState({ eye: !this.state.eye })}
        ></Icon>
        {this.eye()} {this.redirect()}
      </div>
    );
  }
}
export default Articles;
