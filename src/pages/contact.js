import React from "react";
import "../sass/contact.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="sectionDiv">
        <h1 className="sectionName text-center m-5">Contact</h1>
      </div>
      <div className="contactCard">
        <a href="mailto:atlasphoto1@gmail.com">
          <i className="fas fa-at"></i>
          <p>Email</p>
        </a>
        <a href="https://www.instagram.com/jgraham12345/">
          {" "}
          <i className="fab fa-instagram"></i>
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/jonathan-graham-8972314b/">
          <i className="fab fa-linkedin"> </i>
          <p>LinkedIn</p>
        </a>{" "}
      </div>
    </React.Fragment>
  );
};

export default Contact;
