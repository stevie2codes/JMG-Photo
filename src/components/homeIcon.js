import React from "react";

function HomeIcon() {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      height="70vh"
      fill="none"
      viewBox="0 0 368 231"
    >
      <g filter="url(#filter0_dd)">
        <path
          stroke="#fff"
          d="M202.024 219.5H249.535v-60.768h30.892c14.458 0 26.732-2.602 36.804-7.831 11.793-5.993 21.078-14.6 27.847-25.816 6.96-11.215 10.442-23.498 10.442-36.837 0-13.339-3.481-25.527-10.444-36.552-6.96-11.214-16.341-19.82-28.134-25.814-10.26-5.227-22.437-7.83-36.515-7.83H196.12v186.955L108.014 14.023l-.454-.985-.454.985L12.642 218.79l-.327.709h189.709zM30.581 207.844L107.56 40.771l76.979 167.073H30.581z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd"
          width="366.486"
          height="230.155"
          x="0.533"
          y="0.845"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="3" dy="3"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.887565 0 0 0 0 0.887565 0 0 0 0 0.887565 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-3" dy="-3"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default HomeIcon;
