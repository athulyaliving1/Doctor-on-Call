import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function AboutAthulya() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className=" bg-sky-800 md:pt-16  md:pb-16  ">
      <div class="container m-auto ">
        <div className=" text-justify ">
          <div className=" font-Poppins flex justify-center text-3xl font-semibold  mt-3 "></div>
          <div className="flex justify-center text-xl font-semibold mb-10 ">
            <h1 className="text-white  md:text-2xl text-center pt-5">
              Best Home Visit Doctors In Hyderabad
            </h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          class=" md:grid-cols-2   lg:grid grid-cols-2  space-y-3 md:space-y-3 lg:space-y-0 xl:space-y-0 2xl:space-y-0      gap-12 pb-10 "
        >
          <div
            data-aos="fade-down"
            className=" p-5 rounded-xl group space-x-6 bg-zinc-100  shadow-xl hover:shadow-2xl grid lg:place-content-center 2xl:h-5/6    "
          >
            <div className="text-justify  md:text-xl font-semibold font-Poppins opacity-80 grid ">
              Elders frequently have one or more physical limitations that need
              them to rely on others for transportation. Often it remains to be
              a hindrance to attend their medical appointments on time. To be a
              solution provider, Athulya Home Healthcare brings the desired
              geriatric care with expert doctors for your senior’s medical
              consultation at the comfort of your home. Athulya Home healthcare
              offers the doctor on call service in Hyderabad, with a wide range
              of doctor home consultation services. Seniors can see doctors from
              the comfort of their own home, for everything from a routine
              medical check-up to treatment for chronic medical disorder
              consultation at the comfort of your home.
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="p-3 rounded-xl group space-x-6 bg-zinc-100  shadow-xl hover:shadow-2xl 2xl:h-5/6  "
          >
            <img
              className="rounded-xl h-full w-full object-cover "
              src="https://athulyahomecare.com/lp/images/banner2.png "
              alt="care"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAthulya;
