import React from "react";

function HomeIcon() {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      height="70vh"
      fill="none"
      viewBox="0 0 435 241"
    >
      <g filter="url(#filter0_dd)">
        <path
          fill="#F2F2F2"
          d="M207.024 224H18.096L112.56 19.232 207.024 224zM34.8 213.344h155.52L112.56 44.576 34.8 213.344zM259.22 224V23.552h83.807c14.016 0 26.113 2.592 36.289 7.776 11.712 5.952 21.024 14.496 27.936 25.632C414.164 67.904 417.62 80 417.62 93.248c0 13.248-3.456 25.44-10.368 36.576-6.72 11.136-15.936 19.68-27.648 25.632-9.984 5.184-22.177 7.776-36.577 7.776h-31.392V224H259.22z"
        ></path>
        <path
          stroke="#4682B4"
          strokeOpacity="0.3"
          d="M207.024 224.5h.781l-.327-.709-94.464-204.768-.454-.985-.454.985L17.642 223.79l-.327.709h189.709zm51.696-.5v.5h53.415v-60.768h30.892c14.458 0 26.732-2.602 36.804-7.831 11.793-5.993 21.078-14.6 27.847-25.816 6.96-11.215 10.442-23.498 10.442-36.837 0-13.339-3.481-25.527-10.444-36.552-6.96-11.214-16.341-19.82-28.134-25.814-10.26-5.227-22.437-7.83-36.515-7.83H258.72V224zM35.58 212.844l76.98-167.073 76.979 167.073H35.581z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_dd"
          width="434.086"
          height="240.155"
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
          <feOffset dx="4" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="6"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.27451 0 0 0 0 0.509804 0 0 0 0 0.705882 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-4" dy="-4"></feOffset>
          <feGaussianBlur stdDeviation="6"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"></feColorMatrix>
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
