import React from "react";


const CostTransparency = () => {
  return (
    <section
        id="cost-transparency"
        className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Cost Transparency
                </h2>
                <p className="mb-6 text-base font-medium text-body-color">
                  Clear visibility into your cloud resource usage.
                </p>
                <div className="space-y-6">
                  <p className="text-base text-body-color">
                    With SkywardAI Private Cloud, you control your Kubernetes cluster and see exactly what resources your applications consume—no hidden fees or surprise charges. Our open-source dashboard provides real-time insights into CPU, memory, and storage usage.
                  </p>
                  <ul className="list-disc pl-6 text-base text-body-color">
                    <li className="mb-2">
                      <strong>Resource Monitoring:</strong> Track usage directly on your hardware with no third-party overhead.
                    </li>
                    <li className="mb-2">
                      <strong>Predictable Costs:</strong> Only pay for electricity and maintenance of your local setup.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CostTransparency;