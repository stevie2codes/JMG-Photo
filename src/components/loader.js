import React from "react";
import "../sass/loader.scss";

const Loader = () => {
  return (
    <div className="loadContainer">
      <div className="loader">
        <h1>A</h1>
      </div>
      <h2 className="m-2">Loading..</h2>
    </div>
  );
};

export default Loader;
