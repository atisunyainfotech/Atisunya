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
             AtiSunya Infotech helps ambitious teams choose, implement, and improve ERP platforms across Oracle NetSuite, Odoo, Zoho, Salesforce, Microsoft Dynamics 365, SAP, and the Microsoft cloud ecosystem.
            </p>

            <p className="font-bold">
              Our work starts with discovery: understanding finance, sales, inventory, HR, reporting, integrations, and data quality before a single configuration decision is made.
            </p>

            <p className="font-bold">
              From NetSuite implementation to Microsoft automation and managed ERP support, we focus on practical rollouts, cleaner workflows, and ROI that can be measured after go-live.
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
