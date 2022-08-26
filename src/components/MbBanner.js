import React, { useState } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

function MbBanner() {
  const [status, setStatus] = useState("Submit");

  const formSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, textarea, number } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      textarea: textarea.value,
    };
    let response = await fetch(
      "https://contact-app-server-athulya.herokuapp.com/contact",
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

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };
  return (
    <div>
      <div className=" md:grid-cols-2 block md:hidden">
        <div className="md:hidden block mt-10 md:mt-0">
          <img
            src="https://athulyahomecare.com/lp/images/sm-banner.png"
            alt="smpic"
          />
        </div>
        <div className="">
          <div className="container text-justify mt-5 mb-5 ">
            <h1 className="xl:text-3xl  flex justify-center text-xl font-sans font-semibold  md:text-white  text-sky-800 md:p-5 p-2  ">
              Our Doctor Visits At Home
            </h1>
            <div className="grid grid-flow-row  bg-zinc-300  rounded-2xl px-5 p-3 xl:block  font-Poppins">
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
                            className="text-sky-800  text-xl font-semibold"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            class=" peer border border-slate-400  w-auto  mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-non"
                          />
                          {errors.name && touched.name ? (
                            <p className="text-pink-500 font-Poppins font-semibold">
                              {errors.name}
                            </p>
                          ) : null}
                        </div>
                        <div class="flex flex-col mt-2 ">
                          <label
                            htmlFor="email"
                            className="text-sky-800  text-xl font-semibold"
                          >
                            Email
                          </label>

                          <Field
                            type="email"
                            id="email"
                            name="email"
                            class="peer border border-slate-400  w-auto  mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none "
                          />
                          {errors.email && touched.email ? (
                            <p className="text-pink-500 font-Poppins font-semibold">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                        <div class="flex flex-col mt-2 ">
                          <label
                            className="text-sky-800  text-xl font-semibold"
                            htmlFor="fnumber"
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
                            <p className="text-pink-500 font-Poppins font-semibold">
                              {errors.number}
                            </p>
                          ) : null}
                        </div>
                        <div class="flex flex-col mt-2">
                          <label
                            className="text-sky-800  text-xl font-semibold"
                            htmlFor="textarea"
                          >
                            Message
                          </label>
                          <Field
                            name="textarea"
                            id="textarea"
                            cols="30"
                            rows="3"
                            class="peer border  w-auto mt-2 py-3 px-3 rounded-lg bg-white   border-gray-400   font-semibold focus:border-sky-700 focus:outline-none"
                          ></Field>
                          {errors.textarea && touched.textarea ? (
                            <p className="text-pink-500 font-Poppins font-semibold">
                              {errors.textarea}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex justify-center  md:py-1">
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
  );
}

export default MbBanner;
