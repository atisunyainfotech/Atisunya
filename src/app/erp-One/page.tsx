"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShoppingCart,
  Package,
  Boxes,
  Factory,
  ShieldCheck,
  CheckCircle,
  BrainCircuit,
  Globe,
  Rocket,
  Database,
  Users,
} from "lucide-react";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/* ---------------- SERVICES ---------------- */
const services = [
  {
    title: "Financial Management",
    icon: BarChart3,
    desc: "Advanced accounting, budgeting & financial reporting.",
  },
  {
    title: "Sales Management",
    icon: ShoppingCart,
    desc: "Automate quotations, sales pipelines & customer orders.",
  },
  {
    title: "Purchases",
    icon: Package,
    desc: "Smart procurement & vendor management workflows.",
  },
  {
    title: "Inventory Management",
    icon: Boxes,
    desc: "Track inventory in real-time with warehouse optimization.",
  },
  {
    title: "Production",
    icon: Factory,
    desc: "Optimize manufacturing with intelligent production planning.",
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    desc: "Enterprise-grade security & compliance management.",
  },
];

/* ---------------- FEATURES ---------------- */
const features = [
  "Comprehensive Financial Management",
  "Smart Supply Chain & Inventory Control",
  "Production Planning & Automation",
  "Real-time Analytics & Reporting",
  "Integration with Business Systems",
  "Cloud-based ERP Ecosystem",
];

export default function ERPONEPremiumPage() {
  return (
    <div className="bg-[#030712] text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d433,transparent_30%),radial-gradient(circle_at_bottom_left,#2563eb33,transparent_30%)]" />

        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div {...fadeUp}>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-sm mb-8 backdrop-blur-xl">
              <Rocket size={16} />
              Powered by AtiSunya Infotech
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Enterprise
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Resource Planning
              </span>

              <span className="text-cyan-400 text-4xl md:text-5xl">
                (ERP)
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-2xl">
              ERPONE is an advanced ERP ecosystem designed to automate,
              optimize, and transform modern businesses across finance,
              supply chain, manufacturing, sales, and operations — all within
              one intelligent platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact-us"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:scale-105 transition-all duration-300"
              >
                Book A Demo
              </Link>

              <Link
                href="/contact-us"
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                Explore Features

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-all"
                />
              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">

              {[
                { value: "98%", label: "Automation" },
                { value: "50+", label: "ERP Experts" },
                { value: "24/7", label: "Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >

            <div className="relative w-[520px] h-[520px] rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-3xl flex items-center justify-center">

              {/* Center Icon */}
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.45)]">
                <Database size={70} />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-8 left-0 bg-[#07111f]/90 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl"
              >
                <BrainCircuit className="text-cyan-400 mb-3" size={38} />
                <h4 className="font-semibold">AI Analytics</h4>

                <p className="text-sm text-gray-400 mt-1">
                  Real-time insights
                </p>

              </motion.div>

              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-24 right-0 bg-[#07111f]/90 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl"
              >
                <Globe className="text-blue-400 mb-3" size={38} />
                <h4 className="font-semibold">Cloud ERP</h4>

                <p className="text-sm text-gray-400 mt-1">
                  Connected ecosystem
                </p>

              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5 }}
                className="absolute bottom-10 left-10 bg-[#07111f]/90 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl"
              >
                <Users className="text-cyan-300 mb-3" size={38} />
                <h4 className="font-semibold">Smart Workforce</h4>

                <p className="text-sm text-gray-400 mt-1">
                  HR & team management
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= ABOUT ERP ================= */}
      <section className="py-28 px-6 bg-white text-slate-900">

        <div className="max-w-6xl mx-auto text-center">

          <motion.div {...fadeUp}>

            <p className="text-cyan-600 uppercase tracking-[0.25em] text-xs mb-3">
              Intelligent ERP Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Manage & Automate Your Core Business Processes
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-5xl mx-auto">
              ERPONE integrates finance, supply chain, manufacturing,
              inventory, sales, and business operations into one unified ERP
              platform. Gain real-time visibility, reduce operational costs,
              improve efficiency, and accelerate business growth with
              enterprise-grade automation.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 px-6 bg-[#030712]">

        <div className="max-w-7xl mx-auto">

          <motion.div {...fadeUp} className="text-center">

            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs mb-3">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Specialized ERP Modules
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  whileHover={{ y: -8 }}
                  className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mb-6">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {service.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-28 px-6 bg-slate-50 text-slate-900">

        <div className="max-w-6xl mx-auto">

          <motion.div {...fadeUp} className="text-center">

            <p className="text-cyan-600 uppercase tracking-[0.25em] text-xs mb-3">
              Key Features
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Enterprise Features Built for Scale
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {features.map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >

                <CheckCircle className="text-cyan-500 mt-1" size={24} />

                <div>
                  <h3 className="font-semibold text-lg">
                    {feature}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Advanced ERP capabilities designed to improve
                    operational efficiency and business intelligence.
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= PREMIUM BENEFITS SECTION ================= */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.15)] group">

              <img
                src="/images/erp-benefits.jpg"
                alt="ERP Benefits"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 w-[280px] shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Rocket className="text-white" size={30} />
                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-white">
                      40%
                    </h3>

                    <p className="text-gray-200 text-sm">
                      Faster Operational Efficiency
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-cyan-600 uppercase tracking-[0.25em] text-xs font-semibold mb-4">
              ERP Benefits
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Accelerate Business
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Growth with ERPONE
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              ERPONE empowers businesses with intelligent automation,
              real-time analytics, and connected workflows — helping
              enterprises optimize operations, improve productivity,
              and scale faster with confidence.
            </p>

            {/* BENEFITS LIST */}
            <div className="mt-10 space-y-6">

              {[
                "Improved operational efficiency and productivity",
                "Reduced costs through automated workflows",
                "Enhanced decision-making with real-time data insights",
                "Scalability to support long-term business growth",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="min-w-[52px] h-[52px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">

                    <CheckCircle className="text-white" size={24} />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {item}
                    </h3>

                    <p className="text-slate-500 mt-1">
                      Intelligent ERP automation designed to improve
                      performance and streamline business operations.
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 bg-[#030712] text-center">

        <motion.div {...fadeUp} className="max-w-4xl mx-auto">

          <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs mb-3">
            Schedule A Free Demo
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Transform Your Business with ERPONE?
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            Experience intelligent ERP automation with AtiSunya Infotech.
            Streamline operations, improve productivity, and scale your
            business with a next-generation ERP ecosystem.
          </p>

          <div className="mt-10">

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:scale-105 transition-all duration-300"
            >
              Schedule Free Demo

              <ArrowRight size={20} />

            </Link>

            <p className="text-gray-500 mt-5">
              Trusted by startups, SMEs & enterprises across industries.
            </p>

          </div>

        </motion.div>

      </section>

    </div>
  );
}