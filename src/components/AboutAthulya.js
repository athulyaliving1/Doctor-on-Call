import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function AboutAthulya() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className=" bg-sky-800 rounded-2xl md:pt-16 md:pb-16">
      <div className="container m-auto ">
        <div className="text-justify ">
          <div className="flex justify-center mt-3 font-semibold "></div>
          <div className="flex justify-center mb-10 font-semibold ">
            <h1 className="pt-5 text-center text-white btn-heading">
              Doctor home visit in your Comfort and Privacy
            </h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="grid gap-5 pb-10 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3"
        >
          <div className="grid p-5 space-x-6 shadow-xl md:mt-20 lg:mt-0 xl:mt-20 rounded-xl group bg-zinc-100 hover:shadow-2xl 2xl:h-5/6">
            <div className="grid btn-sub-para">
              We understand that not everyone is able to go to the doctor's
              office when they have a medical issue that needs to be addressed.
              Who wants to sit in an upsetting head of state for hours on end
              sitting tight for the doctor to see them? If there are countless
              patient movables in one day, the time you're destined to see the
              doctor may also pass you by. It's boring, tedious, and takes time
              away from your normal regimen.We don't just do "doctor visits" at
              your house! We consider and care for you till you cure properly.
            </div>
          </div>
          <div>
            <div className="p-1 mt-0 space-x-6 shadow-xl md:mt-10 rounded-xl group bg-zinc-100 hover:shadow-2xl h-5/6">
              <img
                className="object-cover w-full h-full rounded-xl "
                src="https://athulyahomecare.com/lp/images/banner2.png "
                alt="care"
              />
            </div>
          </div>
          <div className="grid p-5 space-x-6 shadow-xl rounded-xl group bg-zinc-100 hover:shadow-2xl 2xl:h-5/6">
            <div className="grid btn-sub-para">
              What if, on the other hand, the doctor might come to you? Isn't
              that pleasant? You've come to the right place! Instead, the doctor
              will come to you! Our stated purpose and service are to provide
              emergency medical care to our patients in the comfort and privacy
              of their personal rooms. We have highly trained Health
              Professionals and Physicians on call 24 hours a day, 365 days a
              year. They are always available to help you manage your medical
              condition, answer your questions, and diagnose you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAthulya;
