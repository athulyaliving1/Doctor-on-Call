import React from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import About from "./About";
// import Testimonial from "./Testimonial";
// import Services from "./Services";
import Athulya from "./Athulya";
// import Banner from "./Banner";
// import Test from "./Test";
import Test1 from "./Test1";
import MbTestimonial from "./MbTestimonial";
import MbBanner from "./MbBanner";
import XlForm from "./Enquiry";
import BannerTemp from "./BannerTemp";
import AboutAthulya from "./AboutAthulya";
import TestimonalNew from "./TestimonialNew";
import MdEnquiry from "./MdEnquiry";
import FaqSection from "./FaqSectiom";
import ThreeSection from "./ThreeSection";

function Home() {
  return (
    <div className="bg-zinc-200">
      <BannerTemp />
      <XlForm />
      <MbBanner />
      <MdEnquiry />
      <AboutAthulya />
      <ThreeSection />
      <Test1 />
      <Athulya />
      <FaqSection />
      <MbTestimonial />
      <TestimonalNew />
    </div>
  );
}

export default Home;
