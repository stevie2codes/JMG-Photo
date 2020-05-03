import React, { Component } from "react";

import "../sass/landscapes.scss";
// import axios from "axios";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { getLandscapes } from "../services/scapes";

class Landscape extends Component {
  state = { landscapes: [] };

  componentDidMount() {
    this.setState({ landscapes: getLandscapes() });
  }

  render() {
    return (
      <div className="container ">
        <div className="row row-cols-2">
          {this.state.landscapes.map(img =>
            img.type === "landscape" ? (
              <div className=" landscapes p-1" key={img.id}>
                <img
                  className="col-sm"
                  src={img.image}
                  alt="landscape orentation"
                />
              </div>
            ) : null
          )}
        </div>
        <div className="row row-cols-2 portLands">
          {this.state.landscapes.map(img =>
            img.type === "portrait" ? (
              <div className=" p-1" key={img.id}>
                <img
                  className="col-12   output"
                  src={img.image}
                  alt="portrait orentation"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default Landscape;
