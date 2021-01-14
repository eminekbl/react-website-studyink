import React from "react";

export default function Footer() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-3 align-items-center">
          <div className="row justify-content-start align-items-center">
            <div className="col-sm-3">
              <h2 className="footerBrand">
                Study<span>ink</span>
              </h2>
            </div>
          </div>
          <p>
            Studyink is a platform that helps you find tutors and manage your
            tutoring activities.
          </p>
        </div>
        <div className="col-sm-9">
          <div className="row justify-content-center">
            <div className="col-sm-3">
              <ul>
                <li>
                  <p>Resources</p>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Features</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Pricing</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Log in</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Sign up</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>
                  <p>Legal</p>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Terms of use</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Privacy policy</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Legal notice</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>
                  <p>Links</p>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Feedback</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Tutors</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">Courses</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="footer">About Us</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <p>Write to us</p>
              <br />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <button className="btn send-btn" type="button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
