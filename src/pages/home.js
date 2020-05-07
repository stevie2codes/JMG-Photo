import React from "react";
// import NavBar from "../components/nav_bar";
import "../sass/home.scss";
// import HomeCube from "../components/three";
// import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="sectionDiv">
        <h1 className="sectionName text-center m-5">Home</h1>
      </div>
      <div className="card-columns home">
        <Link to="/portraits">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588176708/jg_wkh7ap.jpg"
              alt="portraits"
            />{" "}
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Portraits</div>
            </div>
          </div>
        </Link>
        <Link to="/furryFriends">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0375_rr5fng.jpg"
              alt="portraits"
            />{" "}
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Furry Friends</div>
            </div>
          </div>
        </Link>
        <Link to="/landscapes">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562746/jg-photo/DSC_3309-Edit_ijb7hz.jpg"
              alt="portraits"
            />{" "}
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Landscapes</div>
            </div>
          </div>
        </Link>
        <Link to="/weddings">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588176708/jg_wkh7ap.jpg"
              alt="portraits"
            />{" "}
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Weddings</div>
            </div>
          </div>
        </Link>
      </div>
      {/* <HomeCube /> */}
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
