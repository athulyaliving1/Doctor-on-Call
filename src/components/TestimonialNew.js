import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function TestimonalNew() {
  return (
    <div className="hidden md:block ">
      <div>
        <div className="flex justify-center">
          <div className="mt-3 ">
            <div className="mt-10 mb-10 btn-sub-heading">
              <h1 className="">Client FeedBack</h1>
            </div>
          </div>
        </div>
        <div className="rounded-tr-full bg-sky-900">
          <div className="relative z-40 px-8 py-20 xl:px-20 2xl:mx-auto 2xl:container">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div class="mx-auto max-w-5xl px-4 py-8">
                    <section class="rounded-lg    bg-gray-100 p-8">
                      <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                          alt="Man"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                          class="aspect-square w-full rounded-full object-cover"
                        />

                        <blockquote class="sm:col-span-2 float-right">
                          <p class="btn-sub-para   font-OpenSans italic">
                            I called Athulya Homecare late Sunday night for help for my father. There was a quick response, and an appointment was scheduled for the next morning. I was trying to pay for the service and due some problem it was taking time. Shiny, who scheduled the appointment said: "not to worry, we will see the patient first, payment can come later". Care Managers are very kind. Dr. Janakan came on scheduled time and gave a diagnosis and treatment. I highly appreciate the professional and caring approach of the entire team- from the first response, to visit scheduling, to the doctor's visit. If I could give 6 stars, I would.
                          </p>

                          <cite class="mt-8 inline-flex items-center not-italic">
                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                              <strong>- Mr. Sreeni V</strong>
                            </p>
                          </cite>
                        </blockquote>
                      </div>
                    </section>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div class="mx-auto max-w-5xl px-4 py-8">
                    <section class="rounded-lg bg-gray-100 p-8">
                      <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <img
                          alt="Man"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                          class="aspect-square w-full rounded-full object-cover"
                        />

                        <blockquote class="sm:col-span-2 float-right">
                          <p class="btn-sub-para font-OpenSans italic">
                            It was really a memorable experience from Athulya home care. One of my friend told me that this home care and elderly persons really feel comfortable with the doctors and the care given by the staffs.Based on that I went for doctor visit and with utmost care they delivered the same to my family. Thanks for the caring staffs...,keep it up.                          </p>

                          <cite class="mt-8 inline-flex items-center not-italic">
                            <span class="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                            <p class="text-sm uppercase text-gray-500 sm:ml-3">
                              <strong>- Mr. Dscon Renuga S</strong>
                            </p>
                          </cite>
                        </blockquote>
                      </div>
                    </section>
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
                    class="w-6 h-6 text-white font-extrabold"
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
                    class="w-6 h-6 text-white "
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

export default TestimonalNew;
