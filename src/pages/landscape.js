import React from "react";
import "../sass/landscapes.scss";
import Masonry from "react-masonry-layout";
import { getLandscapes } from "../services/scapes";

class Landscape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landscapes: []
    };
  }
  componentDidMount() {
    this.setState({
      landscapes: getLandscapes()
    });
  }

  render() {
    if (!this.state.landscapes) {
      return <h1>loading … </h1>;
    }

    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">LANDSCAPES</h1>
        </div>
        <div className="landscapeContainer">
          <Masonry
            id="masonry-layout"
            className="mx-auto"
            sizes={[
              { columns: 1, gutter: 20 },
              { mq: "768px", columns: 3, gutter: 20 },
              { mq: "1024px", columns: 3, gutter: 20 }
            ]}
          >
            {this.state.landscapes.map(v => {
              return (
                <img
                  src={v.image}
                  key={v.id}
                  alt="landscapes"
                  style={{
                    width: `400px`,
                    height: `auto`,
                    lineHeight: `auto`
                  }}
                ></img>
              );
            })}
          </Masonry>
        </div>
      </React.Fragment>
    );
  }
}
export default Landscape;
