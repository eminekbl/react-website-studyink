import React from "react";

export default function Counts() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center mt-3">
        <div className="col-2 d-none d-sm-block">
          <img src="https://i.ibb.co/sWDY1Cx/google.png" alt="" width="100" />
        </div>
        <div className="col-2 d-none d-sm-block">
          <img src="https://i.ibb.co/Jk9Bh4P/hubspot.png" alt="" width="100" />
        </div>
        <div className="col-2 d-none d-sm-block">
          <img src="https://i.ibb.co/9226KD2/ibm.png" alt="" width="150" />
        </div>
        <div className="col-2 d-none d-sm-block">
          <img src="https://i.ibb.co/bbXF1bV/udemy.png" alt="" width="150" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-3">
        <div className="col-2 d-block d-sm-none">
          <img src="https://i.ibb.co/sWDY1Cx/google.png" alt="" width="50px" />
        </div>
        <div className="col-2 d-block d-sm-none">
          <img src="https://i.ibb.co/Jk9Bh4P/hubspot.png" alt="" width="50px" />
        </div>
        <div className="col-2 d-block d-sm-none">
          <img src="https://i.ibb.co/9226KD2/ibm.png" alt="" width="50px" />
        </div>
        <div className="col-2 d-block d-sm-none">
          <img src="https://i.ibb.co/bbXF1bV/udemy.png" alt="" width="50px" />
        </div>
      </div>
      <div id="counts">
        <div className="row justify-content-center text-center pt-4">
          <div className="col-3 grow mt-5">
            <h1 className="text-light">300+</h1>
            <p className="text-light">Active Courses</p>
          </div>
          <div className="col-3 grow mt-5">
            <h1 className="text-light">250+</h1>
            <p className="text-light">Expert Tutors</p>
          </div>
          <div className="col-3 grow mt-5">
            <h1 className="text-light">20k+</h1>
            <p className="text-light">Active Students</p>
          </div>
          <div className="col-3 grow mt-5">
            <h1 className="text-light">50k+</h1>
            <p className="text-light">
              Important
              <br />
              Resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
