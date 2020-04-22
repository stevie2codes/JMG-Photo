import React, { Component } from "react";
import "../sass/navbar.scss";
import { Link } from "react-router-dom";

class NavBar extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link to="/" className="navbar-brand">
            JG Photography
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/landscapes" className="dropdown-item">
                    Landscapes
                  </Link>
                  <a className="dropdown-item" href="#">
                    Weddings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Furry Freinds
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
