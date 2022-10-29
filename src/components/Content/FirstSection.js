import React from "react";

function FirstSection() {
  return (
    <div className="bg-zinc-100">
      <div className="container py-16 mx-auto lg:py-5">
        <div className="mt-5">
          <h1 className="pb-8 btn-heading">What is doctor-on-call service?</h1>
          <p className="text-justify btn-sub-para">
            For general health examinations, seasonal fever, acute illnesses,
            chronic illnesses, and other causes, you'll almost likely need to
            see a doctor. Sometimes we feel physically drained and want to stay
            at home, making even going to the doctor seem challenging. If given
            the option, we would like to have a doctor come to us rather than
            visit one ourselves.
          </p>
          <br />
          <p className="text-justify btn-sub-para lg:py-5">
            Athulya home healthcare has started offering healthcare services at
            home in an effort to close the care gap. The doctor who comes to
            your house is a qualified expert who can counsel you on available
            treatments and assist you while you recover.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid lg:gap-2 ">
            <div className="rounded lg:transition lg:duration-300 ">
              <div className="flex items-center mb-1">
                <p className="text-left btn-heading text-sky-800">
                  Home visit doctors in Chennai
                </p>
              </div>
              <p className="text-justify btn-sub-para">
                For those who find it difficult to visit the doctor's office,
                Athulya Home healthcare offers top-notch medical care in the
                convenience of your own home. All you need to do is search for
                "doctor on call near me," and the Athulya staff will do the
                rest.
              </p>
              <br />
              <p className="text-justify btn-sub-para">
                Elderly people frequently miss regular doctor's appointments due
                to a variety of factors, including lack of motivation, physical
                constraints, current hospitalization, and other factors. Their
                likelihood of being admitted to the emergency room or needing a
                lengthy hospital stay may rise as a result.
              </p>
              <br />
              <p className="text-justify btn-sub-para">
                Athulya provides elders with a comfortable at-home health care
                option with its doctor visits in Chennai
              </p>
            </div>
          </div>

          <div className="grid md:relative md:col-span-1 lg:col-span-2 place-content-center">
            <img
              className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src="https://res.cloudinary.com/drywqd3hf/image/upload/v1667026454/2250-x-1500-doctor-visit_etcwlu.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 ">
          <h1 className="pb-10 btn-heading">
            A Brief Overview of home visit doctors in chennai
          </h1>
          <p className="btn-sub-para">
            In Chennai, Athulya Home Healthcare provides a doctor-on-call
            service. Seniors can see doctors for everything from routine
            checkups to treatment for ongoing medical concerns, all from the
            comfort of their bed, owing to the extensive range of doctor home
            consultation services.
          </p>
          <br />
          <p className="btn-sub-para">
            Seniors who require medical attention can receive home visits from
            geriatric doctors in Chennai. Post-operative treatment, accident
            care, and chronic care for diseases including diabetes, congestive
            heart failure, and chronic obstructive pulmonary disease are all
            covered by the consultation at home (COPD).
          </p>
          <br />
          <p className="btn-sub-para">
            Contact Athulya Home healthcare right away to bring the comfort of
            treatment from expert doctors right next to your loved one's bed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
