import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import Heading from "./Heading";

function Banner() {
  const form = useRef();

  const [name, setName] = useState(0);
  const [email, setEmail] = useState(0);
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xipi3n7",
        "template_uvl7ufv",
        form.current,
        "0NLux3QCNJGSnY4xF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const shoot = () => {
    if (!name || !email || !number || !message) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    Swal.fire({
      icon: "success",
      title: "Your message has been send !!!",
      text: " Kindly wait our team contact you shortly.",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div className=" bg-zinc-100 pt-5 md:pt-16 md:mt-0  mt-10 md:pb-16">
      <div className="grid md:grid-cols-2">
        <div className="">
          <div className="container text-justify ">
            <h1 className="xl:text-3xl  flex justify-center text-xl font-sans font-semibold  text-sky-800 md:p-5 p-2 ">
              Our Doctor Visits At Home
            </h1>
            <div className="grid grid-flow-row  bg-zinc-300  rounded-2xl px-5 p-3 xl:block  font-Poppins">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="">
                    <div class="flex flex-col">
                      <label
                        className="text-sky-800  text-xl font-semibold"
                        for="name"
                      >
                        Name
                      </label>
                      <input
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        class="peer border border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none required"
                      />

                      <p class="invisible peer-invalid:visible text-pink-700 font-medium">
                        Please enter your name
                      </p>
                    </div>
                    <div class="flex flex-col mt-2 ">
                      <label className="text-sky-800  text-xl font-semibold">
                        Email
                      </label>

                      <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        class="peer border border-slate-400  w-100 mt-2 py-3 px-3 rounded-lg bg-white  font-semibold focus:border-sky-700 focus:outline-none required"
                      />
                      <p class="invisible peer-invalid:visible text-red-700 font-light">
                        Please enter a valid email address
                      </p>
                    </div>
                    <div class="flex flex-col mt-2 ">
                      <label
                        className="text-sky-800  text-xl font-semibold"
                        for="number"
                      >
                        Number
                      </label>
                      <input
                        onChange={(event) => setNumber(event.target.value)}
                        maxLength="10"
                        id="number"
                        type="number"
                        name="user_number"
                        required
                        class="peer  w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                      />
                      <p class="invisible peer-invalid:visible text-red-700 font-light">
                        Please enter a vaild Mobile Number
                      </p>
                    </div>
                    <div class="flex flex-col mt-2">
                      <label
                        className="text-sky-800  text-xl font-semibold"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        onChange={(event) => setMessage(event.target.value)}
                        name="user_message"
                        id="message"
                        cols="30"
                        rows="3"
                        required
                        class="peer border  w-100 mt-2 py-3 px-3 rounded-lg bg-white   border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                      ></textarea>
                      <p class="invisible peer-invalid:visible text-red-700 font-light">
                        This field cannot be empty
                      </p>
                    </div>
                    <div className="flex justify-center  md:py-1">
                      <button
                        onClick={shoot}
                        type="submit"
                        value="Send"
                        class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg mt-3   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                      >
                        Submit
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
  );
}

export default Banner;
