import React from "react";

function FaqSection() {
  return (
    <div>
      <section className="bg-zinc-100">
        <div className="container py-8 mx-auto ">
          <div className="grid gap-6 md:grid-cols-2 place-content-between">
            <div className="grid place-content-center">
              <h1 className="btn-sub-heading">
                Want to schedule a home visit from a doctor?
              </h1>
              <p className="mt-10 btn-sub-para ">
                We offer you a selection of on-call physicians who have all
                undergone thorough screening and background checks. Get a
                flexible and expert doctor right at your home for urgent and
                immediate care.
              </p>
            </div>
            <div>
              <h1 className="btn-sub-heading">
                Contact Athulya For An Home Visit Doctors In Chennai
              </h1>
              <p className="mt-10 btn-sub-para ">
                Athulya provides you with the best private doctors near me home
                visit, with the most skilled and knowledgeable medical
                professionals at your door. We work hard to provide you with a
                variety of healthcare services while keeping your comfort in
                mind. Our compassionate, skilled doctors visit you at home to
                address your medical needs, whether you need a one-time doctor
                consultation or routine checkups.
              </p>
              <br />
              <p className="btn-sub-para ">
                So, without doubts, call us if you or any member of your family
                requires medical care. Get the greatest treatment and medical
                advice delivered right to your home. With Athulya at your
                disposal, maintain good health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FaqSection */}
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center py-8 ">
          <h2 className="btn-heading">Frequently Asked Questions</h2>
          {/* <p className="mt-4 mb-8 ">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p> */}
          <div className="space-y-4">
            <details className="w-full border border-pink-500 rounded-lg">
              <summary className="px-4 py-6 text-xl font-semibold capitalize focus:outline-none focus-visible:ring-violet-800 lg:text-2xl sm:text-lg text-sky-900">
                1. What are the chronic illnesses that a doctor can visit at
                home?
              </summary>
              <p className="px-4 py-6 pt-0 ml-8 -mt-4 btn-sub-para ">
                Memory care, Asthma Atrial Fibrillation, Cancer Care,
                Cardiovascular Disease, Chronic Obstructive Pulmonary Disease,
                Depression, Diabetes, Hypertension, Infectious Diseases, Acute
                Rehabilitation, and Functional Decline are a few ailments for
                which elders can receive doctor home visits.
              </p>
            </details>
            <details className="w-full border border-pink-500 rounded-lg">
              <summary className="px-4 py-6 text-xl font-semibold capitalize focus:outline-none focus-visible:ring-violet-800 lg:text-2xl sm:text-lg text-sky-900">
                2. Do Athulya’s nursing services have specific hours?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 btn-sub-para ">
                Depending on the patient's request and the level of existing
                support, our service hours can range from 12 to 24 hours.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
