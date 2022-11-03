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
    <div className="hidden md:pt-16 md:pb-16 md:block">
      <div className="flex justify-center">
        <div className="mt-3 text-3xl font-semibold font-Poppins text-sky-800 ">
          <div className="mt-4 mb-4 font-sans text-xl font-semibold md:text-3xl md:px-0 ">
            <h1 className=" md:text-3xl">Client Feedback</h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="">
          <div className="py-16 bg-sky-800 ">
            ;' '
            <div
              data-aos="flip-up"
              className="container px-6 m-auto md:px-12 xl:px-6"
            >
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="p-1 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl">
                  <div className="py-10 text-center justify-items-center">
                    <div className="space-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="w-2/12 rounded-full"
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
                        <p className="px-5 font-semibold font-Poppins opacity-80 semi-bold md:text-xl">
                          Thanks for your entire team of Athulya for quick
                          response in arranging a doctor to visit my aged mother
                          (89 years) at home. Dr. Kasirajan visited very fast
                          and given treatment with proper diagnosis.
                        </p>
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl">
                          - Sekar ms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-1 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl">
                  <div className="py-10 text-center justify-items-center">
                    <div className="space-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="w-2/12 rounded-full"
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
                        <p className="px-5 font-semibold font-Poppins opacity-80 semi-bold md:text-xl">
                          Great service.Their home care service is very helpful
                          for elderly persons.They arrange doctors, Nurse,
                          physiotherapist and lab assistant to take sample for
                          testing exclusively awesome. excellent service
                        </p>
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl">
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
          <div className="py-20 ">
            <div className="container px-6 m-auto md:px-12 xl:px-6">
              <div className="grid gap-12 md:grid-cols-2 ">
                <div className="p-1 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl">
                  <div className="py-10 text-center justify-items-center">
                    <div className="space-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="w-2/12 rounded-full"
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
                        <p className="px-5 font-semibold font-Poppins opacity-80 semi-bold md:text-xl">
                          Athulya has homecare special for elderly peoples one
                          the most trusted homecare their services were very
                          professional i strongly recommend Athulya services as
                          i personally experienced.
                        </p>
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl">
                          - Sri Preethi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-1 space-x-6 shadow-xl rounded-xl group sm:flex bg-zinc-100 hover:rounded-2xl">
                  <div className="py-10 text-center justify-items-center">
                    <div className="space-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="w-2/12 rounded-full"
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
                        <p className="px-5 font-semibold font-Poppins opacity-80 semi-bold md:text-xl">
                          Dr. Balachander who attended my mother is very kind,
                          patient and answered all queries and was Ontime, well
                          coordinated by the executives from Athulya home
                          HealthCare service.
                        </p>
                        <p className="px-10 font-semibold text-right text-sky-800 font-Roboto md:text-xl">
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
