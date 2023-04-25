import React from "react";
import "./Blog.css";

function Blog() {
  const data = [
    {
      id: 1,
      title: "Kitchan Design",
      subTitle: "Let’s Get Solution For Building Construction Work",
      date: "26 December, 2022",
      image: require("../../assets/images/blog-1.jpg"),
      arrow: require("../../assets/images/more-info.png"),
      isActive: false,
    },
    {
      id: 2,
      title: "Living Design",
      subTitle: "Let’s Get Solution For Building Construction Work",
      date: "26 December, 2022",
      image: require("../../assets/images/blog-2.png"),
      arrow: require("../../assets/images/more-info.png"),
      isActive: true,
    },
    {
      id: 3,
      title: "Interior Design",
      subTitle: "Let’s Get Solution For Building Construction Work",
      date: "26 December, 2022",
      image: require("../../assets/images/blog-3.png"),
      arrow: require("../../assets/images/more-info.png"),
      isActive: false,
    },
  ];

  return (
    <section class="blog">
      <div class="container">
        <div class="text-center px-5 my-5">
          <h1>Articles & News</h1>
          <p class="sub-title px-5">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div class="row">
          {data.map((item, index) => (
            <div
              key={index}
              className={
                item.isActive
                  ? "second-card col-md-4 col-sm"
                  : "col-md-4 col-sm"
              }
            >
              <div class="card px-2 py-3 my-3 rounded-5">
                <img
                  class="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div class="tag ps-2">{item.title}</div>
                <div class="card-body">
                  <p class="card-text text-start">{item.subTitle}</p>
                  <div class="d-flex justify-content-between mt-5">
                    <div class="pt-3">
                      <span>{item.date}</span>
                    </div>
                    <div>
                      <img
                        class="more-arrow"
                        src={item.arrow}
                        alt="more arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;