import React from "react";

function FirstSection() {
  return (
    <div className="bg-zinc-100">
      <div className="container py-16 mx-auto lg:py-5">
        <div className="mt-5">
          <h1 className="pb-8 btn-heading">Athulya - Best Doctor on Call services in Coimbatore</h1>
          <p className="text-justify btn-sub-para">
            Doctor Home Visits in Coimbatore by Athulya Home Healthcare provides quality medical care for seniors at home by experienced geriatric specialists. Being a pioneer in geriatric home healthcare, Athulya provides quality treatment at home for elders which is easily accessible and affordable. All you have to do is a simple search for ‘doctor on call near me,’ and the team of Athulya will take care of the rest.         </p>

        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid lg:gap-2 ">
            <div className="rounded lg:transition lg:duration-300 ">

              <p className="text-justify btn-sub-para">
                With expert geriatricians and specialists in various domains of medical science, Athulya’s doctors have served more than 7500+ seniors in the span of 8 years and continuing to serve more. With Superior medical care at the comfort of home for seniors, Athulya’s doctor on call services has a positive reputation of goodwill and gained the trust of the geriatric community in India.
              </p>
              <br />
              <p className="text-justify btn-sub-para">
                Elderly people frequently miss regular doctor's appointments due to a variety of factors, including lack of motivation, physical constraints, current hospitalization, and other factors. The medical professionals at Athulya are familiar with the needs of the elderly and help seniors develop the trust and leap of faith they need. As a result, the healing process and improvements in the seniors health problems are more apparent during the course of treatment.
              </p>

            </div>
          </div>

          <div className="grid md:relative md:col-span-1 lg:col-span-2 place-content-center">
            <img
              className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src="https://athulyaliving.com/images/doc-vist-chen-1-min.webp"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default FirstSection;
