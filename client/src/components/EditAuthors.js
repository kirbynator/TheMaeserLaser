import React from "react";
import Axios from "axios";
import EditAuthorCard from "./AuthorsEditCard"
import { Card } from "semantic-ui-react";

class Profiles extends React.Component {
  state = { data: [] };

  componentDidMount() {
    Axios.get("/api/profiles").then(res =>
      this.setState({ data: [...res.data] })
    );
  }

  delete = v => {
    alert(v)
    Axios.get("/api/profiles").then(res =>
      this.setState({ data: [...res.data] })
    );
  };
 
  render() {
    if (this.state.data) {
      return (
        <Card.Group
          centered
          style={{ backgroundColor: "#6b7387", paddingBottom: "10px" }}
        >
          {this.state.data.map(p => (
           <EditAuthorCard p={p} d={() => this.delete()}></EditAuthorCard>
          ))}
        </Card.Group>
      );
    }
  }
}
export default Profiles;
