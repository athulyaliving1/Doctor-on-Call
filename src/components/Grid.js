import React from "react";
import sample from "../Assest/Nature-Amazing-Grace-600px-400px-2.jpg";
import Image1 from "../Assest/image-1.jpg";
import Image2 from "../Assest/image-2.jpg";
import Image3 from "../Assest/image-3.jpg";

function Grid() {
  return (
    <div className="">
      <div div class="  relative bg-zinc-100  ">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center container mx-auto">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl  lg:text-2xl   font-semibold text-sky-800 text-center font-Ubuntu leading-8  tracking-tight sm:leading-9  capitalize pt-5 ">
              Benefits of home visiting <span> </span>
              <span className="text-pink-500 capitalize">eye doctors</span>
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Personalized medical care
                    </h5>
                    <p class="mb-8 md:text-xl text-gray-800 font-Ubuntu font-semibold opacity-90  text-justify">
                      Know everything about your business in a single glance
                      with your new dashboard.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Round-the-clock care
                    </h5>
                    <p class="mb-8 md:text-xl text-gray-800 font-Ubuntu font-semibold opacity-90 text-justify ">
                      Athulya’s specialists from various medical streams provide
                      you with 24/7 services.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Bond with the Specialist
                    </h5>
                    <p class="mb-8 md:text-xl text-gray-800 font-Ubuntu font-semibold opacity-90 text-justify  ">
                      To foster a closer relationship between the geriatric
                      optometrist and the patient, Athulya makes sure the same
                      specialist consults the senior on subsequent appointments.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
            <img
              src={sample}
              alt="illustration Intrinsic size:	400 × 600 px"
              class="relative mx-auto shadow-lg rounded w-auto"
            />
          </div>
        </div>
      </div>
      <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] container mx-auto ">
        <div class="">
          <div class="-mx-4 flex flex-wrap items-center justify-between">
            <div class="w-full px-4 lg:w-6/12">
              <div class="-mx-3 flex items-center sm:-mx-4">
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="py-3 sm:py-4">
                    <img src={Image1} alt="sample" class="w-full rounded-2xl" />
                  </div>
                  <div class="py-3 sm:py-4">
                    <img src={Image2} alt="sa,ple" class="w-full rounded-2xl" />
                  </div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <div class="relative z-10 my-4">
                    <img src={Image3} alt="sample" class="w-full rounded-2xl" />
                    {/* <span class="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="104"
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="31"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="103"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="132"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0">
                <span class="mb-2 block text-xl lg:text-2xl   font-semibold text-sky-800 text-center font-Ubuntu">
                  Why Choose Athulya's Doctor at <span> </span>
                  <span className="text-pink-500">Home Service?</span>
                </span>

                <p class="mb-8 md:text-xl text-gray-800 font-Ubuntu font-semibold opacity-90  text-justify ">
                  A competent interdisciplinary team at Athulya makes it
                  possible to provide comprehensive medical care. The
                  senior-centric home health care assures seniors have access to
                  the type of eye care they are searching for by utilizing
                  healthcare professionals from various disciplines.
                </p>
                <p class="mb-8 md:text-xl text-gray-800 font-Ubuntu font-semibold opacity-90  text-justify">
                  Having touched the lives of 15000+ seniors, Athulya Home
                  Healthcare brings healing to your home, exclusively for
                  seniors. Get in touch today for overall senior care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grid;
