import React from "react";
import "./Work.css";

const data = [
  {
    id: 1,
    title: "Project Plan",
    subTitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    arrow: require("../../assets/images/arrow.png"),
  },
  {
    id: 2,
    title: "Interior Work",
    subTitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    arrow: require("../../assets/images/arrow.png"),
  },
  {
    id: 3,
    title: "Realization",
    subTitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
    arrow: require("../../assets/images/arrow.png"),
  },
];

function Work() {
  return (
    <section class="work mt-5">
      <div class="container">
        <div class="row text-center">
          {data.map((item) => (
            <div class="col-md-4 col-sm py-3">
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <div>
                <button type="button" class="btn">
                  <strong>Read More</strong>
                </button>
                <img src={item.arrow} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
