/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch `}>
            {props.theme === "light" ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span
                className="material-symbols-outlined"
                style={{ color: "white" }}
              >
                light_mode
              </span>
            )}
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.setThemeCallback();
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   name: PropTypes.number,
// };

// Navbar.defaultProps = {
//   title: "Default Value",
//   name: 1,
// };
