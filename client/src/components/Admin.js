import React from "react";
import Articles from "./Articles";
import EditArticles from "./EditArticles";
import Profiles from "./Authors";
import EditProfiles from "./EditAuthors";
import { Button, Form, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
class Admin extends React.Component {
  state = {
    name: "",
    password: "",
    page: "",
    article: "no",
    erticle: "no",
    profiln: "no",
    profile: "no"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, password } = this.state;
    if (name === "admin" && password === "password") {
      this.setState({ page: "yes" });
    }
  };

  toggleEditProfileOff() {
    this.setState({ profile: "no" });
  }

  toggleNewProfileOff() {
    this.setState({ profiln: "no" });
  }

  toggleEditArticleOff() {
    this.setState({ erticle: "no" });
  }

  toggleNewArticleOff() {
    this.setState({ article: "no" });
  }

  toggleEditProfileOn() {
    if (this.state.profile === "yes") {
      return (
        <div>
          <EditProfiles edit={true} />
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => this.toggleEditProfileOff()}
          >
            Cancel
          </Button>
        </div>
      );
    } else {
      return (
        <Button>
          <h1
            onClick={() => this.setState({ profile: "yes" })}
            style={{ color: "#6b7387", fontWeight: "115" }}
          >
            Edit Profile
          </h1>
        </Button>
      );
    }
  }

  toggleNewProfileOn() {
    if (this.state.profiln === "yes") {
      return (
        <div>
          <Profiles />
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => this.toggleNewProfileOff()}
          >
            Cancel
          </Button>
        </div>
      );
    } else {
      return (
        <Button>
          <h1
            onClick={() => this.setState({ profiln: "yes" })}
            style={{ color: "#6b7387", fontWeight: "115" }}
          >
            New Profile
          </h1>
        </Button>
      );
    }
  }

  toggleEditArticleOn() {
    if (this.state.erticle === "yes") {
      return (
        <div>
          <EditArticles />
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => this.toggleEditArticleOff()}
          >
            Cancel
          </Button>
        </div>
      );
    } else {
      return (
        <Button>
          <h1
            onClick={() => this.setState({ erticle: "yes" })}
            style={{ color: "#6b7387", fontWeight: "115" }}
          >
            Edit Articles
          </h1>
        </Button>
      );
    }
  }

  toggleNewArticleOn() {
    if (this.state.article === "yes") {
      return (
        <div>
          <Articles />
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => this.toggleNewArticleOff()}
          >
            Cancel
          </Button>
        </div>
      );
    } else {
      return (
        <Button>
          <h1
            onClick={() => this.setState({ article: "yes" })}
            style={{ color: "#6b7387", fontWeight: "115" }}
          >
            New Article
          </h1>
        </Button>
      );
    }
  }

  render() {
    const { name, password, page } = this.state;
    if (page === "") {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
            type="password"
          />
          <Button>Log-in</Button>
        </Form>
      );
    } else if (page === "yes") {
      return (
        <div>
          <div style={{ backgroundColor: "#002755", height: "80px" }}>
            <Image
              as={Link}
              to="/"
              style={{ width: "100px" }}
              src="https://i.imgur.com/5EfBiKU.png"
            />
          </div>
          <div
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "3%"
            }}
          >
            <div class="ui divider"></div>
            {this.toggleNewArticleOn()}
            <div class="ui divider"></div>
            {this.toggleEditArticleOn()}
            <div class="ui divider"></div>
            {this.toggleNewProfileOn()}
            <div class="ui divider"></div>
            {this.toggleEditProfileOn()}
            <div class="ui divider"></div>
          </div>
        </div>
      );
    }
  }
}
export default Admin;
