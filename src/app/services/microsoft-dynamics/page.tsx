"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  GitBranch,
  Headphones,
  Layers3,
  LockKeyhole,
  MonitorCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import dynamicsDashboard from "@/assets/dashboards/dynamics-dashboard.png";

const colors = {
  navy: "#18254E",
  microsoft: "#0078D4",
  royal: "#4F7CFF",
  purple: "#6B4CE6",
  lightBlue: "#66C2FF",
  bg: "#FFFFFF",
  section: "#F5F7FA",
  heading: "#1F2937",
  paragraph: "#6B7280",
  border: "#E5E7EB",
};

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.62, ease: "easeOut" as const },
};

const services = [
  {
    title: "Dynamics 365 Implementation",
    desc: "Finance, sales, service, supply chain, and operations modules configured around your real workflows.",
    icon: MonitorCog,
  },
  {
    title: "Power Platform Automation",
    desc: "Power Apps, Power Automate, approvals, forms, and low-code tools that reduce manual work.",
    icon: CloudCog,
  },
  {
    title: "System Integrations",
    desc: "Connect Dynamics with ERP, CRM, ecommerce, portals, payment systems, data platforms, and custom apps.",
    icon: GitBranch,
  },
  {
    title: "Data Migration",
    desc: "Clean migration with mapping, validation, reconciliation, test loads, and business sign-off.",
    icon: DatabaseZap,
  },
  {
    title: "Power BI Analytics",
    desc: "Role-based dashboards, KPIs, operational reports, and management visibility across departments.",
    icon: BarChart3,
  },
  {
    title: "Managed Support",
    desc: "Admin support, issue resolution, enhancements, release readiness, and continuous optimization.",
    icon: Headphones,
  },
];

const outcomes = [
  "Connected sales, service, finance, and supply chain data",
  "Automated approvals, alerts, follow-ups, and task routing",
  "Faster reporting with Power BI and reliable operational KPIs",
  "Cleaner governance with roles, security, audit trails, and controls",
];

const modules = [
  { name: "Sales", icon: Sparkles },
  { name: "Customer Service", icon: Headphones },
  { name: "Finance", icon: BarChart3 },
  { name: "Supply Chain", icon: Layers3 },
  { name: "Power Platform", icon: Blocks },
  { name: "Power BI", icon: Workflow },
];

const deliverySteps = [
  "Discovery and process blueprint",
  "Configuration, customization, and integrations",
  "Data migration, UAT, and user training",
  "Go-live support and continuous improvement",
];

const colorMarks = [
  colors.microsoft,
  colors.royal,
  colors.purple,
  colors.lightBlue,
];

