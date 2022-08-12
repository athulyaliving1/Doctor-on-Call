import React from "react";
import icon1 from "./Assets/icon11.png";
import icon2 from "./Assets/icon12.png";
import icon3 from "./Assets/icon13.png";
import icon4 from "./Assets/icon14.png";
import icon5 from "./Assets/icon15.png";
import icon6 from "./Assets/icon16.png";
import icon7 from "./Assets/icon17.png";
import icon8 from "./Assets/icon18.png";

function Test() {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center bg-zinc-50 ">
          <div className="flex justify-center text-xl font-semibold mb-10 mt-10"></div>
        </div>
        <div className="xl:px-40 px-10  bg-zinc-50 pb-10 ">
          <ul className=" xl:grid xl:grid-cols-4 space-y-5  md:gap-5 ">
            <li className=" gap-5 rounded-2xl mt-5  shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center ">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon1}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">General medicine</li>
                  </div>
                </li>
              </div>
            </li>

            <li className=" gap-5 rounded-2xl  shadow-2xl py-5  ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon2}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Dental</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5  rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon3}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Orthopaedics</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5  rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon4}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">ENT</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5 rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon5}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Ophthalmology</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5  rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon6}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Diabetology</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5 rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon7}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Neurology</li>
                  </div>
                </li>
              </div>
            </li>
            <li className=" gap-5rounded-2xl shadow-2xl py-5 ">
              <div>
                <li className="flex justify-center">
                  <img
                    className="px-3 py-2  border-2 xl:border-2 border-pink-500 bg-pink-500  rounded-xl"
                    src={icon8}
                    alt="Preventionfromrecentfalls"
                  />
                </li>
                <li className="text-sky-800 font-semibold  flex justify-center">
                  <div className="px-2  py-5">
                    <li className="text-xl">Oncology</li>
                  </div>
                </li>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Test;
