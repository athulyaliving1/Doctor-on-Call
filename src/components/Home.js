import React from "react";
import Header from "./Header";
// import Navbar from "./Navbar";
import About from "./About";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Athulya from "./Athulya";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Athulya />
      <Testimonial />
    </div>
  );
}

export default Home;