export default function MicrosoftDynamicsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#1F2937]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(118deg,#FFFFFF_0%,#F7FAFE_47%,#EAF6FF_100%)]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-[54%] bg-[linear-gradient(140deg,rgba(102,194,255,0.20),rgba(79,124,255,0.08)_46%,rgba(107,76,230,0.13))] [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-1 w-full bg-[linear-gradient(90deg,#0078D4,#4F7CFF,#6B4CE6,#66C2FF)]" />
        <div className="absolute bottom-0 left-0 -z-10 h-32 w-full bg-[linear-gradient(0deg,#FFFFFF,rgba(255,255,255,0))]" />

        <div className="container flex flex-col items-center gap-14 py-20 lg:min-h-[calc(100vh-82px)] lg:flex-row lg:py-16">
          <motion.div {...fadeUp} className="w-full lg:w-[47%]">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.04] text-[#18254E] sm:text-6xl lg:text-7xl">
              Microsoft Dynamics 365,
              <span className="block text-[#0078D4]">implemented with executive clarity</span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-[#0078D4] px-7 py-4 font-bold text-white shadow-[0_18px_36px_rgba(0,120,212,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#18254E]"
              >
                Book A Demo
                <ArrowRight size={19} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white px-7 py-4 font-bold text-[#18254E] shadow-[0_14px_30px_rgba(24,37,78,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#66C2FF]"
              >
                View Services
              </Link>
            </div>

            <div className="mt-12 flex max-w-2xl flex-wrap gap-3">
              {[
                ["D365", "Business apps aligned to process"],
                ["Power Platform", "Automation and approvals"],
                ["Azure ready", "Secure cloud foundation"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                    borderColor: colorMarks[index],
                    boxShadow: "0 24px 54px rgba(24,37,78,0.15)",
                  }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="flex min-w-[190px] flex-1 items-center gap-3 rounded-[8px] border border-[#E5E7EB] bg-white/92 p-4 shadow-[0_16px_34px_rgba(24,37,78,0.08)] backdrop-blur"
                >
                  <span
                    className="h-10 w-1.5 rounded-full"
                    style={{ backgroundColor: colorMarks[index] }}
                  />
                  <div>
                    <p className="text-lg font-black text-[#18254E]">{value}</p>
                    <p className="mt-0.5 text-sm font-medium text-[#6B7280]">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="relative w-full lg:w-[53%]"
          >
            <div className="absolute -left-5 top-10 hidden rounded-[8px] border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_18px_44px_rgba(24,37,78,0.13)] lg:block">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#6B7280]">
                Rollout health
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-black text-[#0078D4]">94%</span>
                <span className="pb-1 text-xs font-bold text-[#6B7280]">
                  adoption ready
                </span>
              </div>
            </div>

            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 44px 105px rgba(24,37,78,0.24)",
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative rounded-[8px] border border-[#E5E7EB] bg-white p-3 shadow-[0_34px_90px_rgba(24,37,78,0.18)]"
            >
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-3 py-3">
                <div className="flex items-center gap-2">
                  {colorMarks.map((mark) => (
                    <span
                      key={mark}
                      className="h-3 w-3 rounded-[3px]"
                      style={{ backgroundColor: mark }}
                    />
                  ))}
                </div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#18254E]">
                  Dynamics Workspace
                </span>
              </div>

              <div className="relative mt-3 overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-[#F5F7FA]">
                <Image
                  src={dynamicsDashboard}
                  alt="Microsoft Dynamics 365 dashboard"
                  priority
                  className="h-auto w-full"
                />
              </div>
            </motion.div>

            <div className="absolute -bottom-8 left-5 right-5 flex flex-wrap gap-3 rounded-[8px] border border-[#E5E7EB] bg-white p-3 shadow-[0_22px_55px_rgba(24,37,78,0.16)] max-sm:static max-sm:mt-4">
              {[
                ["360", "Visibility"],
                ["AI", "Guided insights"],
                ["Live", "Operational control"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    boxShadow: "0 16px 34px rgba(24,37,78,0.12)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="min-w-[120px] flex-1 rounded-[8px] border border-[#E5E7EB] bg-[#F5F7FA] px-3 py-4 text-center"
                >
                  <p className="text-xl font-black text-[#0078D4]">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#0078D4]">
              Service Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#1F2937] md:text-5xl">
              Everything needed to launch, connect, and scale Dynamics 365
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              From solution design to user adoption, we build a clean Microsoft
              ecosystem that feels premium to operate and practical for daily work.
            </p>
          </motion.div>

          <div className="mt-14 flex flex-wrap gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut" as const,
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    y: -11,
                    scale: 1.015,
                    borderColor: colorMarks[index % colorMarks.length],
                    boxShadow: "0 28px 68px rgba(24,37,78,0.16)",
                    transition: { duration: 0.24, ease: "easeOut" },
                  }}
                  className="group relative min-h-[250px] flex-[1_1_330px] overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-white p-7 shadow-[0_14px_34px_rgba(24,37,78,0.07)] transition-colors duration-300"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: colorMarks[index % colorMarks.length] }}
                  />
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] text-white shadow-[0_14px_28px_rgba(0,120,212,0.22)]"
                    style={{
                      background: `linear-gradient(135deg, ${colorMarks[index % colorMarks.length]}, ${colors.navy})`,
                    }}
                  >
                    <Icon size={29} />
                  </div>
                  <h3 className="text-xl font-black text-[#1F2937]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6B7280]">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container flex flex-col items-center gap-12 lg:flex-row">
          <motion.div {...fadeUp} className="w-full lg:w-[42%]">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#6B4CE6]">
              Business Outcomes
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#18254E] md:text-5xl">
              A sharper operating model with better visibility and control
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Dynamics 365 becomes valuable when it connects decisions,
              processes, automation, and reporting. Our delivery approach keeps
              business outcomes at the center of the build.
            </p>
          </motion.div>

          <div className="flex w-full flex-wrap gap-5 lg:w-[58%]">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                {...fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.012,
                  borderColor: colorMarks[index % colorMarks.length],
                  boxShadow: "0 26px 58px rgba(24,37,78,0.14)",
                  transition: { duration: 0.24, ease: "easeOut" },
                }}
                className="min-h-[210px] flex-[1_1_255px] rounded-[8px] border border-[#E5E7EB] bg-white p-6 shadow-[0_14px_34px_rgba(24,37,78,0.07)]"
              >
                <CheckCircle2 className="mb-5 text-[#0078D4]" size={30} />
                <h3 className="text-lg font-black leading-7 text-[#1F2937]">
                  {outcome}
                </h3>
                <p className="mt-3 leading-7 text-[#6B7280]">
                  Designed with clear ownership, adoption support, and
                  reporting that leaders can actually use.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#18254E] py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(126deg,rgba(0,120,212,0.18),rgba(24,37,78,0)_46%,rgba(107,76,230,0.22))]" />
        <div className="absolute bottom-0 left-0 -z-10 h-1 w-full bg-[linear-gradient(90deg,#66C2FF,#0078D4,#4F7CFF,#6B4CE6)]" />
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div {...fadeUp} className="w-full lg:w-[54%]">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#66C2FF]">
              Microsoft Stack
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Built around the Microsoft apps your teams already trust
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              We connect Dynamics 365 with Power Platform, Power BI, Microsoft
              365, Azure, and your existing business systems to create one
              cohesive digital backbone.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {modules.map((module) => {
                const Icon = module.icon;

                return (
                  <motion.div
                    key={module.name}
                    whileHover={{
                      y: -7,
                      scale: 1.025,
                      borderColor: "rgba(102,194,255,0.45)",
                      backgroundColor: "rgba(255,255,255,0.13)",
                      boxShadow: "0 18px 44px rgba(0,0,0,0.16)",
                    }}
                    transition={{ duration: 0.23, ease: "easeOut" }}
                    className="min-w-[165px] flex-1 rounded-[8px] border border-white/12 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                  >
                    <Icon className="mb-4 text-[#66C2FF]" size={28} />
                    <p className="font-bold">{module.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 58 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.68, ease: "easeOut" }}
            className="w-full rounded-[8px] border border-white/14 bg-white p-7 text-[#1F2937] shadow-[0_34px_85px_rgba(0,0,0,0.22)] lg:w-[46%]"
          >
            <div className="flex items-center gap-4 border-b border-[#E5E7EB] pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#0078D4] text-white">
                <ShieldCheck size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#18254E]">
                  Secure by design
                </h3>
                <p className="mt-1 text-[#6B7280]">
                  Roles, approvals, controls, and clean audit visibility.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Role-based access", LockKeyhole],
                ["Cloud-ready governance", CloudCog],
                ["Workflow automation", Workflow],
              ].map(([label, Icon]) => {
                const TypedIcon = Icon as typeof LockKeyhole;

                return (
                  <motion.div
                    key={label as string}
                    whileHover={{
                      x: 8,
                      borderColor: "rgba(0,120,212,0.35)",
                      boxShadow: "0 14px 32px rgba(24,37,78,0.10)",
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center gap-4 rounded-[8px] border border-[#E5E7EB] bg-[#F5F7FA] p-4"
                  >
                    <TypedIcon className="text-[#6B4CE6]" size={24} />
                    <p className="font-bold text-[#1F2937]">{label as string}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-24">
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div {...fadeUp} className="w-full rounded-[8px] border border-[#E5E7EB] bg-white p-7 shadow-[0_22px_60px_rgba(24,37,78,0.1)] lg:w-[49%]">
            <div className="space-y-5">
              {deliverySteps.map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{
                    x: 8,
                    borderColor: "rgba(0,120,212,0.25)",
                    boxShadow: "0 16px 36px rgba(24,37,78,0.10)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex gap-5 rounded-[8px] border border-transparent p-2"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0078D4] text-sm font-black text-white">
                      {index + 1}
                    </div>
                    {index < deliverySteps.length - 1 ? (
                      <div className="mt-3 h-12 w-px bg-[#E5E7EB]" />
                    ) : null}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-black text-[#1F2937]">
                      {step}
                    </h3>
                    <p className="mt-2 leading-7 text-[#6B7280]">
                      Clear milestones, business reviews, testing discipline,
                      and practical documentation at every stage.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 58 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.68, ease: "easeOut" }}
            className="w-full lg:w-[51%]"
          >
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#0078D4]">
              Delivery Approach
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#18254E] md:text-5xl">
              From blueprint to support, the implementation stays business-first
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              We keep the engagement structured without making it rigid:
              requirements are mapped, integrations are tested, users are
              trained, and post-go-live improvements are prioritized by impact.
            </p>
            <Link
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#18254E] px-8 py-4 font-bold text-white shadow-[0_18px_36px_rgba(24,37,78,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0078D4]"
            >
              Plan Your Dynamics Rollout
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <motion.div {...fadeUp} className="container">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#6B4CE6]">
            Schedule A Free Consultation
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-[#18254E] md:text-6xl">
            Ready to modernize your business with Microsoft Dynamics 365?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Talk to AtiSunya Infotech about your current systems, target
            workflows, and the fastest practical route to a connected Microsoft
            business platform.
          </p>
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-full bg-[#0078D4] px-10 py-5 font-bold text-white shadow-[0_20px_42px_rgba(0,120,212,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#18254E]"
            >
              Schedule Free Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
