"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Database,
  Layers,
  LineChart,
  Puzzle,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const brand = {
  navy: "#002050",
  teal: "#2F7F78",
  gold: "#fbc02d",
  deepTeal: "#09272c",
};

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.62, ease: "easeOut" as const },
};

const serviceAccent = [brand.gold, brand.teal, "#4BA7A0", brand.navy];

const erpPlatforms = [
  {
    id: "oracle-netsuite",
    title: "Oracle NetSuite",
    desc: "Cloud ERP implementation for finance, inventory, order management, procurement, dashboards, and SuiteCloud extensions.",
    icon: Sparkles,
    color: "#C74634",
  },
  {
    id: "microsoft-dynamics",
    title: "Microsoft Dynamics 365",
    desc: "Dynamics 365 consulting for connected sales, finance, operations, customer service, and Power Platform automation.",
    icon: Workflow,
    color: "#0078D4",
  },
  {
    id: "odoo",
    title: "Odoo",
    desc: "Modular ERP implementation and customization for CRM, sales, inventory, accounting, and operations workflows.",
    icon: Puzzle,
    color: "#714B67",
  },
  {
    id: "microsoft-services",
    title: "Microsoft Services",
    desc: "Microsoft 365, Azure, SharePoint, Teams, Power BI, and Power Automate services for secure workplace productivity.",
    icon: Cloud,
    color: "#5E5E5E",
  },
  {
    id: "salesforce",
    title: "Salesforce",
    desc: "CRM setup, pipeline design, automation, reporting, and customer engagement workflows for revenue teams.",
    icon: LineChart,
    color: "#00A1E0",
  },
  {
    id: "zoho",
    title: "Zoho",
    desc: "Zoho CRM and business app configuration for growing teams that need fast automation without heavy complexity.",
    icon: Layers,
    color: "#E42527",
  },
  {
    id: "sap",
    title: "SAP",
    desc: "SAP advisory, process alignment, reporting support, and enterprise controls for complex operating environments.",
    icon: ShieldCheck,
    color: "#0FAAFF",
  },
];

const services = [
  {
    icon: Settings,
    title: "ERP Implementation",
    desc: "Structured ERP rollout with discovery, configuration, testing, training, go-live planning, and adoption support.",
  },
  {
    icon: Layers,
    title: "Customization & Integration",
    desc: "Custom fields, approvals, reports, APIs, connectors, and automations designed around daily user behavior.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    desc: "Power BI, SuiteAnalytics, ERP dashboards, KPI scorecards, and exception reporting leaders can trust.",
  },
  {
    icon: Cloud,
    title: "Cloud Optimization",
    desc: "Improve cloud ERP speed, access, security, backup posture, license usage, and infrastructure reliability.",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "Clean master records, opening balances, transaction history, attachments, and validation routines before launch.",
  },
  {
    icon: ShieldCheck,
    title: "Support & Maintenance",
    desc: "Admin assistance, bug fixes, release readiness, user help, enhancement planning, and performance checks.",
  },
];

