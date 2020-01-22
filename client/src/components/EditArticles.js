import React from "react";
import Axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
import EditArticlesCard from "./ArticleEditCard";

class Erticles extends React.Component {
  state = { data: [] };

  componentDidMount() {
    Axios.get("/api/articles").then(res =>
      this.setState({ data: [...res.data] })
    );
  }

  delete = v => {
    Axios.delete(`/api/articles/${v}`);
    Axios.get("/api/articles").then(res =>
      this.setState({ data: [...res.data] })
    );
  };

  render() {
    return (
      <Card.Group>
        {this.state.data.map(p => (
          <EditArticlesCard p={p} d={() => this.delete()}></EditArticlesCard>
        ))}
      </Card.Group>
    );
  }
}
export default Erticles;
