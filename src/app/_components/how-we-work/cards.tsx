"use client";

import Image from "next/image";

interface Module {
  title: string;
  description: string;
  image: string;
}

const modules: Module[] = [
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Manage customer interactions, sales pipelines, and marketing campaigns in one centralized platform.",
    image: "/images/crm.jpg",
  },
  {
    title: "Financial Management Solutions",
    description:
      "Automate financial processes, manage accounting operations, and gain real-time financial insights.",
    image: "/images/finance.jpg",
  },
  {
    title: "Ecommerce & Retail Management",
    description:
      "Seamlessly manage online stores, inventory, and customer experiences across multiple channels.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Inventory & Order Management",
    description:
      "Track inventory levels, manage orders, and streamline fulfillment processes efficiently.",
    image: "/images/inventory.jpg",
  },
  {
    title: "Supply Chain Management",
    description:
      "Optimize supply chain operations with real-time visibility and advanced planning tools.",
    image: "/images/supplychain.jpg",
  },
  {
    title: "Data & Analytics Management",
    description:
      "Transform business data into actionable insights with advanced analytics and reporting tools.",
    image: "/images/analytics.jpg",
  },
  {
    title: "Human Capital Management",
    description:
      "Streamline HR processes including payroll, employee engagement, and workforce management.",
    image: "/images/hcm.jpg",
  },
  {
    title: "Professional Services Automation",
    description:
      "Improve project management, resource allocation, and service delivery efficiency.",
    image: "/images/services.jpg",
  },
  {
    title: "Industry-Specific NetSuite Solutions",
    description:
      "Customized ERP solutions tailored for specific industries to improve operational efficiency.",
    image: "/images/industry.jpg",
  },
];

export default function ModulesSection() {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden" id="our-modules">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2F7F78]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fbc02d]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-[#2F7F78]/10 text-[#2F7F78]">
            ERP Modules
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-[#002050]">
            Discover Our Powerful
            <span className="text-[#2F7F78]"> NetSuite Solutions</span>
          </h2>

          <div className="w-24 h-1 bg-[#fbc02d] mx-auto mt-6 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            NetSuite offers an integrated suite of cloud applications designed
            to streamline operations and accelerate business growth.
          </p>

        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              {/* Yellow Border Accent */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#fbc02d] transition-all duration-500 group-hover:w-full"></div>

              <div className="absolute bottom-0 right-0 w-[3px] h-0 bg-[#fbc02d] transition-all duration-500 group-hover:h-full"></div>

              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold text-[#002050] mb-3 group-hover:text-[#2F7F78] transition">
                  {module.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {module.description}
                </p>

                <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#002050] text-white hover:bg-[#2F7F78] transition">
                  Learn More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}