import React, { useEffect } from "react";
import generalmedicine from "./Assets/1-01.jpg";
import Dental from "./Assets/1-08.jpg";
import Orthopaedics from "./Assets/1-06.jpg";
import ENT from "./Assets/1-07.jpg";
import Ophthalmology from "./Assets/1-05.jpg";
import Neurology from "./Assets/1-04.jpg";
import Diabetology from "./Assets/1-02.jpg";
import Oncology from "./Assets/1-03.jpg";

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
            <div className="md:text-3xl  font-sans font-semibold mt-4 mb-4  md:px-0 text-xl ">
              <h1 className="  md:text-3xl">Our Doctor Visits At Home</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-4 grid-cols-1   gap-5"
        >
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={generalmedicine}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white text-center font-Poppins md:text-xl">
                  General medicine
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Dental}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  Dental
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500  w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Orthopaedics}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  Orthopaedics
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img class=" w-full rounded-lg" src={ENT} alt="tailwind-card" />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  ENT
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Ophthalmology}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  Ophthalmology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Diabetology}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  Diabetology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500  w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Neurology}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
                  Neurology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src={Oncology}
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-xl text-center">
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
