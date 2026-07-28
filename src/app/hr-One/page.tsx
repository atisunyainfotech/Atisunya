"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck2,
  Clock3,
  FileText,
  Gauge,
  Landmark,
  LockKeyhole,
  LucideIcon,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
} from "lucide-react";
import LoginImg from "@/assets/products/HRMSOneLogin.png";
import DashboardImg from "@/assets/products/HRMSOneDashboard.png";
import AdminImg from "@/assets/products/HRMSOneAdmin.png";

type Module = {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

type Screenshot = {
  title: string;
  desc: string;
  image: StaticImageData;
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

const stats = [
  { value: "268", label: "Active staff", icon: UsersRound, color: brand.blue },
  { value: "96.4%", label: "Attendance", icon: CalendarCheck2, color: brand.teal },
  { value: "6", label: "Pending leaves", icon: Clock3, color: brand.gold },
  { value: "7", label: "Open roles", icon: BriefcaseBusiness, color: "#7C3AED" },
];

const modules: Module[] = [
  {
    title: "Employee Master",
    desc: "Central employee records with roles, branches, departments, documents, and lifecycle history.",
    icon: UsersRound,
    color: brand.blue,
  },
  {
    title: "Attendance Control",
    desc: "Daily attendance, late arrivals, leave status, filters, and real-time workforce snapshots.",
    icon: CalendarCheck2,
    color: brand.teal,
  },
  {
    title: "Payroll Engine",
    desc: "Payroll runs, salary data, statutory records, approvals, and audit-ready payroll operations.",
    icon: WalletCards,
    color: brand.gold,
  },
  {
    title: "Leave & Requests",
    desc: "Leave balances, approvals, pending requests, expenses, and employee self-service workflows.",
    icon: FileText,
    color: "#E83E8C",
  },
  {
    title: "Role Security",
    desc: "Admin, employee, and manager views with secure role-based access and clean permissions.",
    icon: LockKeyhole,
    color: "#6B4CE6",
  },
  {
    title: "Workforce Reports",
    desc: "Headcount growth, attendance trends, payroll visibility, and leadership-ready dashboards.",
    icon: BarChart3,
    color: "#00A4EF",
  },
];

const screenshots: Screenshot[] = [
  {
    title: "Secure Login Experience",
    desc: "A polished entry point for employees and admins.",
    image: LoginImg,
  },
  {
    title: "Employee Workspace",
    desc: "Self-service snapshots for attendance, leave, expenses, and profile actions.",
    image: DashboardImg,
  },
  {
    title: "Admin Command Center",
    desc: "Attendance, payroll, hiring, filters, and workforce intelligence in one place.",
    image: AdminImg,
  },
];

export default function HRMSOnePage() {
  return (
    <main className="overflow-hidden bg-[#F6F9FC] text-[#0D1730]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#061833]">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#002050_0%,#0C4C83_48%,#2F7F78_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />

        <div className="container grid min-h-[calc(100vh-82px)] items-center gap-14 py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div {...fadeUp}>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Your people,
              <span className="block text-[#fbc02d]">beautifully managed.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Attendance, payroll, leave, expenses, hiring, and employee self-service in a premium workforce platform built around Atisunya standards.
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

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      borderColor: item.color,
                      boxShadow: "0 24px 58px rgba(0,0,0,0.22)",
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="rounded-[14px] border border-white/14 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur"
                  >
                    <Icon size={24} style={{ color: item.color }} />
                    <p className="mt-5 text-3xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
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
                boxShadow: "0 46px 110px rgba(0,0,0,0.36)",
              }}
              className="overflow-hidden rounded-[22px] border border-white/16 bg-white p-2 shadow-[0_36px_100px_rgba(0,0,0,0.28)]"
            >
              <Image
                src={AdminImg}
                alt="HRMSOne admin attendance dashboard"
                priority
                className="h-auto w-full rounded-[17px]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 gap-3 rounded-[16px] border border-white/16 bg-[#061833]/88 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur max-sm:static max-sm:mt-5"
            >
              {["Add Employee", "Apply Leave", "Run Payroll"].map((label, index) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.14)" }}
                  className="rounded-[12px] border border-white/10 bg-white/8 px-3 py-4 text-center text-xs font-black text-white"
                >
                  <span className="mx-auto mb-2 block h-1.5 w-10 rounded-full" style={{ backgroundColor: index === 0 ? brand.gold : index === 1 ? brand.teal : brand.blue }} />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Premium interfaces for every HR workflow
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {screenshots.map((shot, index) => (
              <motion.div
                key={shot.title}
                {...fadeUp}
                transition={{
                  duration: 0.56,
                  ease: "easeOut" as const,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.012,
                  borderColor: index === 0 ? brand.gold : index === 1 ? brand.teal : brand.blue,
                  boxShadow: "0 30px 78px rgba(0,32,80,0.14)",
                }}
                className="overflow-hidden rounded-[18px] border border-[#002050]/10 bg-white p-3 shadow-[0_18px_45px_rgba(0,32,80,0.08)]"
              >
                <div className="overflow-hidden rounded-[14px] bg-[#F6F9FC]">
                  <Image src={shot.image} alt={shot.title} className="h-auto w-full transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-[#002050]">{shot.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{shot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              One operating layer for the complete employee lifecycle
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item, index) => {
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

      <section className="relative overflow-hidden bg-[#002050] py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              HR operations that feel crisp, governed, and fast.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              HRMSOne brings daily attendance, people data, payroll readiness, hiring actions, employee requests, and admin controls into one polished command layer.
            </p>
            <Link
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Plan HRMSOne Demo
              <ArrowRight size={19} />
            </Link>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Secure access", ShieldCheck],
              ["Payroll readiness", Landmark],
              ["Employee self-service", Sparkles],
              ["Live workforce KPIs", Gauge],
            ].map(([label, Icon], index) => {
              const TypedIcon = Icon as LucideIcon;

              return (
                <motion.div
                  key={label as string}
                  {...fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    borderColor: index === 0 ? brand.gold : brand.teal,
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                  className="rounded-[16px] border border-white/14 bg-white/8 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
                >
                  <TypedIcon className="mb-5 text-[#fbc02d]" size={30} />
                  <h3 className="text-xl font-black">{label as string}</h3>
                  <p className="mt-3 leading-7 text-white/64">
                    Structured for scale, audits, adoption, and leadership visibility.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
