
import Breadcrumb from "@/components/Common/Breadcrumb";
import CostEffective from "@/components/PrivateCloud/CostEffective";
import CostTransparency from "@/components/PrivateCloud/CostTransparency";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Cloud Solution | Skyward AI Labs",
  description: "This is Private Cloud Page for Skyward AI Labs",
  // other metadata
};

const Solutions = () => {
  return (
    <>
      <Breadcrumb
        pageName="Private Cloud Solution"
        description="Skyward AI Labs official private cloud solution page"
      />
      <CostEffective />
      <CostTransparency />
    </>
  );
};

export default Solutions;
