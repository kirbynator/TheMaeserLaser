import React from "react";
import Axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
class Profiles extends React.Component {
  state = { data: [] };

  componentDidMount() {
    Axios.get("/api/profiles").then(res =>
      this.setState({ data: [...res.data] })
    );
  }

  delete = v => {
    Axios.delete(`/api/profiles/${v}`);
    Axios.get("/api/profiles").then(res =>
      this.setState({ data: [...res.data] })
    );
  };
  edit(p) {
    if (this.props.edit) {
      return (
        <div className="ui two buttons">
          <Button basic color="green">
            Edit
          </Button>
          <Button onClick={() => this.delete(p.id)} basic color="red">
            Delete
          </Button>
        </div>
      );
    }
  }
  render() {
    if (this.state.data) {
      return (
        <Card.Group
          centered
          style={{ backgroundColor: "#6b7387", paddingBottom: "10px" }}
        >
          {this.state.data.map(p => (
            <Card id={p.id} as={Link} to={`/profiles/${p.id}`}>
              <Card.Content>
                <Image floated="right" src={p.imageone} />
                <Card.Header>{p.name}</Card.Header>
                <Card.Meta>{p.title}</Card.Meta>
                <Card.Description>{p.blurb}</Card.Description>
              </Card.Content>
              <Card.Content extra>{this.edit(p)}</Card.Content>
            </Card>
          ))}
        </Card.Group>
      );
    }
  }
}
export default Profiles;
