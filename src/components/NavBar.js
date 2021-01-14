import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand align-items-center" href="index.html">
          Study<span>ink</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tutors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="ourstory" href="ourstory.html">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item px-2">+89754125</li>
            <li>
              <button
                className="btn my-btn nav-item rounded-pill"
                type="button"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
