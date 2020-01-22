import React from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
class Author extends React.Component {
  state = {
    name: "",
    bio: "",
    imageone: "",
    imagetwo: "",
    title: "",
    blurb: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, bio, imageone, imagetwo, title, blurb } = this.state;
    axios.post("/api/profiles", {
      title: title,
      name: name,
      bio: bio,
      blurb: blurb,
      imageone: imageone,
      imagetwo: imagetwo,
      title: title
    });
  };

  render() {
    const { title, name, bio, imageone, imagetwo, blurb } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Title"
            name="title"
            required
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Face Image"
            name="imageone"
            required
            value={imageone}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Profile Image"
            name="imagetwo"
            value={imagetwo}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Blurb"
            name="blurb"
            required
            value={blurb}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Bio"
            name="bio"
            required
            value={bio}
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default Author;
