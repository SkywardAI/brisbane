import Breadcrumb from "@/components/Common/Breadcrumb";
import ResearchPrinciplesOpenSource from "@/components/Principles/ResearchPrinciplesOpenSource";
import ResearchPrinciplesSustinable from "@/components/Principles/ResearchPrinciplesSustinable";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principles Page | Skyward AI Labs",
  description: "This is Principles Page for Skyward AI Labs",
  // other metadata
};

const Principles = () => {
  return (
    <>
      <Breadcrumb
        pageName="Principles"
        description="Skyward AI Labs official principles page"
      />

    <ResearchPrinciplesOpenSource />
    <ResearchPrinciplesSustinable />
    </>
  );
};

export default Principles;