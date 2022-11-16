import React from "react";

function ThreeSection() {
  return (
    <section class="">
      <div class="container  py-12 mx-auto ">
        <div className="grid content-center mb-12">
          <div>
            <h2 className="text-center btn-heading">
              World class Doctor-on-call in Bangalore
            </h2>
          </div>
        </div>
        <div class="grid md:grid-cols-2 w-full place-items-center ">
          <div class="lg:w-5/5 md:w-5/5 md:pr-10 md:py-6 ">
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute  left-0 flex items-center justify-center">
                <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
              </div>

              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>

              <div class="flex-grow pl-4">
                <h2 className="btn-sub-heading ">
                  When might seniors need Bangalore's doctor-on-call ?
                </h2>
                <p class="leading-relaxed  btn-sub-para text-justify">
                  Elders who prefer to get cared at the comfort of home and
                  mobility issues who cannot visit hospitals due to various
                  reasons can afford doctor visit at home services in Bangalore.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>
              <div class="flex-grow pl-4">
                <h2 className="text-justify btn-sub-heading">
                  Regular checkup
                </h2>
                <p class="leading-relaxed btn-sub-para">
                  As is generally known, routine physicals and monitoring our
                  ailments can be highly helpful for both prevention and
                  therapy. Seniors need it the most because of the body's
                  natural ageing process. Doctor visits at home services can be
                  of great help for seniors to track and keep a check on their
                  routine.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>
              <div class="flex-grow pl-4">
                <h2 className="text-justify btn-sub-heading">
                  Diabetology care
                </h2>
                <p class="leading-relaxed btn-sub-para">
                  Diabetes, is one such condition that has a significant impact
                  on elderly patients' heart rates and blood glucose levels,
                  necessitating careful monitoring by a diabetologist. Having a
                  suitable specialist doctor visit at their own home can keep
                  the diabetic levels under control.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>
              <div class="flex-grow pl-4">
                <h2 className="text-justify btn-sub-heading ">Neuro care</h2>
                <p class="leading-relaxed btn-sub-paratext-justify">
                  Similar to heart illness, a nervous system disorder is
                  exceedingly serious and calls for exceptional care and
                  constant health monitoring. Family members can be under a lot
                  of stress at this time. A skilled & expertise doctor can help
                  the elders recover without much hassle at the comfort of their
                  own homes.
                  <br />
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>
              <div class="flex-grow pl-4">
                <h2 className="text-justify btn-sub-heading">
                  Ortho & Physio care
                </h2>
                <p class="leading-relaxed btn-sub-para">
                  With the aid of a doctor's in-home care service, seniors with
                  orthopaedic and physiotherapy concerns can rehabilitate
                  faster. The finest geriatric doctors of Athulya have helped
                  seniors attain mobility and the needed assistance in their own
                  homes.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="https://athulyaliving.com/images/tick.png"
                  alt="tick"
                />
              </div>
              <div class="flex-grow pl-4">
                <h2 className="btn-sub-heading ">Postoperative care</h2>
                <p class="leading-relaxed btn-sub-para text-justify">
                  Seniors need specific medical care during the critical
                  postoperative time. The best healthcare treatments and
                  professional advice for your senior's wellbeing are delivered
                  at your house by Athulya's doctor home visit services.
                </p>
              </div>
            </div>
          </div>

          <div>
            {/* This is second grid */}

            <div className="">
              <div>
                {/* <div>
                  <h2 className="text-center btn-sub-heading">
                    World class doctors Doctor-on-call in Bangalore
                  </h2>
                  <p className="text-justify btn-sub-para">
                    Most of the people in Bangalore are busy working
                    professionals and there is a need for them to take care of
                    their elders. But the major problem here is the time taken
                    in the hospitals waiting for appointments can be tiring and
                    boring for both the elders and the individual care taker. So
                    receiving a doctor consultations at home can be the best
                    option for them. Doctors from Athulya provide the best
                    geriatric care possible for elders at home. Athulya’s
                    doctors are fully qualified and have extensive knowledge on
                    treating geriatric patients at the comfort of elder’s home.
                    Also the medical professionals at Athulya treat elders with
                    compassion and utmost respect. This enhances the comfort for
                    elders and helps them open up about their health conditions
                    with the doctors.
                  </p>
                </div> */}
                <img
                  className="rounded-md"
                  src="https://athulyaliving.com/images/doc-vist-chen-3-min.webp"
                  alt="doctor vist "
                />
                {/* <div className="mt-2 md:mt-5">
                  <h2 className="text-center btn-sub-heading">
                    Doctor Tele-consultations - Aiding more comfortability
                  </h2>
                  <p className="text-justify btn-sub-para">
                    Doctor tele-consultation is also one important t option for
                    elders to get treated at the comfort of home even at
                    emergency hours. This avoids major mishaps from happening.
                    Exactly like doctor visits at home services, doctor
                    tele-consultations also leverages few benefits for seniors.
                    Even though the elder and the doctor is separated by a
                    distance, the connectivity and predictive intelligence that
                    Athulya’s doctors have, helps them find out the health issue
                    with the elders easily and help them exactly like the help
                    they provide in the home consultation doctor services.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-center text-black font-Poppins btn-sub-para">
            All these are categorised under 14 care plan segments which is
            highly customized according to the needs of the seniors. To avail
            Athulya’s specialist doctor visit at home services, All you need to
            do is search for “Doctor on call services in Bangalore”.
          </p>
        </div>
      </div>
      {/* This is second grid */}

      <div class="container  py-12 mx-auto ">
        <div className="grid content-center mb-12">
          <div>
            <h2 className="text-center btn-heading">
              Conveniences of Choosing Doctor visit at home in Bangalore
            </h2>
            <p className="text-center btn-sub-para ">
              The need for doctor-on-call services has increased, and making an
              appointment online is now both more accessible and less expensive.
              A few advantages of having a doctor visit you at home are
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 w-full place-items-center  gap-5">
          <div>
            <img
              className="rounded-md"
              src="https://athulyaliving.com/images/doc-vist-chen-2-min.webp"
              alt="doctorvist "
            />
          </div>
          <div>
            {/* This is second grid */}

            <div className="">
              <div class="lg:w-5/5 md:w-5/5 md:pr-10 md:py-6  ">
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute  left-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>

                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>

                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      A more individualised and customised approach
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      World class medical care
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      Finest of treatment options
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      Reduction of unnecessary hospital visits
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      Reducing unnecessary hospital visits
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-pink-400 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      Cost effective & Comfortable
                    </h2>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-800 inline-flex items-center justify-center text-white relative z-10">
                    <img
                      src="https://athulyaliving.com/images/tick.png"
                      alt="tick"
                    />
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 className="text-xl xl:text-2xl btn-sub-heading">
                      highly skilled and experienced geriatric specialists
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeSection;
