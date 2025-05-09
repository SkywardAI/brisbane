import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const LocalTrustWorthyChat = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title="LocalTrustWorthyChat: Secure and Private AI for Your Business"
                    paragraph="Keep your data safe while leveraging AI. LocalTrustWorthyChat runs on your local CPUs, using tools to perform tasks without ever sending your private information to the cloud."
                    mb="44px" />
                <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Runs locally on CPUs" />
                        <List text="Uses tools for tasks" />
                        <List text="Ensures data privacy" />
                    </div>
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                        <List text="Lightweight and efficient" />
                        <List text="Supports various tasks via APIs" />
                    </div>
                  </div>
                </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image src="/images/about/about-image.svg" alt="LocalTrustWorthyChat illustration" fill className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0" />
                    <Image src="/images/about/about-image-dark.svg" alt="LocalTrustWorthyChat illustration dark" fill className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0" />
              </div>
            </div>

          </div>
        </div>

        {/* How It Works */}
        <div className="pb-12">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            How It Works
          </h3>
          <p className="mb-8 text-lg text-body-color">
            LocalTrustWorthyChat runs a small language model on your hardware. It interprets your requests and calls tools that invoke APIs locally—keeping your data secure and private.
          </p>
        </div>

         {/* Benefits */}
        <div className="pb-12">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Benefits
          </h3>
          <div className="mx-[-12px] flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
              <List text="Complete data privacy" />
              <List text="No cloud dependency" />
            </div>
            <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
              <List text="Cost-effective on CPUs" />
              <List text="Customizable tools" />
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="mb-6 text-lg text-body-color">
              Experience secure and private AI today.
            </p>
            <a href="https://github.com/SkywardAI/kirin" className="rounded-md bg-primary px-8 py-3 text-white hover:bg-primary-dark inline-block">
              Download Now
            </a>
          </div>

      </div>
    </section>
  );
};

export default LocalTrustWorthyChat;
