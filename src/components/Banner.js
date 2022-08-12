import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
    <div>
      <section class="relative flex flex-wrap lg:h- lg:items-center">
        <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="max-w-lg mx-auto text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p class="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid  space-x-10 ">
                <div class="flex flex-col mt-2 ">
                  <label for="name" class="hidden">
                    Enter Your Name
                  </label>
                  <input
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                  />
                </div>
                <div class="flex flex-col mt-2 ">
                  <label className="hidden">Email</label>
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    name="user_email"
                    placeholder="Enter your Email Id"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                  />
                </div>
                <div class="flex flex-col mt-2 ">
                  <label className="hidden">Number</label>
                  <input
                    onChange={(event) => setNumber(event.target.value)}
                    maxLength="10"
                    type="number"
                    name="user_number"
                    placeholder="Enter your  Number"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                  />
                </div>
                <div class="flex flex-col mt-2">
                  <label className="hidden">Message</label>
                  <textarea
                    onChange={(event) => setMessage(event.target.value)}
                    type="text"
                    name="user_message"
                    placeholder="Enter Your Message"
                    rows="1"
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-sky-700 focus:outline-none required"
                  />
                </div>
                <div className="justify-center  md:py-1">
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

        <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/team-1.jpeg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Banner;
