"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ============================= */
/* SERVICES DATA */
/* ============================= */

const services = [
  {
    title: "Implementation",
    description:
      "From discovery to go-live, we deliver tailored ERP implementations ensuring seamless deployment and scalable business growth.",
  },
  {
    title: "Customization",
    description:
      "We design ERP configurations aligned precisely with your workflows, processes, and operational objectives.",
  },
  {
    title: "Consulting",
    description:
      "Strategic ERP consulting services helping businesses optimize performance and drive digital transformation.",
  },
  {
    title: "Integration",
    description:
      "End-to-end ERP integration with CRM, HRM and finance systems for unified operational intelligence.",
  },
  {
    title: "Migration & Data Services",
    description:
      "Secure and zero-downtime ERP migration ensuring accurate structured data transition.",
  },
  {
    title: "Support & Training",
    description:
      "Ongoing ERP support and structured training ensuring maximum system efficiency.",
  },
];

/* ============================= */
/* MAIN COMPONENT */
/* ============================= */

export default function PremiumCorporateServices() {
  return (
    <section
      id="services-list"
      className="relative py-28 bg-[#f4f6f9] overflow-hidden"
    >
      {/* Subtle Animated Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbc02d]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002050]/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#fbc02d] uppercase tracking-widest text-sm font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002050]">
            What You Get with AtiSunya Services
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#fbc02d] mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#hero"
              className="inline-block px-10 py-4 rounded-full
              bg-[#002050] text-white font-semibold
              relative overflow-hidden group"
            >
              <span className="relative z-10">
                Get Expert Guidance →
              </span>

              {/* Gold hover slide */}
              <span className="absolute inset-0 bg-[#fbc02d] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================= */
/* SERVICE CARD */
/* ============================= */

function ServiceCard({ service, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        boxShadow: "0px 20px 40px rgba(0, 32, 80, 0.15)",
      }}
      className="bg-white rounded-2xl p-8
      border border-gray-200
      transition-all duration-300 relative overflow-hidden group"
    >
      {/* Premium Gold Accent Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#fbc02d] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      <h3 className="text-xl font-bold text-[#002050] mb-4">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {service.description}
      </p>

      {/* Elegant Bottom Accent */}
      <div className="mt-6 h-[2px] w-12 bg-[#fbc02d] transition-all duration-300 group-hover:w-20" />
    </motion.div>
  );
}