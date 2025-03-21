import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Skyward AI Labs",
  description: "This is Contact Page for Skyward AI Labs",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Skyward AI Labs official website page"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
