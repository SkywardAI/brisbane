import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Page | Skyward AI Labs",
  description: "This is Open Source Page for Skyward AI Labs",
  // other metadata
};

const OpenSourcePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Open Source Page"
        description="Skyward AI Labs official website page"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default OpenSourcePage;
