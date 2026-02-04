import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import AboutImage from "@/assets/about.webp";

const About = () => {
  return (
    <section id="About Flemingo Services" className="container pt-32">
      <div className="text-center">
        <h2 className="text-5xl font-primary">
          About
          <span className="text-yellow">AtiSunya Infotech </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 font-secondary mt-10 items-center max-w-5xl mx-auto">
          <figure className="max-md:order-last w-full flex justify-center items-center">
              <Image
                alt="Agriculture NetSuite"
                src={AboutImage}
                width={600}
                height={400}
                className="object-contain rounded-xl"
              />
            </figure>

        <div>
          <div className="space-y-6 text-sm text-gray-600">
            <p className="font-bold">
             AtiSunya Infotech is a trusted digital transformation partner delivering enterprise-grade ERP and technology solutions across Oracle NetSuite, Zoho, Salesforce, Microsoft Dynamics 365, SAP, and the complete Microsoft ecosystem. We help organizations optimize operations, enhance visibility, automate processes, and scale with confidence through intelligent, secure, and future-ready solutions.
            </p>

            <p className="font-bold">
              At AtiSunya Infotech, we deliver tailored Oracle NetSuite and Microsoft-based solutions designed to optimize business processes and enhance productivity. Backed by deep expertise, our certified teams provide end-to-end services that enable scalable growth, operational efficiency, and continuous innovation.
            </p>

            <p className="font-bold">
              We help companies buy, implement, and maximize ROI from NetSuite and its integrated solutions, while also leveraging our expertise in Microsoft Services.
            </p>

            <h4 className="text-xl">
              But let&apos;s shift the focus from us. Let&apos;s talk about&nbsp;you.
            </h4>

            <div className="w-max">
              <ButtonLink href="mailto: mktg@atisunyainfotech.com" variant="blue">
                Say Hey
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
