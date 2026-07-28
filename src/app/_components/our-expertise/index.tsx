"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Odoo from "@/assets/dashboards/odoo-dashboard.png";
import Netsuite from "@/assets/dashboards/netsuite-dashboard.png";
import Dynamics from "@/assets/dashboards/dynamics-dashboard.png";
import Salesforce from "@/assets/dashboards/salesforce-dashboard.webp";
import SAP from "@/assets/dashboards/sap-dashboard.png";

const tabs = [
  {
    id: "odoo",
    label: "Odoo",
    title: "Premium Odoo Dashboard for Unified Operations.",
    description:
      "Built a modern Odoo command center for sales, inventory, finance and operations, giving leadership a faster view of performance across every business function.",
    stat: "40%",
    statText: "Faster Operational Visibility",
    image: Odoo,
    accent: "#714B67",
  },
  {
    id: "netsuite",
    label: "Oracle NetSuite",
    title: "Enterprise Transformation with Cloud ERP.",
    description:
      "Delivered a full-scale Oracle NetSuite implementation covering finance, procurement, inventory and reporting - enabling real-time business visibility.",
    stat: "45%",
    statText: "Operational Efficiency Boost",
    image: Netsuite,
    accent: "#C74634",
  },
  {
    id: "dynamics",
    label: "Microsoft Dynamics 365",
    title: "Intelligent Business Automation.",
    description:
      "Automated finance and supply chain workflows using Dynamics 365, improving compliance, forecasting and cross-team collaboration.",
    stat: "60%",
    statText: "Reduction in Manual Processes",
    image: Dynamics,
    accent: "#0078D4",
  },
  {
    id: "salesforce",
    label: "Salesforce CRM",
    title: "Revenue Acceleration Through Smart CRM.",
    description:
      "Integrated Salesforce CRM with ERP systems to create a unified data environment and improve pipeline visibility.",
    stat: "30%",
    statText: "Increase in Sales Productivity",
    image: Salesforce,
    accent: "#00A1E0",
  },
  {
    id: "sap",
    label: "SAP Integration",
    title: "Seamless Enterprise System Integration.",
    description:
      "Connected SAP with third-party platforms, payment gateways and logistics systems for unified enterprise operations.",
    stat: "50%",
    statText: "Faster Implementation Cycle",
    image: SAP,
    accent: "#0FAAFF",
  },
];

export default function PremiumERPCaseStudies() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)] py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_18%_0%,rgba(47,127,120,0.14),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(251,192,45,0.16),transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <h2
            className="text-4xl font-black leading-tight lg:text-5xl"
            style={{ color: "#002050" }}
          >
            Delivering Measurable ERP Impact
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We empower enterprises with scalable ERP ecosystems, intelligent
            automation and seamless system integrations across global platforms.
          </p>
        </div>

        <div className="mb-16 flex flex-wrap gap-3 border-b border-[#002050]/10 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab)}
              className={`relative rounded-[8px] px-4 py-3 text-sm font-bold transition-all duration-300 ${
                active.id === tab.id
                  ? "bg-white text-[#002050] shadow-[0_14px_34px_rgba(0,32,80,0.08)]"
                  : "text-gray-500 hover:bg-white/80 hover:text-[#2F7F78]"
              }`}
            >
              {tab.label}

              {active.id === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-x-4 bottom-0 h-[3px] rounded-full"
                  style={{ backgroundColor: active.accent }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-16 rounded-[18px] border border-[#002050]/10 bg-white p-6 shadow-[0_28px_90px_rgba(0,32,80,0.10)] lg:grid-cols-2 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >
              <h3
                className="mb-6 text-3xl font-black lg:text-4xl"
                style={{ color: "#002050" }}
              >
                {active.title}
              </h3>

              <p className="mb-10 text-lg leading-relaxed text-gray-600">
                {active.description}
              </p>

              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: active.accent }}
                  >
                    {active.stat}
                  </span>

                  <span
                    className="mt-2 h-[3px] w-16 rounded-full"
                    style={{ backgroundColor: active.accent }}
                  />
                </div>

                <span className="max-w-[160px] text-sm uppercase tracking-wide text-gray-600">
                  {active.statText}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-image"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex justify-center"
            >
              <div className="relative aspect-[16/10] w-full max-w-[600px]">
                <div className="absolute inset-0 rounded-[18px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(0,32,80,0.12)]" />
                <div
                  className="absolute -inset-3 -z-10 rounded-[22px] opacity-20 blur-2xl"
                  style={{ backgroundColor: active.accent }}
                />

                <div className="absolute inset-4 flex items-center justify-center overflow-hidden rounded-[14px] bg-gray-50">
                  <Image
                    src={active.image}
                    alt={`${active.label} dashboard`}
                    width={1000}
                    height={650}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
