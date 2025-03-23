import React from "react";


const CostEffective = () => {
  return (
    <section id="costEffective" className="pt-16 md:pt-20 lg:pt-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Cost-Effective
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                Our solutions are designed to be cost-effective and efficient.
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                    Open Development
                  </h3>
                  <p className="text-base text-body-color">
                    We build AI in the open to reduce silos and redundancies that waste resources and harm the environment. Collaboration prevents duplicated efforts, cutting unnecessary energy use.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                    Carbon-Conscious Innovation
                  </h3>
                  <p className="text-base text-body-color">
                    We’re deeply aware of AI’s carbon footprint and are actively optimizing models and data centers for efficiency—reducing power consumption while maintaining performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Our Commitment
              </h3>
              <p className="mb-4 text-base text-body-color">
                By prioritizing openness and efficiency, we aim to lower AI’s environmental cost.
              </p>
              <p className="text-base text-body-color">
                Sustainable AI development ensures a healthier planet for future generations.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostEffective;