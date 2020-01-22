import React from "react";

import { Button, Card, Image } from "semantic-ui-react";
import Articles from "./Articles";

class Crticles extends React.Component {
  state = {
    toogle: false,
    title: "",
    author: "",
    body: "",
    image: "",
    tags: "",
    eye: false
  };
  componentDidMount() {
    this.setState({
      title: this.props.p.title,
      author: this.props.p.author,
      body: this.props.p.body,
      image: this.props.p.image,
      tags: this.props.p.tags
    });
  }

  show(p) {
    if (this.state.toogle === true) {
      return (
        <Card.Content extra>
          <Articles p={p}></Articles>
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
            <Button onClick={() => this.props.d(p.id)} basic color="red">
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
            <Image floated="right" size="mini" src={p.image} />
            <Card.Header>{p.title}</Card.Header>
            <Card.Meta>{p.author}</Card.Meta>
          </Card.Content>
          {this.show(p)}
        </Card>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
}
export default Crticles;
