import React from "react";
import "./Footer.css";

function Footer() {
  const icon = [
    {
      id: 1,
      alt: "facebook",
      icon: require("../../assets/images/facebook.png"),
    },
    {
      id: 2,
      alt: "twitter",
      icon: require("../../assets/images/twitter.png"),
    },
    {
      id: 3,
      alt: "linkedin",
      icon: require("../../assets/images/linkedin.png"),
    },
    {
      id: 4,
      alt: "instagram",
      icon: require("../../assets/images/instagram.png"),
    },
  ];

  const logo = {
    image: require("../../assets/images/Logo.png"),
  };

  const text = {
    desc: "It is a long established fact that a reader will be distracted lookings.",
  };

  const pages = [
    {
      label: "Pages",
      aboutUs: "About Us",
      ourProject: "Our Projects",
      outTeam: "Our Team",
      contactUs: "Contact Us",
      services: "Services",
    },
  ];

  const services = [
    {
      label: "Services",
      kitchan: "Kitchan",
      livingArea: "Living Area",
      bathroom: "Bathroom",
      dinningHall: "Dinning Hall",
      bedroom: "Bedroom",
    },
  ];

  return (
    <footer>
      <div class="container mt-5 py-5">
        <div class="row">
          <div class="col-md-4 col-sm-6 text-start">
            <img src={logo.image} alt="" />

            <p class="sub-title pt-3 text-start">{text.desc}</p>
            <div class="d-flex justify-content-between">
              {icon.map((item) => (
                <div class="col-md-3 py-4 text-start">
                  <img src={item.icon} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>

          {pages.map((item) => (
            <div class="col-md-2 text-start">
              <h3>{item.label}</h3>
              <div class="list">
                <div>{item.aboutUs}</div>
                <div>{item.ourProject}</div>
                <div>{item.outTeam}</div>
                <div>{item.contactUs}</div>
                <div>{item.services}</div>
              </div>
            </div>
          ))}

          {services.map((item) => (
            <div class="col-md-2 text-start">
              <h3>{item.label}</h3>
              <div class="list">
                <div>{item.kitchan}</div>
                <div>{item.livingArea}</div>
                <div>{item.bathroom}</div>
                <div>{item.dinningHall}</div>
                <div>{item.bedroom}</div>
              </div>
            </div>
          ))}
          <div class="col-md-4 text-start">
            <h3>Contact</h3>
            <div class="contact-list pe-5">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="copyright text-center">
        <p>
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </p>
      </div>
    </footer>
  );
}

export default Footer;
