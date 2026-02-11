"use client";

import Image from "next/image";
import Link from "next/link";
import ERPImplementationImage from "@/assets/services/erp-implementation.jpg";
import ERPIntegrationImage from "@/assets/services/erp-integration.jpg";
import ManagedServicesImage from "@/assets/services/managed-servicecs.jpg";

const OurServices = () => {
  const services = [
    {
      title: "ERP Implementation",
      desc: "Expert ERP implementation across Microsoft Dynamics 365, Salesforce, Zoho, and Oracle NetSuite ensuring smooth integration and business growth.",
      img: ERPImplementationImage,
    },
    {
      title: "ERP Integration",
      desc: "Seamlessly integrate NetSuite, Salesforce, Zoho & Dynamics 365 with real-time data flow and enhanced operational efficiency.",
      img: ERPIntegrationImage,
    },
    {
      title: "Managed Services",
      desc: "Comprehensive ERP monitoring, optimization, and support services to ensure uninterrupted performance and scalability.",
      img: ManagedServicesImage,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Centered Heading Section */}
        <div className="flex flex-col items-center justify-center text-center 
                        max-w-3xl mx-auto mb-20 px-4">

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#002050]">
            ERP <span className="text-[#fbc02d]">Excellence</span>
          </h2>

          <p className="text-lg md:text-xl font-semibold text-gray-600 leading-relaxed">
            We help enterprises transform digitally with powerful ERP implementation,
            integration, and managed services tailored for long-term success.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">

          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col h-full rounded-2xl overflow-hidden 
              border border-gray-200 bg-white 
              shadow-md hover:shadow-2xl 
              transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 justify-between">

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#002050]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Equal Button */}
                <div className="mt-8">
                  <Link
                    href="/contact-us"
                    className="w-48 text-center inline-block
                    bg-[#fbc02d] text-[#002050]
                    py-3 rounded-full font-semibold
                    border-2 border-[#fbc02d]
                    hover:bg-[#002050] hover:text-white hover:border-[#002050]
                    transition-all duration-300"
                  >
                    Learn More →
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurServices;
