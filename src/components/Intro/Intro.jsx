import React from "react";
import "./Intro.css";
import Arrow from "../../assets/images/arrow.png";

function Intro() {
  return (
    <section class="intro mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 mb-5 text-start">
            <h1>Let Your Home Be Unique</h1>
            <p>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <button type="button" class="btn btn-dark">
              Get Started
              <img src={Arrow} alt="arrow" class="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
