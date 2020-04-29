import React from "react";
// import NavBar from "../components/nav_bar";
import "../sass/home.scss";
import HomeCube from "../components/three";

const Home = () => {
  return (
    <div>
      <div className="conatainer d-flex justify-content-center ">
        <div className="row name">
          <div className="mainLogo ">
            <span>Atlas</span> <span>Photo</span>
            <HomeCube />
          </div>
        </div>

        <img
          className="jgPhoto"
          src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588176708/jg_wkh7ap.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
