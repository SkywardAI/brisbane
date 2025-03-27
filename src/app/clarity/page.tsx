import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import  ClarityVideo  from "@/components/Clarity";


export const metadata: Metadata = {
  title: "Clarity | Skyward AI Labs",
  description: "This is product Clarity for Skyward AI Labs",
  // other metadata
};

const ClarityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Clarity Page"
        description="Skyward AI Labs official website page"
      />
      <ClarityVideo />
    </>
  );
};

export default ClarityPage;