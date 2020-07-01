import React from "react";
import "../sass/loader.scss";
import Lottie from "react-lottie";

const Loader = () => {
  const LottieOptions = {
    loop: true,
    autoPlay: true,
    renderer: "svg",
    animationData: require("../animations/atlasLoader.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="loadContainer">
      <Lottie options={LottieOptions} />
    </div>
  );
};

export default Loader;
