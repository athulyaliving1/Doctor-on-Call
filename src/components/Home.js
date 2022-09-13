import React from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
import About from "./About";
import Testimonial from "./Testimonial";
// import Services from "./Services";
import Athulya from "./Athulya";
// import Banner from "./Banner";
// import Test from "./Test";
import Test1 from "./Test1";
import MbTestimonial from "./MbTestimonial";
import MbBanner from "./MbBanner";
import XlForm from "./Enquiry";
import BannerTemp from "./BannerTemp";

function Home() {
  return (
    <div>
      <BannerTemp />
      <XlForm />
      <MbBanner />
      <About />
      <Test1 />
      <Athulya />
      <Testimonial />
      <MbTestimonial />
    </div>
  );
}

export default Home;
