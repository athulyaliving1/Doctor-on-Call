import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "./Assets/Avatar.jpg";
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
          <div class="py-16 bg-sky-800  ">
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
                            src={Avatar}
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
                          My friends father staying in arumbakkam for past 6
                          months I visited the facility he is very happy and
                          healthy and at the time of our visit activities was
                          conducted he is very excited to participate in
                          activities. And the facility was clean and adaptable
                          to the seniors.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - indhu Sree
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
                            src={Avatar}
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
                          Well maintained place for seniors. Nursing and
                          personal care taker was good. They also organizing a
                          wide range of activities and events engage the senior
                          inhabitants. Very good hospitality.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
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
        <div className="bg-sky-800">
          <div class="py-16 ">
            <div class="container m-auto px-6  md:px-12 xl:px-6">
              <div class="grid gap-12 md:grid-cols-2 ">
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-zinc-100 shadow-xl hover:rounded-2xl">
                  <div class="text-center py-10 justify-items-center">
                    <div class="space-y-2">
                      <div class="space-y-4">
                        <div className="flex justify-center">
                          <img
                            className="rounded-full  w-2/12"
                            src={Avatar}
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
                          I have a relative of mine staying here for about 4
                          months. The supportive staffs and the caretaker are
                          taken good care of my relative. In all this is the
                          best place for senior citizens to feel good like Home.
                        </p>
                        <p className="text-right text-sky-800 font-Roboto md:text-xl px-10 font-semibold">
                          - Pavithra
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
