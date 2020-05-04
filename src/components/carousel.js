import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-fade d-flex m-auto"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="3000">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562728/jg-photo/DSC_1874-Edit_vgltlt.jpg"
            className="d-block w-100 m-auto"
            alt="landscape"
          ></img>
        </div>
        <div className="carousel-item" data-interval="3000">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562704/jg-photo/DSC_1655-Edit_xywign.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item" data-interval="3000">
          <img
            src="https://res.cloudinary.com/df9q0hnuw/image/upload/v1588562704/jg-photo/DSC_1489-Edit_x7vdrg.jpg"
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
