import React from "react";
import "../sass/landscapes.scss";

import { getLandscapes } from "../services/scapes";

class Landscape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landscapes: [],
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      landscapes: getLandscapes(),
      loading: false
    });
  }
  addDefaultSrc = ev => {
    ev.target.src = "https://www.stevensegallery.com/640/360";
  };
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    return (
      <React.Fragment>
        {" "}
        <div className="sectionDiv">
          <h1 className="sectionName text-center m-5">LANDSCAPES</h1>
        </div>
        <div className="card-columns">
          {this.state.landscapes.map(img => (
            <div className="card" key={img.id}>
              <img
                class="card-img-top"
                src={img.image}
                onError={this.addDefaultSrc}
                alt="Landscapes"
              ></img>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Landscape;
