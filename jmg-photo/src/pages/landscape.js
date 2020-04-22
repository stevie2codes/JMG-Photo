import React, { Component } from "react";
import NavBar from "../components/nav_bar";
import "../sass/landscapes.scss";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const Landscape = () => {
  return (
    <div>
      <NavBar />
      <div class="container">
        <div className="row no-gutters  ">
          <div className="col-7 ">
            <CloudinaryContext cloudName="df9q0hnuw">
              <Image className="img" publicId="jg-photo/heroLights.jpg"></Image>
            </CloudinaryContext>
          </div>
          <div className="col-5 box">
            <CloudinaryContext cloudName="df9q0hnuw">
              <Image
                className="img"
                publicId="jg-photo/DSC_2200-Edit-2-Edit_1_vsy0br.jpg"
              ></Image>
            </CloudinaryContext>
          </div>
        </div>

        <div className="row">
          <div className="col-7  box">
            <CloudinaryContext cloudName="df9q0hnuw">
              <Image
                className="img"
                publicId="jg-photo/DSC_2855_1_n2p1dh.jpg"
              ></Image>
            </CloudinaryContext>
          </div>
          <div className="col-6 col-md-4 box">.col-6 .col-md-4</div>
          <div className="col-6 col-md-4 box">.col-6 .col-md-4</div>
        </div>

        <div className="row">
          <div className="col-6 box">.col-6</div>
          <div className="col-6 box">.col-6</div>
        </div>
      </div>
    </div>
  );
};

export default Landscape;
