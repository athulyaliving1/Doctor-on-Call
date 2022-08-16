import React, { useEffect } from "react";
// import Heading from "./Heading";
import banner from "./Assets/banner2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" bg-sky-800 md:pt-16  md:pb-16 ">
      <div className="grid md:grid-cols-2">
        <div className="container ">
          <div className="container text-justify ">
            <div className=" font-Poppins flex justify-center text-3xl font-semibold  mt-3 ">
             
            </div>
            <div className="flex justify-center text-xl font-semibold  mt-3">
              <h1 className="text-white  md:text-3xl">
                Best Home Visit Doctors In Bangalore
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="container p-5 rounded-xl group sm:flex space-x-6 bg-zinc-100  shadow-xl hover:shadow-2xl  mt-8 mb-5"
          >
            <p className="text-justify  md:text-xl font-semibold font-Poppins opacity-80 ">
              Elders frequently have one or more physical limitations that need
              them to rely on others for transportation. Often it remains to be
              a hindrance to attend their medical appointments on time. To be a
              solution provider, Athulya Home Healthcare brings the desired
              geriatric care with expert doctors for your senior’s medical
              consultation at the comfort of your home. Athulya Home healthcare
              offers the doctor on call service in Bangalore, with a wide range
              of doctor home consultation services. Seniors can see doctors from
              the comfort of their own home, for everything from a routine
              medical check-up to treatment for chronic medical disorder
            </p>
          </div>
        </div>
        <div className="container  gap-5 mb-5  ">
          <div className=" ">
            <img
              data-aos="fade-down"
              className="rounded-xl"
              src={banner}
              alt="care"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
