import React from "react";
// import NavBar from "../components/nav_bar";
import "../sass/home.scss";
// import HomeCube from "../components/three";
// import Carousel from "../components/carousel";

const Home = () => {
  return (
    <div>
      <div className="sectionDiv">
        <h1 className="sectionName text-center m-5">Home</h1>
      </div>
      <div className="card-columns home">
        <div className="card">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588176708/jg_wkh7ap.jpg"
            alt="horse"
          />
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0375_rr5fng.jpg"
            alt="horse"
          />
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562703/jg-photo/DSC_1066_vnqnr7.jpg"
            alt="horse"
          />
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562700/jg-photo/DSC_0375_rr5fng.jpg"
            alt="horse"
          />
        </div>
      </div>
      {/* <HomeCube /> */}
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
