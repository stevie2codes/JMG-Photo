import React from "react";
// import NavBar from "../components/nav_bar";
import "../sass/home.scss";
// import HomeCube from "../components/three";
import Carousel from "../components/carousel";

const Home = () => {
  return (
    <div>
      <div className="sectionDiv">
        <h1 className="sectionName text-center m-5">Home</h1>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
