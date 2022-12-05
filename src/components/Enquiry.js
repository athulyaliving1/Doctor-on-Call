import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Helper.js/URL"

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required().min(3).max(15),
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

function XlForm() {
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
    <div className="bg-zinc-200">
      {/* 2xl Large devices */}
      <div className="container mx-auto">
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
          <div className="hidden p-3 xl:block font-Ubuntu">
            <form
              onSubmit={handleSubmit(sendDataToAPI)}
              className="flex flex-col justify-center p-6"
            >
              <div className="grid grid-flow-col space-x-5 md:grid-cols-5">
                <div className="flex flex-col">
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    className="block w-full px-3 py-3 m-0 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                    name="name"
                  />
                  <p className="font-semibold text-pink-500">
                    {errors.name?.message}
                  </p>
                </div>

                <div className="flex flex-col">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="block w-full px-3 py-3 m-0 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                    name="email"
                  />
                  <p className="font-semibold text-pink-500">
                    {errors.email?.message}
                  </p>
                </div>

                <div className="flex flex-col">
                  <input
                    {...register("number")}
                    type="number"
                    id="number"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter Your Number"
                    className="block w-full px-3 py-3 m-0 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                    name="number"
                  />
                  <p className="font-semibold text-pink-500">
                    {errors.number?.message}
                  </p>
                </div>

                <div className="flex flex-col">
                  <input
                    {...register("textarea")}
                    id="textarea"
                    onChange={(e) => setTextarea(e.target.value)}
                    placeholder="Enter Your Message"
                    rows="1"
                    className="block w-full px-3 py-3 m-0 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                    name="textarea"
                  />
                  <p className="font-semibold text-pink-500">
                    {errors.textarea?.message}
                  </p>
                </div>

                <div className="justify-center ">
                  <button
                    className="px-6 py-3 font-bold text-white transition duration-100 ease-in-out bg-pink-600 rounded-lg hover:ring-4 ring-sky-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default XlForm;