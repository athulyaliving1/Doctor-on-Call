import React from "react";
import icon1 from "./Assets/icon-1.png";
import icon2 from "./Assets/icon-2.png";
import icon3 from "./Assets/icon-3.png";
import icon4 from "./Assets/icon-4.png";

function Athulya() {
  return (
    <div>
      <div className=" md:bg-gradient-to-r md:from-sky-900 md:via-zinc-400 md:to-pink-500   bg-gradient-to-r from-sky-900 to-pink-500   md:pt-16  md:pb-16">
        <div className="flex justify-center">
          <div className="font-Poppins text-3xl font-semibold  mt-3 text-white  md:text-black  ">
            <h1 className="md:mx-7 mx-0 text-xl underline-offset-3 decoration-4 underline decoration-pink-500">
              Our Achievements
            </h1>
            <div className="md:text-3xl  font-sans font-semibold mt-4 mb-4  px-6 text-xl ">
              <h1 className="  md:text-3xl">Why Athulya ?</h1>
            </div>
          </div>
        </div>
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="grid gap-12 lg:grid-cols-3 pb-10">
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:shadow-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon2} alt="icon" />
                    </div>

                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      A sense of trust
                    </p>
                    <p className="  px-10 font-semibold">
                      Competent doctors who assist and help make the best
                      health-care and lifestyle decisions possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon4} alt="icon" />
                    </div>
                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      Comprehensive Quality healthcare
                    </p>
                    <p className="  px-10 font-semibold">
                      Imparts a convenient home care solution for those who
                      require constant monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon4} alt="icon" />
                    </div>
                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      Expert geriatric specialists
                    </p>
                    <p className="  px-10 font-semibold">
                      Infused with the best geriatric medical care for seniors
                      in the privacy of their own home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon4} alt="icon" />
                    </div>
                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      Accessible and affordable at your convenience.
                    </p>
                    <p className="  px-10 font-semibold">
                      Various forms of health care interactions that are more
                      affordable and accessible.s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon3} alt="icon" />
                    </div>
                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      Emotional support for the elder & their family
                    </p>
                    <p className="  px-10 font-semibold">
                      Providing elders with the most comprehensive and
                      evaluative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl hover:scale-110 transition duration-700  md:hover:rotate-6">
              <div class="text-center py-10 justify-items-center">
                <div class="space-y-2">
                  <div class="space-y-4">
                    <div className="flex justify-center">
                      <img src={icon1} alt="icon" />
                    </div>
                    <p class=" font-Poppins   semi-bold text-2xl px-5">
                      Personalized approach in medical care
                    </p>
                    <p className="  px-10 font-semibold">
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
