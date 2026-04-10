"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  BarChart3,
  Settings,
  Cloud,
  ShieldCheck,
} from "lucide-react";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

/* ---------------- DATA ---------------- */

const erpPlatforms = [
  {
    title: "Oracle NetSuite",
    desc: "End-to-end implementation, deep customization, seamless integrations, and continuous support tailored to your business.",
  },
  {
    title: "Microsoft Dynamics 365",
    desc: "Advanced business process automation and enterprise management solutions for modern organizations.",
  },
  {
    title: "Salesforce",
    desc: "CRM implementation and optimization focused on enhancing customer experience and engagement.",
  },
  {
    title: "Zoho",
    desc: "Flexible, cloud-based business applications to improve productivity and operational efficiency.",
  },
  {
    title: "SAP",
    desc: "Enterprise-grade ERP solutions designed for large-scale operations with high performance and scalability.",
  },
];

const services = [
  {
    icon: Settings,
    title: "ERP Implementation",
    desc: "Seamless deployment of ERP systems with minimal disruption, ensuring faster adoption and business continuity.",
  },
  {
    icon: Layers,
    title: "Customization & Integration",
    desc: "Tailor ERP systems to match your business workflows and integrate with existing tools and platforms.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    desc: "Enable data-driven decision-making with powerful dashboards, real-time insights, and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud Optimization",
    desc: "Enhance performance, scalability, and security with modern cloud-based ERP architectures.",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "Secure and efficient migration of legacy data into modern ERP systems without data loss.",
  },
  {
    icon: ShieldCheck,
    title: "Support & Maintenance",
    desc: "Continuous monitoring, updates, and support to ensure long-term system performance.",
  },
];

/* ---------------- PAGE ---------------- */

const ServicesPage = () => {
  return (
    <div className="bg-white text-[#002050]">

      {/* HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002050] via-[#003580] to-[#2F7F78]" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-white"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ERP Services
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-lg text-gray-200 leading-relaxed"
          >
            From implementation to continuous support, we deliver
            end-to-end ERP solutions that streamline operations,
            improve efficiency, and drive business growth.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-lg text-gray-700 leading-relaxed"
        >
          We provide comprehensive ERP lifecycle services, ensuring seamless
          deployment and long-term performance optimization. Our team brings
          deep expertise across leading enterprise platforms, helping businesses
          automate workflows, enhance reporting, and improve decision-making.
          From initial consultation to post-implementation support, every
          solution is aligned with your business goals and future scalability.
        </motion.p>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-[#f9fafc] py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our ERP Services</h2>
          <p className="text-gray-600 mt-3">
            Designed to support your complete ERP lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Icon className="text-[#2F7F78] mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ERP PLATFORMS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our ERP Expertise
          </h2>
          <p className="text-gray-600 mt-3">
            We work with globally trusted platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {erpPlatforms.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#002050] to-[#2F7F78] text-white shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f9fafc] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Approach
          </h2>
          <p className="text-gray-600 mt-3">
            A structured process ensuring success at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Consultation",
            "Implementation",
            "Optimization",
            "Continuous Support",
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-2xl font-bold text-[#2F7F78] mb-2">
                {i + 1}
              </div>
              <p className="font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6">
            Partner with us to implement powerful ERP solutions that drive
            efficiency, scalability, and growth.
          </p>

          <a
            href="/contact-us"
            className="px-8 py-3 rounded-full bg-[#fbc02d] text-[#002050] font-semibold shadow-md hover:scale-105 transition"
          >
            Get Started
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default ServicesPage;