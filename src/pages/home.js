import React from "react";
import NavBar from "../components/nav_bar";
import "../sass/home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="wrapper">
        <div className="name">Atlas-Photo</div>
      </div>
    </div>
  );
};

export default Home;
