import React, { useState } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import Heading from "./Heading";


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3)
    .max(15)
    .required(),
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required("This field is required."),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(10)
    .required(),

  textarea: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter text only")
    .min(10)
    .max(40)
    .required(),
}).required();

function Banner() {
  const [status, setStatus] = useState("Submit");

  const formSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, textarea, number } = e.target.elements;

    if (!name || !email || !number || !textarea) {
      Swal.fire({
        title: "Error!",
        text: "Something Went Wrong!!!",
        icon: "error",
        confirmButtonText: false,
      });

      let details = {
        name: name.value,
        email: email.value,
        number: number.value,
        textarea: textarea.value,
      };
      let response = await fetch(
        "https://contact-app-server-athulya.herokuapp.com/contactdoctoroncallcochin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        }
      );



      
      setStatus("Submit");
      let result = await response.json();

      if (result.status === "ERROR")
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong!!!",
          icon: "error",
          confirmButtonText: false,
        });
      else {
        Swal.fire({
          icon: "success",
          title: "Our Message Has Been Sent!",
          text: "Our Team Will Contact You Shortly  ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };
  return (
    <div className="hidden pt-5 bg-zinc-100 md:pt-16 md:mt-0 md:block">
      <div
        class="
		md:bg-[url('https://athulyahomecare.com/lp/images/banner.png')]  h-full w-full bg-cover bg-no-repeat   "
      >
        <div className="grid md:grid-cols-2">
          <div className="">
            <div className="container py-24 mt-5 mb-5 text-justify">
              <h1 className="flex justify-center p-2 font-sans text-xl font-semibold xl:text-3xl md:text-white text-sky-800 md:p-5 ">
                Our Doctor Visits At Home
              </h1>
              <div className="grid grid-flow-row p-3 px-5 bg-zinc-300 rounded-2xl xl:block font-Poppins">
                <div>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      textarea: "",
                      number: "",
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                      // same shape as initial values
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form onSubmit={formSubmit}>
                        <div className="">
                          <div class="flex flex-col">
                            <label
                              className="text-xl font-semibold text-sky-800"
                              htmlFor="name"
                            >
                              Name
                            </label>
                            <Field
                              name="name"
                              type="text"
                              id="name"
                              class=" border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none "
                            />
                            {errors.name && touched.name ? (
                              <p className="font-semibold text-pink-500 font-Poppins">
                                {errors.name}
                              </p>
                            ) : null}
                          </div>
                          <div class="flex flex-col mt-2 ">
                            <label
                              htmlFor="email"
                              className="text-xl font-semibold text-sky-800"
                            >
                              Email
                            </label>

                            <Field
                              type="email"
                              id="email"
                              name="email"
                              class="peer border border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none "
                            />
                            {errors.email && touched.email ? (
                              <p className="font-semibold text-pink-500 font-Poppins">
                                {errors.email}
                              </p>
                            ) : null}
                          </div>
                          <div class="flex flex-col mt-2 ">
                            <label
                              className="text-xl font-semibold text-sky-800"
                              htmlFor="number"
                            >
                              Number
                            </label>
                            <Field
                              id="number"
                              type="number"
                              name="number"
                              class="peer  w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none"
                            />
                            {errors.number && touched.number ? (
                              <p className="font-semibold text-pink-500 font-Poppins">
                                {errors.number}
                              </p>
                            ) : null}
                          </div>
                          <div class="flex flex-col mt-2">
                            <label
                              className="text-xl font-semibold text-sky-800"
                              htmlFor="textarea"
                            >
                              Message
                            </label>
                            <Field
                              name="textarea"
                              id="textarea"
                              cols="30"
                              rows="3"
                              class="peer border  w-100 mt-2 py-3 px-3 rounded-lg bg-white   border-gray-400   font-semibold focus:border-sky-700 focus:outline-none"
                            ></Field>
                            {errors.textarea && touched.textarea ? (
                              <p className="font-semibold text-pink-500 font-Poppins">
                                {errors.textarea}
                              </p>
                            ) : null}
                          </div>
                          <div className="flex justify-center md:py-1">
                            <button
                              type="submit"
                              class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg mt-3   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                            >
                              {status}
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
