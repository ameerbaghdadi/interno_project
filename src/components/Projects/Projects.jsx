import React from "react";
import "./Projects.css";

function Projects() {
  const data = [
    {
      id: 1,
      title: "Modern Kitchen",
      subTitle: "Decor / Artchitecture",
      image: require("../../assets/images/project-1.png"),
      arrow: require("../../assets/images/next-arrow.png"),
    },
    {
      id: 2,
      title: "Modern Kitchen",
      subTitle: "Decor / Artchitecture",
      image: require("../../assets/images/project-2.png"),
      arrow: require("../../assets/images/next-arrow.png"),
    },
    {
      id: 3,
      title: "Modern Kitchen",
      subTitle: "Decor / Artchitecture",
      image: require("../../assets/images/project-3.png"),
      arrow: require("../../assets/images/next-arrow.png"),
    },
    {
      id: 4,
      title: "Modern Kitchen",
      subTitle: "Decor / Artchitecture",
      image: require("../../assets/images/project-4.png"),
      arrow: require("../../assets/images/next-arrow.png"),
    },
  ];

  return (
    <section className="project">
      <div className="container">
        <div className="text-center my-5">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="row justify-content-around">
          {data.map((item, index) => (
            <div key={index} className="col-md-5">
              <img
                className={
                  item.id === 1
                    ? "img-fluid project-1"
                    : item.id === 2
                    ? "img-fluid project-2"
                    : item.id === 3
                    ? "img-fluid project-3"
                    : item.id === 4
                    ? "img-fluid project-4"
                    : ""
                }
                src={item.image}
                alt={item.title}
              />
              <div className="more-info text-start py-4">
                <p>
                  <span>{item.title}</span>
                  <br />
                  {item.subTitle}
                </p>
                <img className="project-img" src={item.arrow} alt="next arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
