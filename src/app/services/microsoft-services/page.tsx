"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  FileCheck2,
  GitBranch,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  MonitorCog,
  Settings,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

const ms = {
  red: "#F25022",
  green: "#7FBA00",
  blue: "#00A4EF",
  yellow: "#FFB900",
  textPrimary: "#5E5E5E",
  textSecondary: "#6F6F6F",
  border: "#A6A6A6",
  background: "#FFFFFF",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.58, ease: "easeOut" as const },
};

const accentColors = [ms.red, ms.green, ms.blue, ms.yellow];

const services = [
  {
    title: "Microsoft 365 Workplace",
    desc: "Teams, Outlook, SharePoint, OneDrive, governance, permissions, and adoption support for a sharper modern workplace.",
    icon: UsersRound,
  },
  {
    title: "Azure Cloud Services",
    desc: "Secure cloud architecture, migration planning, workload optimization, integrations, backups, and infrastructure operations.",
    icon: Cloud,
  },
  {
    title: "Power Platform",
    desc: "Power Apps, Power Automate, approvals, forms, and low-code tools that remove manual work from daily operations.",
    icon: GitBranch,
  },
  {
    title: "Power BI Analytics",
    desc: "Executive dashboards, KPI models, department reports, and clean data storytelling for faster business decisions.",
    icon: BarChart3,
  },
  {
    title: "Security & Compliance",
    desc: "Identity, access control, conditional access, governance, audit readiness, endpoint protection, and policy alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Microsoft Support",
    desc: "User support, admin helpdesk, environment health checks, license guidance, issue resolution, and continuous improvement.",
    icon: LifeBuoy,
  },
];

const outcomes = [
  "A governed Microsoft 365 environment users can trust",
  "Cleaner collaboration across teams, files, meetings, and approvals",
  "Cloud systems designed with security, visibility, and scale in mind",
  "Practical reporting that leadership and operations teams can act on",
];

const stack = [
  { name: "Microsoft 365", detail: "Collaboration", icon: Settings },
  { name: "Azure", detail: "Cloud foundation", icon: Cloud },
  { name: "Power Apps", detail: "Business tools", icon: MonitorCog },
  { name: "Power Automate", detail: "Workflow engine", icon: Workflow },
  { name: "Power BI", detail: "Decision layer", icon: BarChart3 },
  { name: "Security", detail: "Access control", icon: LockKeyhole },
];

const deliverySteps = [
  "Assess current Microsoft environment, users, licenses, security, and business workflows.",
  "Design the target setup with governance, automations, reporting, and adoption priorities.",
  "Configure services, migrate data, integrate systems, test flows, and train key users.",
  "Support go-live with monitoring, admin guidance, improvements, and clear operating handover.",
];

