import React from "react";
import NavBar from "../components/nav_bar";
import "../sass/home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div class="wrapper">
        <div class="box a">A</div>
        <div class="box b">B</div>
        <div class="box c">C</div>
        <div class="box d">D</div>
      </div>
    </div>
  );
};

export default Home;
