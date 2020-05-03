import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide d-flex m-auto"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="10000">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588174751/DSC_3731-Edit_ifqqg0.jpg"
            class="d-block w-100 m-auto"
            alt="landscape"
          ></img>
        </div>
        <div className="carousel-item" data-interval="2000">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1587574800/green-road.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588137287/jg-photo/DSC_3309-Edit_aijgpi.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
