"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileCheck2,
  FolderKanban,
  GitBranch,
  Landmark,
  LucideIcon,
  Receipt,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

const brand = {
  navy: "#002050",
  teal: "#2F7F78",
  gold: "#fbc02d",
  blue: "#1673C8",
  ink: "#0D1730",
};

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.58, ease: "easeOut" as const },
};

const metrics = [
  { value: "42", label: "Live projects", icon: FolderKanban, color: brand.teal },
  { value: "86%", label: "Utilization", icon: UsersRound, color: brand.gold },
  { value: "128", label: "Invoices", icon: Receipt, color: brand.blue },
  { value: "24/7", label: "Control", icon: ShieldCheck, color: "#7C3AED" },
];

const features: Feature[] = [
  {
    title: "Project Command",
    desc: "Track projects, milestones, tasks, dependencies, and delivery status in one governed workspace.",
    icon: FolderKanban,
    color: brand.teal,
  },
  {
    title: "Resource Planning",
    desc: "Plan capacity, assign consultants, monitor utilization, and avoid allocation conflicts.",
    icon: UsersRound,
    color: brand.blue,
  },
  {
    title: "Billing & GST",
    desc: "Automate client billing, GST invoices, receivables, expenses, and project profitability.",
    icon: Receipt,
    color: brand.gold,
  },
  {
    title: "Contract Controls",
    desc: "Manage SOWs, approvals, documentation, project scope, and client commitments.",
    icon: FileCheck2,
    color: "#E83E8C",
  },
  {
    title: "Finance Visibility",
    desc: "See margins, costs, collections, revenue leakage, and operational KPIs clearly.",
    icon: Landmark,
    color: "#00A4EF",
  },
  {
    title: "Configurable Workflows",
    desc: "Shape approvals, roles, alerts, and operating rules around your business model.",
    icon: GitBranch,
    color: "#6B4CE6",
  },
];

const modules = [
  "Projects",
  "Tasks",
  "Timesheets",
  "Resources",
  "Contracts",
  "Billing",
  "Expenses",
  "Reports",
];

const timeline = [
  "Discovery and operating blueprint",
  "Role, workflow, and module configuration",
  "Data setup, integrations, and UAT",
  "Go-live support and continuous improvement",
];

export default function ERPOnePage() {
  return (
    <main className="overflow-hidden bg-[#F6F9FC] text-[#0D1730]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#061833]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,#002050_0%,#07386A_46%,#2F7F78_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />

        <div className="container grid min-h-[calc(100vh-82px)] items-center gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp}>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Run projects,
              <span className="block text-[#fbc02d]">people, billing.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              ERPOne gives IT and consulting firms one premium operating layer for projects, timesheets, resources, contracts, invoices, reports, and executive control.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.26)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Schedule Demo
                <ArrowRight size={19} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 rounded-[10px] border border-white/18 bg-white/10 px-8 py-4 font-bold text-white shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
              >
                View Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 58 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                y: -12,
                boxShadow: "0 46px 110px rgba(0,0,0,0.34)",
              }}
              className="rounded-[24px] border border-white/16 bg-white/10 p-5 shadow-[0_36px_100px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <div className="rounded-[18px] border border-white/12 bg-[#071B39] p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#fbc02d]" />
                    <span className="h-3 w-3 rounded-full bg-[#2F7F78]" />
                    <span className="h-3 w-3 rounded-full bg-[#1673C8]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-white/60">
                    ERPOne Command Center
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        whileHover={{
                          y: -7,
                          scale: 1.02,
                          borderColor: item.color,
                          backgroundColor: "rgba(255,255,255,0.12)",
                        }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="rounded-[14px] border border-white/12 bg-white/8 p-5"
                      >
                        <Icon size={25} style={{ color: item.color }} />
                        <p className="mt-5 text-3xl font-black text-white">{item.value}</p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                          {item.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-[14px] border border-white/12 bg-white/8 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-black text-white">Revenue pipeline</p>
                    <span className="rounded-full bg-[#2F7F78]/24 px-3 py-1 text-xs font-black text-[#8AF2D7]">
                      +31% QoQ
                    </span>
                  </div>
                  <div className="flex h-32 items-end gap-3">
                    {[42, 58, 51, 68, 74, 88].map((height, index) => (
                      <motion.span
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: index * 0.06 }}
                        className="flex-1 rounded-t-[8px] bg-[linear-gradient(180deg,#fbc02d,#2F7F78)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Designed for service businesses that need operational discipline
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{
                    duration: 0.54,
                    ease: "easeOut" as const,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.012,
                    borderColor: item.color,
                    boxShadow: "0 28px 68px rgba(0,32,80,0.13)",
                  }}
                  className="relative overflow-hidden rounded-[16px] border border-[#002050]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,32,80,0.07)]"
                >
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: item.color }} />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] text-white shadow-[0_14px_28px_rgba(0,32,80,0.16)]" style={{ backgroundColor: item.color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[#002050]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Every daily workflow connected to one business backbone
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              ERPOne aligns sales handoff, delivery, resource planning, finance, reporting, and governance so growing service teams can operate with clarity.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {modules.map((module, index) => (
              <motion.div
                key={module}
                {...fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.018,
                  borderColor: index % 2 === 0 ? brand.teal : brand.gold,
                  boxShadow: "0 22px 54px rgba(0,32,80,0.12)",
                }}
                className="rounded-[14px] border border-[#002050]/10 bg-white p-5 shadow-[0_14px_34px_rgba(0,32,80,0.07)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2F7F78]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-black text-[#002050]">{module}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#002050] py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div {...fadeUp} className="rounded-[20px] border border-white/14 bg-white/8 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.20)]">
            <div className="space-y-5">
              {timeline.map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{
                    x: 8,
                    borderColor: index % 2 === 0 ? brand.gold : brand.teal,
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex gap-5 rounded-[14px] border border-white/10 bg-white/7 p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#fbc02d] text-sm font-black text-[#002050]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-white">{step}</h3>
                    <p className="mt-1 leading-7 text-white/62">
                      Built with clear ownership, review gates, test cycles, and measurable adoption.
                    </p>
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
          >
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              From blueprint to go-live with executive-grade control.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              We configure ERPOne around real operating rules, approval chains, reporting needs, and the rhythm of IT and consulting firms.
            </p>
            <Link
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Plan ERPOne Demo
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto mb-6 text-[#2F7F78]" size={38} />
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-6xl">
              Ready to run your service business through ERPOne?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Bring projects, people, billing, expenses, contracts, and reporting into a single premium business system.
            </p>
            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#002050] px-10 py-5 font-black text-white shadow-[0_20px_42px_rgba(0,32,80,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F7F78]"
              >
                Schedule Free Demo
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
