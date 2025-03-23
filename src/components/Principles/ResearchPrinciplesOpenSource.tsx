
import React from "react";

const ResearchPrinciplesOpenSource = () => {
  return (
    <section id="researchPrinciplesOpenSource" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">Open-Source Foundations for Tomorrow’s Research</h2>
                <p className="mb-6 text-base font-medium text-body-color">How open-source principles enhance the future of research.</p>
                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">Core Open-Source Principles</h3>
                      <ul className="list-disc pl-6 text-base text-body-color">
                        <li className="mb-2">
                          <strong>Transparency:</strong> Sharing code and data openly to foster trust and reproducibility.
                        </li>
                        <li className="mb-2">
                          <strong>Accessibility:</strong> Making resources freely available to researchers worldwide.
                        </li>
                        <li className="mb-2">
                          <strong>Community:</strong> Encouraging contributions from a diverse global network.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                  <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                    Application for Future Research
                  </h3>
                  <ul className="list-disc pl-6 text-base text-body-color">
                    <li className="mb-2">
                      <strong>Collaborative Innovation:</strong> Open-source tools enable rapid iteration and collective problem-solving.
                    </li>
                    <li className="mb-2">
                      <strong>Knowledge Building:</strong> Publicly shared findings accelerate discovery by reducing duplication.
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Value for the Future
              </h3>
              <p className="mb-4 text-base text-body-color">
                Open-source principles ensure research remains adaptable, inclusive, and impactful.
              </p>
              <p className="text-base text-body-color">
                By embracing openness, we lay the groundwork for breakthroughs that benefit humanity long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPrinciplesOpenSource;