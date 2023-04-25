import React from "react";
import "./AboutUs.css";
import CallIcon from "../../assets/images/Call Icon.png";
import Arrow from "../../assets/images/arrow.png";
import AboutUsImg from "../../assets/images/about-us-image.jpg";

function AboutUs() {
  return (
    <section class="about-us text-start">
      <div class="container">
        <div class="row justify-content-between py-5">
          <div class="col-md-5 py-5 justify-content-between">
            <h1>We Create The Art Of Stylish Living Stylishly</h1>
            <p class="pt-2">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div class="d-flex py-3">
              <img class="call-img" src={CallIcon} alt="call" />
              <p class="px-3 pt-2">
                <span>012345678</span>
                <br /> Call Us Anytime
              </p>
            </div>
            <button type="button" class="btn text-center btn-dark p-3">
              Get Free Estimate
              <img src={Arrow} alt="arrow" class="ms-2" />
            </button>
          </div>
          <div class="col-md-6">
            <img
              class="kitchen-img img-fluid"
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
