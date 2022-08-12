import React, { useState } from "react";
import { Link } from "react-router-dom";

import care from "./Assets/care.png";

function Header() {
  const [show, setShow] = useState(false);
  return (
    //mobile responsive
    <nav>
      <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-zinc-100 shadow-md fixed top-0 z-40">
        <div className="">
          <img
            className="xl:w-1/12 md:w-3/12 lg:w-2/12  w-5/12"
            src={care}
            alt="logo"
          />
        </div>
        <div>
          <div
            id="menu"
            className="text-gray-800"
            onClick={() => setShow(!show)}
          >
            {show ? (
              " "
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={4} y1={6} x2={20} y2={6} />
                <line x1={4} y1={12} x2={20} y2={12} />
                <line x1={4} y1={18} x2={20} y2={18} />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
      <div
        className={
          show
            ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40"
            : " xl:hidden w-full h-full transform -translate-x-full z-40"
        }
        id="mobile-nav"
      >
        <div
          className="bg-gray-800 opacity-50 w-full h-full"
          onClick={() => setShow(!show)}
        />
        <div className="w-64 z-40 fixed overflow-y-auto  mt-0  top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
          <div className="px-6 h-full">
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <div className="mt-6 flex w-full items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <p className="text-gray-800 xl:text-base md:text-2xl text-base mx-6">
                        <Link to="/">Home </Link>
                      </p>
                    </div>
                    <div
                      id="cross"
                      className="text-gray-800"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="f-m-m">
                  <li className="text-gray-800 pt-8 cursor-pointer">
                    <div className="flex items-center">
                      <div className="text-gray-800"></div>
                      <p className="text-gray-800 xl:text-base md:text-2xl text-base mb-2 mx-6">
                        <Link to="/about">About</Link>
                      </p>
                    </div>
                  </li>

                  <li className="text-gray-800 pt-8 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                        <p className="text-gray-800 xl:text-base md:text-2xl text-base ">
                          <Link to="/service">Service</Link>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="text-gray-800 pt-8 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                      <p className="text-gray-800 xl:text-base md:text-2xl text-base ">
                        <Link to="/athulya">Why Athulya </Link>
                      </p>
                    </div>
                  </li>

                  <li className="text-gray-800 pt-8 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800 text-xl mt-2">
                          <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <p className="text-gray-800 xl:text-base md:text-2xl text-base ">
                          {" "}
                          <Link to="/testimonal">Testimonial</Link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    //Desktop
  );
}

export default Header;
