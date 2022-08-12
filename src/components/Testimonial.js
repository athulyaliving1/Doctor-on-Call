import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./styles.css";

function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="md:pt-16  md:pb-16">
      <div className="flex justify-center">
        <div className="font-Poppins text-3xl font-semibold  mt-3 text-sky-800  ">
          <h1 className="md:mx-7 mx-0 text-xl underline-offset-3 decoration-4 underline decoration-pink-500">
            Testimonial
          </h1>
          <div className="md:text-3xl  font-sans font-semibold mt-4 mb-4  md:px-0 text-xl ">
            <h1 className="  md:text-3xl">Client Feedback</h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="">
          <div class="py-16 bg-sky-900  ">
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div class="grid gap-12 lg:grid-cols-2">
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <p class=" font-Roboto  semi-bold text-xl px-5">
                          My friends father staying in arumbakkam for past 6
                          months I visited the facility he is very happy and
                          healthy and at the time of our visit activities was
                          conducted he is very excited to participate in
                          activities. And the facility was clean and adaptable
                          to the seniors.
                        </p>
                        <p className="text-right text-sky-800 font-Poppins px-10 font-semibold">
                          - indhu Sree
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <p class="font-Roboto   semi-bold text-xl px-5">
                          Well maintained place for seniors. Nursing and
                          personal care taker was good. They also organizing a
                          wide range of activities and events engage the senior
                          inhabitants. Very good hospitality.
                        </p>
                        <p className="text-right text-sky-800 font-Poppins px-10 font-semibold">
                          - Swathi mira
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="py-16 bg-sky-900">
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div class="grid gap-12 md:grid-cols-2 ">
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white  shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <p class="font-Roboto  semi-bold  text-xl px-5">
                          My friends father staying in arumbakkam for past 6
                          months I visited the facility he is very happy and
                          healthy and at the time of our visit activities was
                          conducted he is very excited to participate in
                          activities. And the facility was clean and adaptable
                          to the seniors.
                        </p>
                        <p className="text-right text-sky-800 font-Poppins px-10 font-semibold">
                          - indhu Sree
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonial;
