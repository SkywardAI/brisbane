import Breadcrumb from "@/components/Common/Breadcrumb";
import LocalTrustWorthyChat from "@/components/LocalIntellegence/LocalTrustWorthyChat";
// import LocalTrustWorthySearch from "@/components/LocalIntellegence/LocalTrustWorthySearch";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Intellegence | Skyward AI Labs",
  description: "This is Local Intellegence Page for Skyward AI Labs",
  // other metadata
};

const LocalIntellegencePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Local Intellegence Page"
        description="Skyward AI Labs official website page"
      />

      <LocalTrustWorthyChat />
      {/* <LocalTrustWorthySearch /> */}
    </>
  );
};

export default LocalIntellegencePage;
