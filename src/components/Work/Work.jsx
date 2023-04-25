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
    <section className="work mt-5">
      <div className="container">
        <div className="row text-center">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 col-sm py-3">
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <div>
                <button type="button" className="btn">
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
