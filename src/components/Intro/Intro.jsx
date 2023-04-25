import React from "react";
import "./Intro.css";
import Arrow from "../../assets/images/arrow.png";

function Intro() {
  return (
    <section className="intro mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-5 text-start">
            <h1>Let Your Home Be Unique</h1>
            <p>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <button type="button" className="btn btn-dark">
              Get Started
              <img src={Arrow} alt="arrow" className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
