import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

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

function MdEnquiry() {
  // const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    if (!name || !number || !email || !textarea) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    await axios.post(
      "https://contact-app-server-athulya.herokuapp.com/contactdoctoroncallcoimbatore",
      {
        name,
        number,
        email,
        textarea,
      }
    );

    Swal.fire({
      icon: "success",
      title: "Our Message Has Been Sent!",
      text: "Our Team Will Contact You Shortly  ",
      showConfirmButton: false,
      timer: 2000,
    });

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };

  return (
    <div className="bg-zinc-400">
      {/* Md devices */}
      <div className="container mx-auto hidden 2xl:hidden md:block xl:hidden ">
        <div className="grid-rows-1  p-3  font-Poppins">
          <form
            onSubmit={handleSubmit(sendDataToAPI)}
            class="p-6  flex flex-col justify-center  "
          >
            <div className="">
              <div className="flex flex-col">
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5"
                  name="name"
                />
                <p className="text-pink-500 font-Poppins font-semibold">
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
                  className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5 "
                  name="email"
                />
                <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.email?.message}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  {...register("number")}
                  type="number"
                  id="number"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter Your Mobile number"
                  className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5"
                  name="number"
                />
                <p className="text-pink-500 font-Poppins font-semibold">
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
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none "
                  name="textarea"
                />
                <p className="text-pink-500 font-Poppins font-semibold">
                  {errors.textarea?.message}
                </p>
              </div>

              <div className="flex justify-center ">
                <button
                  class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg mt-3   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MdEnquiry;
