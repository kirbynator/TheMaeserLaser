import React from "react";
import { Icon, Image } from "semantic-ui-react";
class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          height: `${window.innerHeight}px`,
          width: "100%"
        }}
      >
        <div style={{ paddingTop: "5%", width: "55%", height: "70%" }}>
          <Image
            style={{ zIndex: "0" }}
            src="https://i.imgur.com/5EfBiKU.png"
          />
        </div>
        <div style={{ marginTop: "3%", marginLeft: "8%" }}>
          <Icon
            href=""
            inverted
            color="grey"
            name="facebook square"
            size="huge"
          />
          <Icon inverted color="grey" name="twitter square" size="huge" />
        </div>
      </div>
    );
  }
}
export default Home;
