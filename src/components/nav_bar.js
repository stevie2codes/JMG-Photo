import React, { Component } from "react";
import "../sass/navbar.scss";
import { Link } from "react-router-dom";
import logo from "../images/myphotosign_40378_b.png";
// import HomeCube from "../components/three";

class NavBar extends Component {
  // state = {  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand ">
            <img src={logo} className="brand mx-auto" alt="signiture" />
            {/* <HomeCube /> */}
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
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/portfolio"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </Link>
                <div
                  className="dropdown-menu ml-5"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="/landscapes" className="dropdown-item">
                    Landscapes
                  </Link>
                  <Link className="dropdown-item" to="/weddings">
                    Weddings
                  </Link>

                  <Link className="dropdown-item" to="/furryFriends">
                    Furry Freinds
                  </Link>
                  <Link className="dropdown-item" to="/portraits">
                    Portraits
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;