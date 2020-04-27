import React from "react";
import NavBar from "../components/nav_bar";
import "../sass/home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <div className="box a">NEWBOX</div>
        <div className="box b">B</div>
        <div className="box c">C</div>
        <div className="box d">D</div>
      </div>
    </div>
  );
};

export default Home;
