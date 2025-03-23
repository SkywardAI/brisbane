import Breadcrumb from "@/components/Common/Breadcrumb";
import MultiTenantMonitoring from "@/components/Patents/MultiTenantMonitoring";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patents Page | Skyward AI Labs",
  description: "This is Patents Page for Skyward AI Labs",
  // other metadata
};

const Patents = () => {
  return (
    <>
      <Breadcrumb
        pageName="Patents"
        description="Skyward AI Labs patents page"
      />
      <MultiTenantMonitoring />
    </>
  );
};

export default Patents;