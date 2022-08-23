import React, { useState } from "react";
import Swal from "sweetalert2";
// import Heading from "./Heading";

function Banner() {
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
    <div className=" bg-zinc-100 pt-5 md:pt-16 md:mt-0 md:block hidden  ">
      <div
        class="
		md:bg-[url('https://athulyahomecare.com/lp/images/banner.png')]  h-full w-full bg-cover bg-no-repeat   "
      >
        <div className="grid md:grid-cols-2">
          <div className="md:hidden block mt-10 md:mt-0"></div>
          <div className="">
            <div className="container text-justify mt-5 mb-5 ">
              <h1 className="xl:text-3xl  flex justify-center text-xl font-sans font-semibold  md:text-white  text-sky-800 md:p-5 p-2  ">
                Our Doctor Visits At Home
              </h1>
              <div className="grid grid-flow-row  bg-zinc-300  rounded-2xl px-5 p-3 xl:block  font-Poppins">
                <div>
                  <form onSubmit={formSubmit}>
                    <div className="">
                      <div class="flex flex-col">
                        <label
                          className="text-sky-800  text-xl font-semibold"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          class=" border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none "
                        />
                      </div>
                      <div class="flex flex-col mt-2 ">
                        <label
                          htmlFor="email"
                          className="text-sky-800  text-xl font-semibold"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          class="peer border border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none "
                        />
                      </div>
                      <div class="flex flex-col mt-2 ">
                        <label
                          className="text-sky-800  text-xl font-semibold"
                          htmlFor="fnumber"
                        >
                          Number
                        </label>
                        <input
                          id="number"
                          type="number"
                          name="fnumber"
                          class="peer  w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none"
                        />
                      </div>
                      <div class="flex flex-col mt-2">
                        <label
                          className="text-sky-800  text-xl font-semibold"
                          htmlFor="textarea"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="textarea"
                          cols="30"
                          rows="3"
                          class="peer border  w-100 mt-2 py-3 px-3 rounded-lg bg-white   border-gray-400   font-semibold focus:border-sky-700 focus:outline-none"
                        ></textarea>
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
                  </form>
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
