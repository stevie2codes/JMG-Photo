import React from "react";
import Lottie from "react-lottie";

function LottieScroll(props) {
  const LottieOptions = {
    loop: true,
    autoPlay: true,
    renderer: "svg",
    animationData: require("../animations/scroll.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="scrollContainer">
      <Lottie options={LottieOptions} width={30} height={"auto"} />
    </div>
  );
}

export default LottieScroll;