const approach = [
  "Consultation",
  "Implementation",
  "Optimization",
  "Continuous Support",
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#002050]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#002050] text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(128deg,#002050_0%,#09272c_54%,#2F7F78_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-1.5 w-full bg-[#fbc02d]" />
        <div className="absolute bottom-0 left-0 -z-10 h-32 w-full bg-[linear-gradient(0deg,#FFFFFF,rgba(255,255,255,0))]" />
        <div className="absolute right-0 top-16 -z-10 hidden h-[70%] w-[48%] bg-[linear-gradient(145deg,rgba(251,192,45,0.16),rgba(47,127,120,0.18))] [clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)] lg:block" />

        <div className="container flex flex-col items-center gap-14 py-20 lg:min-h-[calc(100vh-82px)] lg:flex-row lg:py-14">
          <motion.div {...fadeUp} className="w-full lg:w-[51%]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-[8px] border border-white/14 bg-white/8 px-4 py-2.5 text-sm font-bold text-white shadow-[0_18px_42px_rgba(0,0,0,0.14)]">
              <Sparkles size={17} className="text-[#fbc02d]" />
              AtiSunya ERP Services
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.04] sm:text-6xl lg:text-7xl">
              ERP Services
              <span className="block text-[#fbc02d]">
                planned around real workflows
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              From ERP discovery to managed support, AtiSunya helps businesses
              automate workflows, connect data, improve reporting, and launch
              cloud ERP platforms with less operational noise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbc02d] px-7 py-4 font-black text-[#002050] shadow-[0_18px_38px_rgba(251,192,45,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Get Started
                <ArrowRight size={19} />
              </Link>
              <a
                href="#erp-services"
                className="inline-flex items-center gap-3 rounded-[8px] border border-white/18 bg-white/8 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#fbc02d] hover:bg-white/12"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 54 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="w-full lg:w-[49%]"
          >
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[8px] border border-white/14 bg-white p-3 text-[#002050] shadow-[0_34px_90px_rgba(0,0,0,0.25)]"
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Implement", "Deploy ERP with clarity", brand.navy],
                  ["Automate", "Remove manual bottlenecks", brand.teal],
                  ["Analyze", "Turn data into decisions", brand.gold],
                  ["Support", "Improve after go-live", brand.deepTeal],
                ].map(([title, desc, color]) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="min-h-[150px] rounded-[8px] p-5 text-white shadow-[0_12px_28px_rgba(0,32,80,0.12)]"
                    style={{
                      backgroundColor: color,
                      color: color === brand.gold ? brand.navy : "#FFFFFF",
                    }}
                  >
                    <p className="text-xl font-black">{title}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 opacity-80">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <motion.div {...fadeUp} className="container">
          <div className="mx-auto max-w-5xl rounded-[8px] border border-[#002050]/10 bg-white p-8 shadow-[0_24px_70px_rgba(0,32,80,0.09)] md:p-10">
            <p className="text-lg leading-8 text-[#5D5D5D]">
              We cover the full ERP lifecycle: discovery workshops, process
              mapping, implementation, integration, migration, user training,
              reporting, and post-go-live support. Our team works across
              NetSuite, Odoo, Microsoft Dynamics 365, SAP, Zoho, Salesforce,
              Azure, Power BI, and Microsoft 365 so each recommendation fits
              the business instead of forcing a generic template.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="erp-services" className="bg-[#F5F5F5] py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#2F7F78]">
              Our ERP Services
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Designed to support your complete ERP lifecycle
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              const color = serviceAccent[index % serviceAccent.length];

              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut" as const,
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                    transition: { duration: 0.24, ease: "easeOut" },
                  }}
                  className="group relative min-h-[255px] overflow-hidden rounded-[8px] border border-[#002050]/10 bg-white p-7 shadow-[0_14px_34px_rgba(0,32,80,0.07)] transition-all duration-300 hover:shadow-[0_26px_64px_rgba(0,32,80,0.13)]"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] text-white shadow-[0_14px_28px_rgba(0,32,80,0.16)]"
                    style={{
                      backgroundColor: color,
                      color: color === brand.gold ? brand.navy : "#FFFFFF",
                    }}
                  >
                    <Icon size={29} />
                  </div>
                  <h3 className="text-xl font-black text-[#002050]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5D5D5D]">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#fbc02d]">
              Our ERP Expertise
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              We work with globally trusted platforms
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {erpPlatforms.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  {...fadeUp}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut" as const,
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.24, ease: "easeOut" },
                  }}
                  className="group rounded-[8px] border p-7 text-white shadow-[0_18px_44px_rgba(0,32,80,0.14)] transition-all duration-300 hover:shadow-[0_28px_70px_rgba(0,32,80,0.22)]"
                  style={{
                    backgroundColor: item.color,
                    borderColor: item.color,
                  }}
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-[8px] bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                      <Icon size={27} />
                    </div>
                    <ArrowRight
                      className="text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      size={22}
                    />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/75">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#09272c] py-24 text-white">
        <div className="absolute left-0 top-0 -z-10 h-1.5 w-full bg-[#fbc02d]" />
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#fbc02d]">
              Our Approach
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              A structured process ensuring success at every stage
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {approach.map((step, index) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{
                  duration: 0.55,
                  ease: "easeOut" as const,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.24, ease: "easeOut" },
                }}
                className="rounded-[8px] border border-white/12 bg-white/8 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#fbc02d] text-lg font-black text-[#002050]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{step}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/66">
                  Clear ownership, milestone reviews, and business-aligned
                  execution.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <motion.div {...fadeUp} className="container">
          <CheckCircle2 className="mx-auto mb-7 text-[#2F7F78]" size={42} />
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#002050] md:text-6xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5D5D5D]">
            Partner with us to modernize ERP, automate business processes, and
            give every team a clearer view of performance.
          </p>
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbc02d] px-10 py-5 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#002050] hover:text-white"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
