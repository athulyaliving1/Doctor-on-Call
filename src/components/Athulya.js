import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Athulya() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className=" md:bg-gradient-to-r md:from-sky-800 md:via-zinc-400 md:to-pink-500 bg-gradient-to-r from-sky-800 to-pink-500 md:pt-16 md:pb-16">
        <div className="flex justify-center">
          <div className="mt-3 text-3xl font-semibold text-white font-Poppins md:text-black ">
            <div className="px-6 mt-4 mb-10 font-sans text-xl font-semibold md:text-3xl ">
              <h1 className=" md:text-3xl">Why Athulya ?</h1>
            </div>
          </div>
        </div>
        <div className="container px-6 m-auto md:px-12 xl:px-6">
          <div
            data-aos="fade-up"
            className="grid gap-12 pb-10 md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="p-1 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:shadow-2xl md:hover:scale-110 md:transition md:duration-700 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-2.png"
                        alt="icon"
                      />
                    </div>

                    <p className="px-5 text-2xl font-semibold capitalize font-Poppins xl:text-3xl text-sky-800">
                      A sense of trust
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      Competent doctors who assist and help make the best
                      health-care and lifestyle decisions possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 space-x-6 transition duration-700 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:scale-110 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-4.png"
                        alt="icon"
                      />
                    </div>
                    <p class=" font-Poppins xl:text-3xl  text-sky-800  font-semibold text-2xl px-5 capitalize">
                      Comprehensive Quality healthcare
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      Imparts a convenient home healthcare solution for those
                      who require constant monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 space-x-6 transition duration-700 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:scale-110 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-4.png"
                        alt="icon"
                      />
                    </div>
                    <p className="px-5 text-2xl font-semibold capitalize font-Poppins xl:text-3xl text-sky-800">
                      Expert geriatric specialists
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      Infused with the best geriatric medical care for seniors
                      in the privacy of their own home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 space-x-6 transition duration-700 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:scale-110 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-4.png"
                        alt="icon"
                      />
                    </div>
                    <p className="px-5 text-2xl font-semibold capitalize font-Poppins xl:text-3xl text-sky-800">
                      Accessible and affordable at your convenience.
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      Various forms of health care interactions that are more
                      affordable and accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 space-x-6 transition duration-700 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:scale-110 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-3.png"
                        alt="icon"
                      />
                    </div>
                    <p className="px-5 text-2xl font-semibold capitalize font-Poppins xl:text-3xl text-sky-800">
                      Emotional support for the elder & their family
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      Providing elders with the most comprehensive and
                      evaluative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 space-x-6 transition duration-700 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl hover:scale-110 md:hover:rotate-6">
              <div className="py-10 text-center justify-items-center">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <img
                        src="https://athulyahomecare.com/lp/images/icon-1.png"
                        alt="icon"
                      />
                    </div>
                    <p className="px-5 text-2xl font-semibold capitalize font-Poppins xl:text-3xl text-sky-800">
                      Personalized approach in medical care
                    </p>
                    <p className="px-10 font-semibold font-Poppins opacity-80">
                      High-quality individual personal care with a comprehensive
                      and holistic approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Athulya;
