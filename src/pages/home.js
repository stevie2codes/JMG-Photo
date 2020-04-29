import React from "react";
// import NavBar from "../components/nav_bar";
import "../sass/home.scss";
import HomeCube from "../components/three";

const Home = () => {
  return (
    <div>
      <div className="conatainer  ">
        <div className=" name">
          <div className="mainLogo ">
            {/* <span>Atlas</span> <span>Photo</span> */}
            <HomeCube />
            <div className="btn discover">Discover</div>
          </div>
        </div>

        <img
          className="jgPhoto"
          src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588191505/jg_jtitxi.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
