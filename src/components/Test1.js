import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Test1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-zinc-50 ">
      <div className="container px-6 pt-10 pb-10 m-auto md:px-12 xl:px-6">
        <div className="flex justify-center">
          <div className="mt-3 font-semibold text-sky-800 ">
            <div className="mt-4 mb-4 font-semibold btn-heading md:px-0 ">
              <h1 className="">Our Doctor Visits At Home</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5"
        >
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-01.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  General Medicine
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-08.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  Dental
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-06.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  Orthopaedics
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-07.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  ENT
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-05.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  Ophthalmology
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-02.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  Diabetology
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-04.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
                  Neurology
                </h4>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words shadow-lg xl:max-w-xl bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl">
            <div className="card">
              <div className="mx-4 -mt-6 ">
                <img
                  className="w-full rounded-lg "
                  src="https://athulyahomecare.com/lp/images/1-03.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-center text-white font-Poppins md:text-lg">
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
