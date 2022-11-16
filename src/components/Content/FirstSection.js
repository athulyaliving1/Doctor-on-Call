import React from "react";

function FirstSection() {
  return (
    <div className="bg-zinc-100">
      <div className="container py-16 mx-auto lg:py-5">
        <div className="mt-5">
          <h1 className="pb-3 btn-heading">
            Best Doctor Home visits in Bangalore
          </h1>
          <p className="text-justify btn-sub-para">
            Doctor Home Visits in Bangalore by Athulya Home Healthcare provides
            top-class medical care for seniors at home by geriatric specialists
            across Bangalore. Being one of India’s largest geriatric care
            provider, Athulya provides the best consultations at home for
            elders. Our consultations are easy to access and are at affordable
            costs. If ‘private doctors near me for home visit’ has been topping
            your search list then you can just get connected with our team and
            we will take care of the rest.With geriatric specialists and experts
            in medical science, Athulya’s doctors have served more than 7500+
            seniors for nearly a decade now. With a remarkable medical care for
            seniors at home, Athulya’s doctor on call services has created a
            positive impact in the lives of the elderly and garnered a sense of
            trust among thousands of family who have elders at home.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid lg:gap-2 ">
            <div className="rounded lg:transition lg:duration-300 ">
              <h2 className="btn-sub-heading">
                Instilling faith with doctor home visit services
              </h2>
              <p className="text-justify btn-sub-para">
                One of the common problems faced by the elderly people is that
                they frequently miss regular doctor appointments due to a
                various range of factors, including lack of motivation, physical
                constraints, current hospitalization setups, mobility, long
                standing queues, risk of infections and so on. Understanding
                these hindrances and with dedication to improve seniors’ health
                at where they are, Athulya’s doctors serve elders with
                wholehearted passion, commitment and dedication. The medical
                professionals at Athulya are also familiar with the needs of the
                elderly and help seniors develop the trust and leap of faith
                they need. This also helps seniors open up with our medical
                professionals easily without much hassles. As a result, the
                healing process and improvements in the seniors health problems
                are more prominent during the course of treatment.
              </p>
              <br />
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
