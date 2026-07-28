"use client";

import Image from "next/image";
import Link from "next/link";

interface Module {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const modules: Module[] = [
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Bring leads, accounts, follow-ups, quotations, and service conversations into one sales command center.",
    image: "/images/crm.jpg",
    slug: "customer-relationship-management",
  },
  {
    title: "Financial Management Solutions",
    description:
      "Control accounting, approvals, cash flow, tax records, and management reporting with sharper finance visibility.",
    image: "/images/finance.jpg",
    slug: "financial-management-solutions",
  },
  {
    title: "Ecommerce & Retail Management",
    description:
      "Connect web stores, marketplace orders, counter sales, stock updates, payments, and returns in one retail flow.",
    image: "/images/ecommerce.jpg",
    slug: "ecommerce-retail-management",
  },
  {
    title: "Inventory & Order Management",
    description:
      "Improve warehouse accuracy, reorder planning, stock transfers, pick-pack-ship routines, and fulfillment tracking.",
    image: "/images/inventory.jpg",
    slug: "inventory-order-management",
  },
  {
    title: "Supply Chain Management",
    description:
      "Coordinate suppliers, purchase requests, lead times, demand planning, landed cost, and delivery exceptions.",
    image: "/images/supplychain.jpg",
    slug: "supply-chain-management",
  },
  {
    title: "Data & Analytics Management",
    description:
      "Turn ERP data into KPI dashboards, drill-down reports, exception alerts, and leadership-ready scorecards.",
    image: "/images/analytics.jpg",
    slug: "data-analytics-management",
  },
  {
    title: "Human Capital Management",
    description:
      "Organize employee records, attendance, leave, payroll inputs, performance actions, and HR self-service.",
    image: "/images/hcm.jpg",
    slug: "human-capital-management",
  },
  {
    title: "Professional Services Automation",
    description:
      "Plan resources, timesheets, expenses, milestones, project margins, and billing readiness for service teams.",
    image: "/images/services.jpg",
    slug: "professional-services-automation",
  },
  {
    title: "Industry-Specific NetSuite Solutions",
    description:
      "Shape NetSuite around trading, distribution, services, manufacturing, and industry-specific compliance needs.",
    image: "/images/industry.jpg",
    slug: "industry-specific-netsuite-solutions",
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
            Explore ERP modules built for the work that happens every day:
            finance, CRM, inventory, ecommerce, HR, analytics, supply chain,
            and project delivery.
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

                <Link
                  href={`/modules/${module.slug}`}
                  className="inline-flex px-4 py-2 text-sm font-semibold rounded-lg bg-[#002050] text-white hover:bg-[#2F7F78] transition"
                >
                  Learn More
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
