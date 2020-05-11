import React from "react";
import "../sass/contact.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="sectionDiv">
        <h1 className="sectionName text-center m-5">Contact</h1>
      </div>
      <div className="contactCard">
        <i className="fas fa-at">
          {" "}
          <p>Email: placeholer.com</p>
        </i>
        <i className="fab fa-instagram">
          {" "}
          <p>Instagram</p>
        </i>
        <i className="fab fa-linkedin">
          <p>LinkedIn</p>
        </i>{" "}
      </div>
    </React.Fragment>
  );
};

export default Contact;
