import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="md:pt-16  md:pb-16 md:block hidden">
      <div className="flex justify-center">
        <div className="font-Poppins text-3xl font-semibold  mt-3 text-sky-800  ">
          <div className="md:text-3xl  font-sans font-semibold mt-4 mb-4  md:px-0 text-xl ">
            <h1 className="  md:text-3xl">Client Feedback</h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="">
          <div class="py-16 bg-sky-800  ">
            ;' '
            <div
              data-aos="flip-up"
              class="container m-auto px-6  md:px-12 xl:px-6"
            >
              <div class="grid gap-12 md:grid-cols-2   grid-cols-1">
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-zinc-100 shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="rounded-full  w-2/12"
                            src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                        </div>
                        <p class=" font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5">
                          Thanks for your entire team of Athulya for quick
                          response in arranging a doctor to visit my aged mother
                          (89 years) at home. Dr. Kasirajan visited very fast
                          and given treatment with proper diagnosis.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Sekar ms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-zinc-100 shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="rounded-full  w-2/12"
                            src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                        </div>
                        <p class=" font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5">
                          Great service.Their home care service is very helpful
                          for elderly persons.They arrange doctors, Nurse,
                          physiotherapist and lab assistant to take sample for
                          testing exclusively awesome. excellent service
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Vignesh wikki
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-800">
          <div class="py-20 ">
            <div class="container m-auto px-6  md:px-12 xl:px-6">
              <div class="grid gap-12 md:grid-cols-2 ">
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-zinc-100 shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="rounded-full  w-2/12"
                            src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                        </div>
                        <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5">
                          Athulya has homecare special for elderly peoples one
                          the most trusted homecare their services were very
                          professional i strongly recommend Athulya services as
                          i personally experienced.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Sri Preethi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-zinc-100 shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="rounded-full  w-2/12"
                            src="https://athulyahomecare.com/lp/images/Avatar.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                          <span className="text-yellow-500 ">
                            <ion-icon name="star"></ion-icon>
                          </span>
                        </div>
                        <p class="font-Poppins   font-semibold opacity-80 semi-bold md:text-xl px-5">
                          Dr. Balachander who attended my mother is very kind,
                          patient and answered all queries and was Ontime, well
                          coordinated by the executives from Athulya home
                          HealthCare service.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Jayaraman Kannan
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
