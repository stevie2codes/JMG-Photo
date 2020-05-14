import React from "react";
import "../sass/home.scss";
import HomeIcon from "../components/homeIcon";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="sectionDiv">
        <HomeIcon />
      </div>
      <div className="card-columns home">
        <Link to="/portraits">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588904919/jg-photo/portraits/DSC_8551-Edit_1_tms0he.jpg"
              alt="portraits"
            />
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Portraits</div>
            </div>
          </div>
        </Link>
        <Link to="/furryFriends">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588888151/jg-photo/pups/56281569_2114806922143661_1968872717121748992_o_yxykuy.jpg"
              alt="furry freinds option"
            />
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Furry Friends</div>
            </div>
          </div>
        </Link>
        <Link to="/landscapes">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562730/jg-photo/DSC_2073-Edit_axyegs.jpg"
              alt="landscapes option"
            />
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Landscapes</div>
            </div>
          </div>
        </Link>
        <Link to="/weddings">
          <div className="card portraitCard hvrbox">
            <img
              className="card-img-top hvrbox-layer_bottom"
              src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588904533/jg-photo/pups/weddings/DSC_0772_1_op9x9m.jpg"
              alt="weddings option"
            />
            <div className="hvrbox-layer_top hvrbox-layer_slideup">
              <div className="hvrbox-text">Weddings</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