export default function MicrosoftServicesPage() {
  return (
    <main
      className="overflow-hidden bg-white text-[#5E5E5E]"
      style={
        {
          "--ms-red": ms.red,
          "--ms-green": ms.green,
          "--ms-blue": ms.blue,
          "--ms-yellow": ms.yellow,
          "--text-primary": ms.textPrimary,
          "--text-secondary": ms.textSecondary,
          "--border": ms.border,
          "--background": ms.background,
        } as React.CSSProperties
      }
    >
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#FFFFFF_0%,#FAFAFA_42%,#F2F8FB_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-1.5 w-full bg-[linear-gradient(90deg,var(--ms-red),var(--ms-green),var(--ms-blue),var(--ms-yellow))]" />
        <div className="absolute bottom-0 left-0 -z-10 h-28 w-full bg-[linear-gradient(0deg,#FFFFFF,rgba(255,255,255,0))]" />

        <div className="container flex flex-col items-center gap-14 py-20 lg:min-h-[calc(100vh-82px)] lg:flex-row lg:py-14">
          <motion.div {...fadeUp} className="w-full lg:w-[48%]">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.04] text-[#5E5E5E] sm:text-6xl lg:text-7xl">
              Microsoft cloud,
              <span className="block text-[#00A4EF]">secured and scaled with precision</span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[8px] bg-[#00A4EF] px-7 py-4 font-bold text-white shadow-[0_18px_38px_rgba(0,164,239,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5E5E5E]"
              >
                Book A Consultation
                <ArrowRight size={19} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-[8px] border border-[#A6A6A6]/55 bg-white px-7 py-4 font-bold text-[#5E5E5E] shadow-[0_14px_32px_rgba(94,94,94,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A4EF]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["M365", "Workplace"],
                ["Azure", "Cloud"],
                ["Secure", "Operations"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                    borderColor: accentColors[index],
                    boxShadow: "0 24px 54px rgba(94,94,94,0.15)",
                  }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="rounded-[8px] border border-[#A6A6A6]/35 bg-white p-4 shadow-[0_14px_34px_rgba(94,94,94,0.08)]"
                >
                  <span
                    className="mb-4 block h-1.5 w-12 rounded-full"
                    style={{ backgroundColor: accentColors[index] }}
                  />
                  <p className="text-2xl font-black text-[#5E5E5E]">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#6F6F6F]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full lg:w-[52%]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[8px] border border-[#A6A6A6]/45 bg-white shadow-[0_36px_95px_rgba(94,94,94,0.17)]"
            >
              <div className="grid grid-cols-2">
                {[
                  [ms.red, "Microsoft 365", "Productive teams"],
                  [ms.green, "Power Platform", "Automated work"],
                  [ms.blue, "Azure Cloud", "Secure foundation"],
                  [ms.yellow, "Power BI", "Visible decisions"],
                ].map(([color, title, detail]) => (
                  <motion.div
                    key={title}
                    whileHover={{
                      scale: 1.035,
                      y: -4,
                      transition: { duration: 0.22 },
                    }}
                    className="min-h-[150px] cursor-default p-6 text-white transition-shadow duration-300 hover:shadow-[inset_0_0_0_999px_rgba(255,255,255,0.08)] sm:min-h-[190px]"
                    style={{ backgroundColor: color }}
                  >
                    <p className="text-xl font-black sm:text-2xl">{title}</p>
                    <p className="mt-3 max-w-[13rem] text-sm font-semibold leading-6 text-white/85">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-[#A6A6A6]/35 bg-white p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["99.9%", "Cloud readiness"],
                    ["24/7", "Support visibility"],
                    ["360", "Business control"],
                  ].map(([value, label], index) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                        borderColor: accentColors[index],
                        boxShadow: "0 16px 34px rgba(94,94,94,0.12)",
                      }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="rounded-[8px] border border-[#A6A6A6]/25 bg-[#F7F7F7] px-4 py-5 text-center"
                    >
                      <p className="text-2xl font-black text-[#5E5E5E]">{value}</p>
                      <p className="mt-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#6F6F6F]">
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#00A4EF]">
              Service Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#5E5E5E] md:text-5xl">
              A complete Microsoft service layer for everyday business
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6F6F6F]">
              From workplace collaboration to cloud operations, we shape the
              Microsoft stack around how your business actually runs.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const color = accentColors[index % accentColors.length];

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
                    y: -10,
                    scale: 1.015,
                    borderColor: color,
                    boxShadow: "0 28px 68px rgba(94,94,94,0.16)",
                    transition: { duration: 0.24, ease: "easeOut" },
                  }}
                  className="group relative min-h-[265px] overflow-hidden rounded-[8px] border border-[#A6A6A6]/35 bg-white p-7 shadow-[0_14px_34px_rgba(94,94,94,0.07)] transition-colors duration-300"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] text-white shadow-[0_14px_28px_rgba(94,94,94,0.15)]"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={29} />
                  </div>
                  <h3 className="text-xl font-black text-[#5E5E5E]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6F6F]">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div {...fadeUp} className="w-full lg:w-[42%]">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#F25022]">
              Business Outcomes
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#5E5E5E] md:text-5xl">
              Premium implementation, practical business impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6F6F6F]">
              Microsoft services work best when the setup is secure, simple for
              users, and measurable for leadership. We focus on clean adoption,
              not cosmetic deployment.
            </p>
          </motion.div>

          <div className="grid w-full gap-5 sm:grid-cols-2 lg:w-[58%]">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                {...fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  borderColor: accentColors[index % accentColors.length],
                  boxShadow: "0 26px 58px rgba(94,94,94,0.14)",
                  transition: { duration: 0.24, ease: "easeOut" },
                }}
                className="rounded-[8px] border border-[#A6A6A6]/35 bg-white p-6 shadow-[0_14px_34px_rgba(94,94,94,0.07)]"
              >
                <CheckCircle2
                  className="mb-5"
                  size={30}
                  style={{ color: accentColors[index % accentColors.length] }}
                />
                <h3 className="text-lg font-black leading-7 text-[#5E5E5E]">
                  {outcome}
                </h3>
                <p className="mt-3 leading-7 text-[#6F6F6F]">
                  Structured around ownership, security controls, user comfort,
                  and management-level clarity.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#5E5E5E] py-24 text-white">
        <div className="absolute left-0 top-0 -z-10 h-1.5 w-full bg-[linear-gradient(90deg,var(--ms-red),var(--ms-green),var(--ms-blue),var(--ms-yellow))]" />
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div {...fadeUp} className="w-full lg:w-[54%]">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#FFB900]">
              Microsoft Stack
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              One ecosystem for collaboration, automation, cloud, and insight
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
              We connect the services your teams already use and refine them
              into a stable operating layer with governance, visibility, and
              support built in from the start.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stack.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{
                      y: -7,
                      scale: 1.025,
                      borderColor: accentColors[index % accentColors.length],
                      backgroundColor: "rgba(255,255,255,0.13)",
                      boxShadow: "0 18px 44px rgba(0,0,0,0.16)",
                    }}
                    transition={{ duration: 0.23, ease: "easeOut" }}
                    className="rounded-[8px] border border-white/14 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                  >
                    <Icon
                      className="mb-4"
                      size={28}
                      style={{ color: accentColors[index % accentColors.length] }}
                    />
                    <p className="font-black">{item.name}</p>
                    <p className="mt-1 text-sm font-semibold text-white/68">
                      {item.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 54 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.66, ease: "easeOut" }}
            className="w-full rounded-[8px] border border-white/14 bg-white p-7 text-[#5E5E5E] shadow-[0_34px_85px_rgba(0,0,0,0.24)] lg:w-[46%]"
          >
            <div className="flex items-center gap-4 border-b border-[#A6A6A6]/35 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#00A4EF] text-white">
                <ShieldCheck size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#5E5E5E]">
                  Security-first operations
                </h3>
                <p className="mt-1 text-[#6F6F6F]">
                  Roles, policies, access, audits, and admin clarity.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Identity and access governance", LockKeyhole, ms.red],
                ["Cloud-ready controls", Layers3, ms.green],
                ["Documented admin handover", FileCheck2, ms.blue],
              ].map(([label, Icon, color]) => {
                const TypedIcon = Icon as typeof LockKeyhole;

                return (
                  <motion.div
                    key={label as string}
                    whileHover={{
                      x: 8,
                      borderColor: color as string,
                      boxShadow: "0 14px 32px rgba(94,94,94,0.10)",
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center gap-4 rounded-[8px] border border-[#A6A6A6]/25 bg-[#F7F7F7] p-4"
                  >
                    <TypedIcon style={{ color: color as string }} size={24} />
                    <p className="font-bold text-[#5E5E5E]">{label as string}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-24">
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <motion.div {...fadeUp} className="w-full rounded-[8px] border border-[#A6A6A6]/35 bg-white p-7 shadow-[0_22px_60px_rgba(94,94,94,0.1)] lg:w-[49%]">
            <div className="space-y-5">
              {deliverySteps.map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{
                    x: 8,
                    borderColor: accentColors[index],
                    boxShadow: "0 16px 36px rgba(94,94,94,0.10)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex gap-5 rounded-[8px] border border-transparent p-2"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[8px] text-sm font-black text-white"
                      style={{ backgroundColor: accentColors[index] }}
                    >
                      {index + 1}
                    </div>
                    {index < deliverySteps.length - 1 ? (
                      <div className="mt-3 h-12 w-px bg-[#A6A6A6]/45" />
                    ) : null}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-black text-[#5E5E5E]">
                      Phase {index + 1}
                    </h3>
                    <p className="mt-2 leading-7 text-[#6F6F6F]">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 54 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.66, ease: "easeOut" }}
            className="w-full lg:w-[51%]"
          >
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#00A4EF]">
              Delivery Approach
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#5E5E5E] md:text-5xl">
              Designed, deployed, and supported with executive discipline
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6F6F6F]">
              Every engagement is handled with structured discovery, clean
              configuration, user-ready documentation, and support that keeps
              the Microsoft environment stable after launch.
            </p>
            <Link
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-[#5E5E5E] px-8 py-4 font-bold text-white shadow-[0_18px_36px_rgba(94,94,94,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A4EF]"
            >
              Plan Your Microsoft Setup
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <motion.div {...fadeUp} className="container">
          <div className="mx-auto mb-8 grid h-16 w-16 grid-cols-2 gap-1">
            <span className="bg-[#F25022]" />
            <span className="bg-[#7FBA00]" />
            <span className="bg-[#00A4EF]" />
            <span className="bg-[#FFB900]" />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#F25022]">
            Schedule A Consultation
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-[#5E5E5E] md:text-6xl">
            Ready to upgrade your Microsoft services experience?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6F6F6F]">
            Talk to AtiSunya Infotech about your Microsoft environment, support
            needs, cloud roadmap, security priorities, and automation goals.
          </p>
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-[8px] bg-[#00A4EF] px-10 py-5 font-bold text-white shadow-[0_20px_42px_rgba(0,164,239,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5E5E5E]"
            >
              Schedule Free Demo
              <Sparkles size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
