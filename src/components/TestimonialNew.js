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

function TestimonalNew() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="md:block hidden ">
      <div>
        <div className="flex justify-center">
          <div className="font-Poppins text-3xl font-semibold  mt-3 text-sky-800  ">
            <div className="md:text-3xl  font-sans font-semibold  mb-10 mt-10  md:px-0 text-xl ">
              <h1 className="  md:text-3xl">Client FeedBack</h1>
            </div>
          </div>
        </div>
        <div className="bg-sky-900">
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div
                    data-aos="fade-up"
                    className="md:grid grid-flow-col-dense md:space-x-4  mb-10"
                  >
                    <div class="max-w-md   px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full "
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5  ">
                        Thanks for your entire team of Athulya for quick
                        response in arranging a doctor to visit my aged mother
                        (89 years) at home. Dr. Kasirajan visited very fast and
                        given treatment with proper diagnosis.
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold ">
                          - Sekar ms
                        </p>
                      </div>
                    </div>
                    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-fill    w-20 h-20 border-2 border-sky-900 rounded-full "
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5 ">
                        Athulya has homecare special for elderly peoples one the
                        most trusted homecare their services were very
                        professional i strongly recommend Athulya services as i
                        personally experienced.
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Sri Preethi
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="md:grid grid-flow-col md:space-x-4 ">
                    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl 0 ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-cover w-20 h-20 border-2 border-sky-900 rounded-full"
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5 ">
                        Dr. Balachander who attended my mother is very kind,
                        patient and answered all queries and was Ontime, well
                        coordinated by the executives from Athulya home
                        HealthCare service.
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold ">
                          - Jayaraman Kannan
                        </p>
                      </div>
                    </div>
                    <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-2xl ">
                      <div class="flex justify-center -mt-16 md:justify-end">
                        <img
                          class="object-fill w-20 h-20 border-2 border-sky-900 rounded-full "
                          alt="Testimonial avatar"
                          src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                        />
                      </div>

                      <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5 ">
                        Great service.Their home care service is very helpful
                        for elderly persons.They arrange doctors, Nurse,
                        physiotherapist and lab assistant to take sample for
                        testing exclusively awesome. excellent service
                      </p>

                      <div class="flex justify-end mt-4">
                        <p class="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold ">
                          - Vignesh wikki
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack
                  className="cursor-pointer  "
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
                  className="cursor-pointer ml-2 absolute z-30 right-0 mr-8 focus:outline-none "
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
