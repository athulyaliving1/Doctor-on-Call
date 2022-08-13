import React, { useEffect } from "react";
import banner2 from "./Assets/banner2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Test1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-zinc-100  ">
      <div className="container m-auto px-6 md:px-12 xl:px-6 pt-10">
        <div className="flex justify-center">
          <div className="font-Poppins text-3xl font-semibold  mt-3 text-sky-800  ">
            <h1 className="md:mx-7 mx-0 text-xl underline-offset-3 decoration-4 underline decoration-pink-500">
              Types Of Doctor Consultations
            </h1>
            <div className="md:text-3xl  font-sans font-semibold mt-4 mb-4  md:px-0 text-xl ">
              <h1 className="  md:text-3xl">Our doctor visits at home</h1>
            </div>
          </div>
        </div>
        <div  data-aos="zoom-in"   className="grid md:grid-cols-4 grid-cols-1   gap-5">
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  General medicine
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Dental
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Orthopaedics
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  ENT
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Ophthalmology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Diabetology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Neurology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={banner2}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl">
                  Oncology
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test1;
