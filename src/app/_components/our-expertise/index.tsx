"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Netsuite from "@/assets/dashboards/netsuite-dashboard.avif";
import Dynamics from "@/assets/dashboards/dynamics-dashboard.png";
import Salesforce from "@/assets/dashboards/salesforce-dashboard.webp";
import SAP from "@/assets/dashboards/sap-dashboard.png";

const tabs = [
  {
    id: "netsuite",
    label: "Oracle NetSuite",
    title: "Enterprise Transformation with Cloud ERP.",
    description:
      "Delivered a full-scale Oracle NetSuite implementation covering finance, procurement, inventory and reporting — enabling real-time business visibility.",
    stat: "45%",
    statText: "Operational Efficiency Boost",
    image: Netsuite,
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
  },
];

export default function PremiumERPCaseStudies() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-3xl">

          <p
            className="text-sm uppercase tracking-[0.35em] font-semibold mb-4"
            style={{ color: "#2F7F78" }}
          >
            Case Studies
          </p>

          <h2
            className="text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: "#002050" }}
          >
            Delivering Measurable ERP Impact
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We empower enterprises with scalable ERP ecosystems, intelligent
            automation and seamless system integrations across global platforms.
          </p>

        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-10 border-b border-gray-200 mb-16">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab)}
              className={`relative pb-5 text-sm font-medium transition-all duration-300 ${
                active.id === tab.id
                  ? "text-[#002050]"
                  : "text-gray-500 hover:text-[#2F7F78]"
              }`}
            >
              {tab.label}

              {active.id === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[3px] rounded-full"
                  style={{ backgroundColor: "#fbc02d" }}
                />
              )}
            </button>
          ))}

        </div>

        {/* Premium Card */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Text Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >

              <h3
                className="text-3xl lg:text-4xl font-semibold mb-6"
                style={{ color: "#002050" }}
              >
                {active.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {active.description}
              </p>

              {/* Stat */}
              <div className="flex items-center gap-8">

                <div className="flex flex-col">

                  <span
                    className="text-5xl font-bold"
                    style={{ color: "#2F7F78" }}
                  >
                    {active.stat}
                  </span>

                  <span className="w-16 h-[3px] bg-[#fbc02d] mt-2 rounded-full"></span>

                </div>

                <span className="text-gray-600 text-sm uppercase tracking-wide max-w-[160px]">
                  {active.statText}
                </span>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dashboard Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-image"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex justify-center"
            >

              <div className="relative w-full max-w-[560px] aspect-[16/10]">

                {/* Frame */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"></div>

                {/* Dashboard */}
                <div className="absolute inset-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">

                  <Image
                    src={active.image}
                    alt="ERP Dashboard"
                    width={1000}
                    height={650}
                    className="w-full h-full object-contain"
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