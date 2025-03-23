
import React from "react";

const MultiTenantMonitoring = () => {

  const patent = {
    patentNumber: "CN112835763A",
    title: "Cluster multi-tenant monitoring method and system and readable storage medium thereof",
    language: "Chinese",
    inventors: "Bowen Li & Kunpeng Wu. etc",
    year: "2021",
    patentUrl: "https://patents.google.com/patent/CN112835763A/en",
  };


  return (
    <section id="multiTenantMonitoring" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        {/* Patent Card (Image Cover) */}
        <div className="border rounded-lg shadow-md w-full max-w-sm">
          {/* Header with Patent Number */}
          <a
            href={patent.patentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white p-4 rounded-t-lg hover:bg-blue-700 transition"
          >
            <h3 className="text-lg font-bold">{patent.patentNumber}</h3>
          </a>

          {/* Metadata */}
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <p className="mb-6 border-b border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              <strong>Title</strong> {patent.title}
            </p>
            <p className="mb-6 border-b border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              <strong>Language</strong> {patent.language}
            </p>
            <p className="mb-6 border-b border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              <strong>Inventor:</strong> {patent.inventors}
            </p>
            <p className="mb-6 border-b border-body-color border-opacity-10text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              <strong>Year:</strong> {patent.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiTenantMonitoring;