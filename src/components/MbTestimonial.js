import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="block md:hidden ">
      <div>
        <div className="flex justify-center">
          <div className="mt-3 text-3xl font-semibold font-Poppins text-sky-800 ">
            <div className="mt-10 mb-10 font-sans text-xl font-semibold md:text-3xl md:px-0 ">
              <h1 className=" md:text-3xl">Client FeedBack</h1>
            </div>
          </div>
        </div>
        <div className="bg-sky-900">
          <div className="relative z-40 px-8 py-20 xl:px-20 2xl:mx-auto 2xl:container">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={4}
            >
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    className="grid-flow-col-dense mb-10 md:grid md:space-x-4"
                  >
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl ">
                      <div className="flex justify-center -mt-16 md:justify-end">
                        <img
                          className="object-cover w-20 h-20 border-2 rounded-full border-sky-900 "
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p className="px-5 font-semibold text-center font-Poppins opacity-80 semi-bold md:text-xl ">
                        Thanks for your entire team of Athulya for quick
                        response in arranging a doctor to visit my aged mother
                        (89 years) at home. Dr. Kasirajan visited very fast and
                        given treatment with proper diagnosis.
                      </p>

                      <div className="flex justify-end mt-4">
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl ">
                          - Sekar ms
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="grid-flow-col md:grid md:space-x-4 ">
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl 0 ">
                      <div className="flex justify-center -mt-16 md:justify-end">
                        <img
                          className="object-cover w-20 h-20 border-2 rounded-full border-sky-900"
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p className="px-5 font-semibold text-center font-Poppins opacity-80 semi-bold md:text-xl">
                        Dr. Balachander who attended my mother is very kind,
                        patient and answered all queries and was Ontime, well
                        coordinated by the executives from Athulya home
                        HealthCare service.
                      </p>

                      <div className="flex justify-end mt-4">
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl ">
                          - Jayaraman Kannan
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="grid-flow-col md:grid md:space-x-4 ">
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl 0 ">
                      <div className="flex justify-center -mt-16 md:justify-end">
                        <img
                          className="object-cover w-20 h-20 border-2 rounded-full border-sky-900"
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p className="px-5 font-semibold text-center font-Poppins opacity-80 semi-bold md:text-xl">
                        Great service.Their home care service is very helpful
                        for elderly persons.They arrange doctors, Nurse,
                        physiotherapist and lab assistant to take sample for
                        testing exclusively awesome. excellent service
                      </p>

                      <div className="flex justify-end mt-4">
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl ">
                          - Vignesh wikki
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="grid-flow-col md:grid md:space-x-4 ">
                    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl 0 ">
                      <div className="flex justify-center -mt-16 md:justify-end">
                        <img
                          className="object-cover w-20 h-20 border-2 rounded-full border-sky-900"
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p className="px-5 font-semibold text-center font-Poppins opacity-80 semi-bold md:text-xl">
                        Athulya has homecare special for elderly peoples one the
                        most trusted homecare their services were very
                        professional i strongly recommend Athulya services as i
                        personally experienced.
                      </p>

                      <div className="flex justify-end mt-4">
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl ">
                          - Sri Preethi
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
                    className="w-6 h-6 text-white"
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
                    className="w-6 h-6 text-white"
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
