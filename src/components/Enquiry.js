import React, { useState } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object({
  name: Yup.string().required().min(5).max(15),
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

function XlForm() {
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
      "https://contact-app-server-athulya.herokuapp.com/contactdoctoroncallhydrabad",
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
      <div>
        <div className="grid-cols-5 bg-zinc-400 px-40 p-3 xl:block hidden font-Poppins">
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
              <Form
                onSubmit={formSubmit}
                class="p-6  flex flex-col justify-center  "
              >
                <div className="grid grid-flow-col space-x-10">
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                      className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5"
                      name="name"
                    />

                    {errors.name && touched.name ? (
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col">
                    <Field
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5 "
                      name="email"
                    />
                    {errors.email && touched.email ? (
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col">
                    <Field
                      type="number"
                      id="number"
                      placeholder="Enter Your Mobile number"
                      className="w-100 mt-2 py-3 rounded-lg bg-white border border-gray-400 font-semibold focus:border-sky-700 focus:outline-none placeholder:px-5"
                      name="number"
                    />
                    {errors.number && touched.number ? (
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.number}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col">
                    <Field
                      id="textarea"
                      placeholder="Enter Your Message"
                      rows="1"
                      class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none "
                      name="textarea"
                    />
                    {errors.textarea && touched.textarea ? (
                      <p className="text-pink-500 font-Poppins font-semibold">
                        {errors.textarea}
                      </p>
                    ) : null}
                  </div>

                  <div className=" justify-center ">
                    <button
                      class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg mt-3   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                      type="submit"
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
  );
}

export default XlForm;
