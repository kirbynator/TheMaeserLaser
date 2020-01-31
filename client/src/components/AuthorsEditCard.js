import React from "react";
import Axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
import Authors from "./Authors";

class Cuthors extends React.Component {
  state = {
    name: "",
    bio: "",
    imageone: "",
    imagetwo: "",
    title: "",
    blurb: ""
  };
  componentDidMount() {
    this.setState({
      name: this.props.p.name,
      bio: this.props.p.bio,
      blurb: this.props.p.blurb,
      title: this.props.p.title,
      imageone: this.props.p.imageone,
      imagetwo: this.props.p.imagetwo
    });
  }
  d(v){
    Axios.delete(`/api/profiles/${v}`).then(res=>
this.props.d(v)
    )
  }

  show(p) {
    if (this.state.toogle === true) {
      return (
        <Card.Content extra>
          <Authors p={p}></Authors>
          <Button
            onClick={() => this.setState({ toogle: !this.state.toogle })}
            basic
            color="red"
          >
            Close
          </Button>
        </Card.Content>
      );
    } else {
      return (
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => this.setState({ toogle: !this.state.toogle })}
              basic
              color="green"
            >
              Edit
            </Button>
            <Button onClick={() => this.d(p.id)} basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      );
    }
  }

  render() {
    const { p } = this.props;
    if (p) {
      return (
        <Card id={p.id}>
        <Card.Content>
          <Image floated="right" src={p.imageone} />
          <Card.Header>{p.name}</Card.Header>
          <Card.Meta>{p.title}</Card.Meta>
          <Card.Description>{p.blurb}</Card.Description>
        </Card.Content>
        {this.show(p)}
      </Card>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
}
export default Cuthors;
