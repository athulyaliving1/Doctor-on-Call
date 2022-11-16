import React from "react";
import Banner from "./Basic/Banner";
import Card from "./Content/Card";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";
import FaqSection from "./Content/FaqSection";
import FirstSection from "./Content/FirstSection";
// import FourSection from "./Content/FourSection";
import ThreeSection from "./Content/ThreeSection";
import TestimonalNew from "./TestimonialNew";
import MbTestimonial from "./Mbtestimonal";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
      <FirstSection />
      <Card />
      <ThreeSection />
      <FaqSection />
      <TestimonalNew />
      <MbTestimonial />
    </div>
  );
}

export default Home;
