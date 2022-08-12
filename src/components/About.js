import React from "react";
import Heading from "./Heading";
import sample1 from "./Assets/sample1.jpg";

function About() {
  return (
    <div className=" bg-zinc-100 ">
      <div className="grid md:grid-cols-2">
        <div className="container">
          <Heading title="About" />
          <div className="container text-justify ">
            <h1 className="xl:text-3xl  flex justify-center text-xl font-sans font-semibold  text-sky-800 ">
              Best Home Visit Doctors In Bangalore
            </h1>
          </div>

          <div className="container p-5 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:shadow-2xl  mt-8 mb-5">
            <p className="text-justify  md:text-xl  ">
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
        <div className="container  grid  md:grid-cols-2  ">
          <div>
            <div className="grid   ">
              <div>
                <img className="w-full h-64 rounded-xl" src={sample1} />
              </div>
            </div>
            <div>
              <img className="w-full h-64 rounded-xl" src={sample1} />
            </div>
          </div>
          <div>
            <div className="">
              <img className="w-full h-64 rounded-xl" src={sample1} />
            </div>
            <div className="">
              <img className="w-full h-64 rounded-xl" src={sample1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
