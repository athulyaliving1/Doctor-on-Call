import React from "react";

function FaqSection() {
  return (
    <div>
      <section className="bg-zinc-100">
        <div className="container py-8 mx-auto ">
          <div className="grid gap-6 md:grid-cols-1 place-content-between">
            <div className="grid place-content-center">
              <h2 className="btn-sub-heading">
                Why Doctor at Home Service from Athulya?
              </h2>
              <p className="mt-5 text-justify btn-sub-para">
                At Athulya, comprehensive medical care is delivered by a highly
                skilled interdisciplinary team. Despite the availability and
                diversity of home health care options in the market, Athulya
                goes above and beyond to make sure that their care is a holistic
                experience for the elderly. Every aspect of the elderly
                patients' treatment is evaluated by the medical staff at
                Athulya, who then customize it as necessary. In order to help
                seniors to heal more rapidly, moral and emotional support are
                also necessary in addition to medical care. Treatment sessions
                appear less frightening and more like a family conversation when
                you can trust your visiting doctor and he or she becomes a
                regular part of your life. The elderly need someone they can
                trust, and Athulya serves as that person. This enables the
                elderly to have better medical outcomes and helps them develop
                closer relationships with the house visit doctors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqSection;
