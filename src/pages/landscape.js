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
        <div className="row">
          {this.state.landscapes.map(img =>
            img.type === "landscape" ? (
              <div className=" mb-3 landscapes" key={img.id}>
                <img
                  className="col-4 align-self-start"
                  src={img.image}
                  alt="landscape orentation"
                />
              </div>
            ) : null
          )}
        </div>
        <div className="row portLands">
          {this.state.landscapes.map(img =>
            img.type === "portrait" ? (
              <div className="mb-3 " key={img.id}>
                <img
                  className="col-6 offset-8"
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
