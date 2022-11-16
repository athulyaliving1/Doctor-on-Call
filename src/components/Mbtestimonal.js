import React from "react";

// import Heading from "./Heading";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function MbTestimonial() {
  return (
    <div className="block md:hidden ">
      <div>
        <div className="flex justify-center">
          <div className="mt-3 text-3xl font-semibold font-Poppins text-sky-800 ">
            <div className="btn-sub-heading">
              <h2 className="">Client FeedBack</h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-900">
          <div className="relative z-40 px-8 py-20 xl:px-20 2xl:mx-auto 2xl:container">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    className="grid-flow-col-dense mb-10 md:grid md:space-x-4"
                  >
                    <div class="max-w-md   px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full "
                          alt="Testimonial avatar"
                          src="https://www.athulyaliving.com/images/Avatar-min.webp"
                        />
                      </div>

                      <p class="btn-sub-para   ">
                        Took nursing care services from Athulya Home Health care
                        for my friend, Who met with a road accident. They
                        provided an excellent service with regular doctor visit
                        and Physio visit which intend my friend to recover back.
                        Their staff is cooperative and support enough, Good
                        coordination among the staffs. Overall happy and
                        satisfied
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold ">
                          - Mr. Harry
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="grid-flow-col md:grid md:space-x-4 ">
                    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl 0 ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full"
                          alt="Testimonial avatar"
                          src="https://www.athulyaliving.com/images/Avatar-min.webp"
                        />
                      </div>

                      <p class="btn-sub-para  ">
                        Athulya Home Care is really a god sent opportunity when
                        it comes to senior geriatric care at home for self or
                        for your loved ones. I have been using their services (
                        Doctor visits, nursing care) for my mother for the past
                        5 years. I have been happy all along with regard to the
                        care they extended.
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold ">
                          - Mr. B Senthil Kumar
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack
                  className="cursor-pointer "
                  role="button"
                  aria-label="previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="absolute right-0 z-30 ml-2 mr-8 cursor-pointer focus:outline-none "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbTestimonial;
