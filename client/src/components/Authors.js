import React from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Author extends React.Component {
  state = {
    name: "",
    bio: "",
    imageone: "",
    imagetwo: "",
    title: "",
    blurb: "",
    redirect: false
  };

  redirect() {
    if (this.props.p && this.state.redirect) {
      return <Redirect to={`/profiles/${this.props.p.id}`} />;
    } else if (this.state.redirect) {
      axios.get("/api/profiles").then(res => {
        this.setState({ theID: res.data[res.data.length - 1].id });
      });
      console.log(this.state.theID);
      if (this.state.theID) {
        return <Redirect to={`/profiles/${this.state.theID}`} />;
      }
    }
  }

  componentDidMount() {
    if (this.props.p) {
      this.setState({
        name: this.props.p.name,
        bio: this.props.p.bio,
        blurb: this.props.p.blurb,
        title: this.props.p.title,
        imageone: this.props.p.imageone,
        imagetwo: this.props.p.imagetwo,
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
    const { name, bio, imageone, imagetwo, title, blurb, edit } = this.state;
    if(edit){
axios.patch(`/api/profiles/${this.props.p.id}`,{
  name: name,
  bio: bio,
  blurb: blurb,
  title: title,
  imageone: imageone,
  imagetwo: imagetwo
}) .then(res => {
  this.setState({ redirect: true })})
    }else{
    axios.post("/api/profiles", {
      title: title,
      name: name,
      bio: bio,
      blurb: blurb,
      imageone: imageone,
      imagetwo: imagetwo,
      title: title
    });
  }}

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
        {this.redirect()}
      </div>
    );
  }
}
export default Author;
