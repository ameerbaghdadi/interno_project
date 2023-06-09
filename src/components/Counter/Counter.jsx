import React from "react";
import "./Counter.css";

function Counter() {
  const data = [
    {
      id: 1,
      counter: 12,
      title: "Years Of Experiance",
    },
    {
      id: 2,
      counter: 85,
      title: "Success Project",
    },
    {
      id: 3,
      counter: 15,
      title: "Active Project",
    },
    {
      id: 4,
      counter: 95,
      title: "Happy CUstomers",
    },
  ];

  return (
    <section className="counter py-5 text-center">
      <div className="container-fluid">
        <div className="row text-center">
          {data.map((item) => (
            <div key={item.id} className="col-md-3 vl">
              <h1>{item.counter}</h1>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
