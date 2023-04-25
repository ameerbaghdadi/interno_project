import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Work />
      <AboutUs />
      <Projects />
      <Counter />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
