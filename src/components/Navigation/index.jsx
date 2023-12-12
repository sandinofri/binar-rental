import React from "react";
import "./style.css";
import logo from "../../assets/image/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-sm">
      <div className="container">
        <a href="/#">
          <img className="logo" src={logo} alt="binar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end sidebar"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto nav-link">
              <a href="/#Services">Our Services</a>
              <a href="/#WhyUs">Why Us</a>
              <a href="/#Testimonial">Testimonial</a>
              <a href="/#FAQ">FAQ</a>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
