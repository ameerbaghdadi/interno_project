import React from "react";
import "./AboutUs.css";
import CallIcon from "../../assets/images/Call Icon.png";
import Arrow from "../../assets/images/arrow.png";
import AboutUsImg from "../../assets/images/about-us-image.jpg";

function AboutUs() {
  return (
    <section className="about-us text-start">
      <div className="container">
        <div className="row justify-content-between py-5">
          <div className="col-md-5 py-5 justify-content-between">
            <h1>We Create The Art Of Stylish Living Stylishly</h1>
            <p className="pt-2">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="d-flex py-3">
              <img className="call-img" src={CallIcon} alt="call" />
              <p className="px-3 pt-2">
                <span>012345678</span>
                <br /> Call Us Anytime
              </p>
            </div>
            <button type="button" className="btn text-center btn-dark p-3">
              Get Free Estimate
              <img src={Arrow} alt="arrow" className="ms-2" />
            </button>
          </div>
          <div className="col-md-6">
            <img
              className="kitchen-img img-fluid"
              src={AboutUsImg}
              alt="kitchen photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
