import React from "react";

const navbar = ({ setCategories }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary cursor-pointer"
      data-bs-theme="dark"
    >
      <div className="container-fluid cursor-pointer">
        <a className="navbar-brand" href="/">
          <span className="badge rounded-pill bg-secondary">News Point</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategories("technology");
                }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategories("business");
                }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategories("sports");
                }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategories("health");
                }}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategories("entertainment");
                }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
