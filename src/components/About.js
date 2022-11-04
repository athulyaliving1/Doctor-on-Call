import React, { useEffect } from "react";
// import Heading from "./Heading";
// import banner from "./Assets/banner2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" bg-sky-800 md:pt-16 md:pb-16">
      <div className="grid xl:grid-rows-2 ">
        <div className="container ">
          <div className="container text-justify ">
            <div className="flex justify-center mt-3 text-3xl font-semibold  font-Poppins"></div>
            <div className="flex justify-center mt-3 text-xl font-semibold">
              <h1 className="text-white md:text-2xl">
                Best Home Visit Doctors In Kochi
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="container p-5 mt-8 mb-5 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:shadow-2xl"
          >
            <p className="font-semibold text-justify md:text-xl font-Poppins opacity-80 ">
              Elders frequently have one or more physical limitations that need
              them to rely on others for transportation. Often it remains to be
              a hindrance to attend their medical appointments on time. To be a
              solution provider, Athulya Home Healthcare brings the desired
              geriatric care with expert doctors for your senior’s medical
              consultation at the comfort of your home. Athulya Home healthcare
              offers the doctor on call service in Kochi, with a wide range of
              doctor home consultation services. Seniors can see doctors from
              the comfort of their own home, for everything from a routine
              medical check-up to treatment for chronic medical disorder
            </p>
          </div>
          <div className="gap-5 mb-5 ">
            <img
              data-aos="fade-down"
              className="rounded-xl"
              src="https://athulyahomecare.com/lp/images/banner2.png"
              alt="care"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
