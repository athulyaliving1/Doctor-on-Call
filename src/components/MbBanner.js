import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import MbBanner1 from "../components/Assets/sm-banner.jpg";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Helper/URL";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(3)
      .max(15)
      .required(),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required(),

    textarea: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter text only")
      .min(10)
      .max(40)
      .required(),
  })
  .required();

function MbBanner() {
  // const [status, setStatus] = useState("Submit");
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [loadingInProgress, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    setLoading(true);
    if (!name || !number || !email || !textarea) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    await axios.post(API_URL, {
      name,
      number,
      email,
      textarea,
    });

    // Swal.fire({
    //   icon: "success",
    //   title: "Our Message Has Been Sent!",
    //   text: "Our Team Will Contact You Shortly  ",
    //   showConfirmButton: false,
    //   timer: 2000,
    // });

    setLoading(false);
    navigate("/tkpage");

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };
  return (
    <div>
      <div className="block md:grid-cols-2 md:hidden">
        <div className="block md:hidden ss:pt-14 sl:pt-16 ">
          {/* <img
            src="https://athulyahomecare.com/lp/images/sm-banner.png"
            alt="smpic"
          /> */}
          <img
            src="https://athulyahomecare.com/lp/images/sm-bannerk.jpg"
            alt="mbbanner"
          />
        </div>
        <div className="container">
          {loadingInProgress ? (
            <div className="flex justify-center h-56 gap-4">
              <div className="grid content-center">
                <div
                  class="w-12 h-12 rounded-full animate-spin
              border-x-8 border-solid border-pink-500 border-t-transparent"
                ></div>
              </div>
            </div>
          ) : (
            <div className="mt-5 mb-5 text-justify ">
              <h1 className="flex justify-center p-2 font-sans text-xl font-semibold xl:text-3xl md:text-white text-sky-800 md:p-5 ">
                Submit Your Details
              </h1>
              <div>
                <div className="p-5">
                  <form onSubmit={handleSubmit(sendDataToAPI)}>
                    <div className="">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          {...register("name")}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="block py-2.5 px-0 w-full text-xl font-Robot font-semibold   text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.name?.message}
                        </p>
                        <label
                          for="name"
                          className="peer-focus:font-semibold  text-lg font-Robot font-semibold   absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          className="block py-2.5 px-0 w-full text-lg font-Robot font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.email?.message}
                        </p>
                        <label
                          for="floating_email"
                          className="peer-focus:font-semibold   text-lg font-Robot font-semibold    absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          {...register("number")}
                          onChange={(e) => setNumber(e.target.value)}
                          type="number"
                          name="number"
                          id="number"
                          className="block py-2.5 px-0 w-full  text-lg font-Robot  font-semibold  text-gray-900 bg-transparent border-0 border-b-2 border-sky-900 appearance-none   focus:outline-none focus:ring-0 focus:border-sky-800 peer"
                          placeholder=" "
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.number?.message}
                        </p>
                        <label
                          for="number"
                          className="peer-focus:font-semibold   text-lg font-Robot  font-semibold  absolute  text-sky-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Mobile Number
                        </label>
                      </div>
                      <div className="flex flex-col mt-2">
                        <label
                          className="text-lg font-semibold text-sky-800"
                          htmlFor="textarea"
                        >
                          Message
                        </label>
                        <input
                          {...register("textarea")}
                          onChange={(e) => setTextarea(e.target.value)}
                          name="textarea"
                          id="textarea"
                          rows="4"
                          className="px-3 py-3 mt-2 font-semibold border-2 rounded-lg peer w-100 bg-zinc-100 border-sky-800 focus:border-sky-700 focus:outline-none"
                        />
                        <p className="font-semibold text-pink-500 font-Poppins">
                          {errors.textarea?.message}
                        </p>
                      </div>
                      <div className="flex justify-center md:py-1">
                        <button className="relative px-6 py-3 m-1 overflow-hidden font-bold text-white bg-pink-500 border-2 rounded-md cursor-pointer group border-sky-800">
                          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span className="relative text-white transition duration-300 group-hover:text-white ease">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MbBanner;
