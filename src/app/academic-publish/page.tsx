import SinglePublish from "@/components/AcademicPublish/SinglePublish";
import academicPublishData from "@/components/AcademicPublish/publishData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Publish Page | Skyward AI Labs",
  description: "This is Academic Publish Page for Skyward AI Labs",
  // other metadata
};

const AcademicPublish = () => {
  return (
    <>
      <Breadcrumb
        pageName="Academic Publish Grid"
        description="Skyward AI Labs official academic publish page"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {academicPublishData.map((academicPublish) => (
              <div
                key={academicPublish.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SinglePublish academicPublish={academicPublish} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicPublish;
