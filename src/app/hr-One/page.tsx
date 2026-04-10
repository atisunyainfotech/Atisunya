"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Brain,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Users,
  Clock,
  Layers,
  Globe,
  Settings,
  Zap,
  CheckCircle,
} from "lucide-react";
import HROneIcon from "@/assets/products/HR-One.png";
import ERPIcon from "@/assets/products/erp.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";

import DashboardImg from "@/assets/products/HROneDashboard.png";
import PayrollImg from "@/assets/products/HROnePayroll.png";
import AttendanceImg from "@/assets/products/HROneAttendance.png";

/* ---------------- PRODUCTS ---------------- */
const products = [
  {
    title: "ERP One",
    image: ERPIcon,
    description:
      "Enterprise resource planning platform engineered for automation, operational control, and scalable digital transformation.",
  },
  {
    title: "HRMS - One",
    image: HROneIcon,
    description:
      "A comprehensive HRMS solution designed for modern organizations, streamlining the entire employee lifecycle from onboarding to exit with payroll, attendance, and performance management.",
  },
  {
    title: "Copilot / Chatbot",
    image: ChatbotIcon,
    description:
      "AI-powered conversational assistant built to enhance engagement, support automation, and streamline communication.",
  },
];

/* ---------------- FEATURE DATA ---------------- */
const features = [
  {
    icon: Users,
    title: "Employee Lifecycle Management",
    desc: "Seamlessly manage hiring, onboarding, growth, and exit processes with a unified HR workflow.",
  },
  {
    icon: BarChart3,
    title: "Indian Payroll Compliance",
    desc: "Automated payroll with TDS, PT, and CTC calculations ensuring compliance and accuracy.",
  },
  {
    icon: Layers,
    title: "9 Integrated Modules",
    desc: "All HR operations combined into one system for efficiency and seamless data flow.",
  },
  {
    icon: ShieldCheck,
    title: "RBAC & Security",
    desc: "Role-based access control with secure SOW generation for governance and transparency.",
  },
  {
    icon: Clock,
    title: "Attendance & Performance",
    desc: "Track attendance, manage leaves, and run appraisals with actionable insights.",
  },
];

/* ---------------- WHY BETTER ---------------- */
const advantages = [
  {
    icon: Rocket,
    title: "Faster Implementation",
    desc: "Deploy within days, not months. Built for quick onboarding and rapid adoption.",
  },
  {
    icon: Brain,
    title: "Smart Automation",
    desc: "Reduce manual HR work with intelligent workflows and automation.",
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    desc: "Clean, intuitive, and responsive design that teams actually enjoy using.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Advanced role-based access, data encryption, and compliance-ready architecture.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    desc: "Make smarter decisions with real-time analytics, reports, and dashboards.",
  },
  {
    icon: Users,
    title: "Employee-Centric Design",
    desc: "Built to enhance employee experience with self-service and transparency.",
  },
  {
    icon: Clock,
    title: "Time & Cost Efficiency",
    desc: "Automate repetitive tasks and reduce operational overhead significantly.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Designed to grow with your organization from startup to enterprise.",
  },
  {
    icon: Globe,
    title: "Anywhere Access",
    desc: "Cloud-based platform accessible anytime, anywhere across devices.",
  },
  {
    icon: Settings,
    title: "Highly Customizable",
    desc: "Flexible modules and configurations tailored to your business needs.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized for speed and reliability, ensuring smooth daily operations.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    desc: "Built with Indian payroll, tax, and labor law compliance in mind.",
  },
];

/* ---------------- STATS DATA ---------------- */
// const stats = [
//   { num: "97%", label: "Retention Uplift" },
//   { num: "3.2×", label: "Faster Hiring" },
//   { num: "9+", label: "Integrated Modules" },
//   { num: "10k+", label: "Teams Onboarded" },
// ];

/* ---------------- MODULES DATA ---------------- */
const modules = [
  {
    num: "01",
    name: "Recruitment & Hiring",
    desc: "End-to-end applicant tracking and offer management.",
  },
  {
    num: "02",
    name: "Onboarding",
    desc: "Personalised joining journeys from day one.",
  },
  {
    num: "03",
    name: "Payroll & Compliance",
    desc: "TDS, PT, CTC — automated and audit-ready.",
  },
  {
    num: "04",
    name: "Attendance & Leave",
    desc: "Real-time tracking with smart leave policies.",
  },
  {
    num: "05",
    name: "Performance Management",
    desc: "360° reviews, OKRs, and calibration tools.",
  },
  {
    num: "06",
    name: "Employee Self-Service",
    desc: "Empower employees with their own HR portal.",
  },
  {
    num: "07",
    name: "Analytics & Reports",
    desc: "Actionable workforce intelligence at your fingertips.",
  },
  {
    num: "08",
    name: "RBAC & Permissions",
    desc: "Granular role-based access for every level.",
  },
  {
    num: "09",
    name: "Document Management",
    desc: "Secure, compliant document storage and SOW generation.",
  },
];

/* ---------------- PRODUCT CARD ---------------- */
const Card = ({ item }: any) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group rounded-3xl p-[1px] bg-gradient-to-br from-[#002050] via-[#2F7F78] to-[#002050] hover:shadow-[0_20px_60px_rgba(0,32,80,0.4)]"
    >
      <div className="rounded-3xl p-10 bg-gradient-to-br from-[#002050] to-[#2F7F78] text-white flex flex-col h-full transition-all duration-500">
        {/* ICON */}
        <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 mx-auto mb-8 group-hover:scale-110 transition">
          <Image
            src={item.image}
            alt={item.title}
            width={50}
            height={50}
            className="brightness-0 invert"
          />
        </div>
        {/* TITLE */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          {item.title}
        </h3>
        {/* DIVIDER */}
        <div className="w-12 h-1 bg-[#fbc02d] mx-auto mb-6 rounded-full group-hover:shadow-[0_0_15px_rgba(251,192,45,0.8)]"></div>
        {/* DESC */}
        <p className="text-white/80 text-center leading-relaxed flex-grow">
          {item.description}
        </p>
        {/* BUTTON */}
        <div className="mt-8">
          <button className="relative w-full py-3 rounded-full bg-[#fbc02d] text-[#002050] font-semibold overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(251,192,45,0.5)] transition">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
            <span className="relative z-10">Discover Solution</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- FEATURE CARD ---------------- */
const FeatureCard = ({ item, index }: any) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#2F7F78] border border-transparent transition-all duration-300 flex gap-4 items-start"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#002050] to-[#2F7F78] text-white flex-shrink-0">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="font-semibold text-[#002050]">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

/* ---------------- HERO ---------------- */
const Hero = () => (
  <div className="text-center py-20">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-5xl font-bold"
    >
      Next-Gen HRMS for
      <span className="text-[#2F7F78]"> Modern Teams</span>
    </motion.h1>

    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
      HRMS-One simplifies HR operations with automation, insights, and a
      world-class experience.
    </p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-12 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,32,80,0.15)] border border-[#e0e8f5]"
    >
      <Image src={DashboardImg} alt="dashboard" className="rounded-2xl" />
    </motion.div>
  </div>
);

/* ---------------- IMAGE SHOWCASE ---------------- */
const Showcase = () => (
  <div className="grid md:grid-cols-2 gap-12 items-center my-24">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,32,80,0.12)] border border-[#e0e8f5]"
    >
      <Image src={PayrollImg} alt="payroll" className="rounded-2xl w-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2F7F78] mb-3">
        Payroll Engine
      </p>
      <h2 className="text-3xl font-bold text-[#002050] mb-4">
        Powerful Payroll System
      </h2>
      <div className="w-12 h-1 bg-[#fbc02d] rounded-full mb-5"></div>
      <p className="text-gray-600 leading-relaxed">
        Automate salary, deductions, compliance, and reports with zero errors.
      </p>
      <ul className="mt-6 space-y-3">
        {[
          "TDS, PT & PF auto-calculation",
          "One-click payslip generation",
          "Statutory compliance reports",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F7F78] flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#2F7F78] mb-3">
        Attendance Module
      </p>
      <h2 className="text-3xl font-bold text-[#002050] mb-4">
        Smart Attendance
      </h2>
      <div className="w-12 h-1 bg-[#fbc02d] rounded-full mb-5"></div>
      <p className="text-gray-600 leading-relaxed">
        Track employee attendance with real-time data and analytics.
      </p>
      <ul className="mt-6 space-y-3">
        {[
          "Biometric & geo-tagged check-in",
          "Automated leave policy engine",
          "Overtime & shift management",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span className="w-2 h-2 rounded-full bg-[#002050] flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,32,80,0.12)] border border-[#e0e8f5]"
    >
      <Image
        src={AttendanceImg}
        alt="attendance"
        className="rounded-2xl w-full"
      />
    </motion.div>
  </div>
);

/* ---------------- MAIN PAGE ---------------- */
export default function HRPage() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* ── HERO BANNER ── */}
      <div
        className="relative px-6 pt-28 pb-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #002050 0%, #003580 45%, #2F7F78 100%)",
        }}
      >
        {/* subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#fbc02d] mb-6 flex items-center justify-center gap-3">
            <span className="block w-8 h-px bg-[#fbc02d] opacity-60"></span>
            Next-Gen HRMS · Atisunya Infotech Pvt Ltd
            <span className="block w-8 h-px bg-[#fbc02d] opacity-60"></span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            HRMS - One Powered by{" "}
            <span className="italic font-light text-[#fbc02d]">
              Atisunya Infotech
            </span>
          </h1>

          <div className="w-20 h-1 bg-[#fbc02d] mx-auto mt-2 mb-8 rounded-full"></div>

          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            HR-One simplifies HR operations with automation, insights, and a
            world-class experience — built for Indian SMEs.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {/* <button className="bg-[#fbc02d] text-[#002050] font-semibold px-8 py-3 rounded-full text-sm tracking-wide hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(251,192,45,0.4)] transition-all duration-300">
              Start Free Trial
            </button> */}
            <Link
              href="/contact-us"
              className="bg-[#fbc02d] text-[#002050] font-semibold px-8 py-3 rounded-full text-sm tracking-wide hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(251,192,45,0.4)] transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── STATS STRIP ── */}
      {/* <div className="bg-white border-b-4 border-[#fbc02d] grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="py-8 px-6 text-center border-r border-gray-100 last:border-r-0"
          >
            <div
              className="text-4xl font-light text-[#002050]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {s.num}
            </div>
            <div className="text-xs tracking-[0.15em] uppercase text-gray-400 mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* ── FEATURES SECTION ── */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#2F7F78] mb-3">
              Core Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002050]">
              Full-Featured HRMS for{" "}
              <span className="italic font-light text-[#2F7F78]">
                Indian SMEs
              </span>
            </h2>
            <div className="w-12 h-1 bg-[#fbc02d] mx-auto mt-5 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <FeatureCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY BETTER ── */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #002050, #003580 50%, #2F7F78)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#fbc02d] mb-3">
              Why HR-One
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Why HR-One is{" "}
              <span className="italic font-light text-[#fbc02d]">Better</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/7 border border-white/10 rounded-2xl p-8 text-left hover:border-[#fbc02d]/40 hover:bg-white/10 transition-all duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="w-14 h-14 rounded-full border border-[#fbc02d]/35 bg-[#fbc02d]/15 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#fbc02d]" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {a.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MODULES GRID ── */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#2F7F78] mb-3">
              What&apos;s Inside
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002050] mb-3">
              9 Integrated{" "}
              <span className="italic font-light text-[#2F7F78]">Modules</span>
            </h2>
            <div className="w-12 h-1 bg-[#fbc02d] mx-auto mt-5 mb-14 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-left border-t-4 border-transparent hover:border-[#2F7F78] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute top-3 right-4 text-5xl font-light leading-none select-none pointer-events-none"
                  style={{ color: "#e8f0fe", fontFamily: "Georgia, serif" }}
                >
                  {m.num}
                </div>
                <div className="text-sm font-semibold text-[#002050] mb-1 relative z-10">
                  {m.name}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed relative z-10">
                  {m.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO (DASHBOARD IMG) ── */}
      <div className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Hero />
        </div>
      </div>

      {/* ── SHOWCASE (PAYROLL + ATTENDANCE IMAGES) ── */}
      <div className="bg-gray-50 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#2F7F78] mb-3">
              Built for India
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002050]">
              Powerful Payroll &{" "}
              <span className="italic font-light text-[#2F7F78]">
                Smart Attendance
              </span>
            </h2>
            <div className="w-12 h-1 bg-[#fbc02d] mx-auto mt-5 rounded-full"></div>
          </motion.div>
          <Showcase />
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f8fafc 50%, #f1f5f9)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#2F7F78] mb-3">
              Product Suite
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002050]">
              Powered by{" "}
              <span className="italic font-light text-[#fbc02d]">
                Atisunya Infotech
              </span>
            </h2>
            <div className="w-12 h-1 bg-[#fbc02d]/40 mx-auto mt-5 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FOOTER BAND ── */}
      <div className="bg-[#2F7F78] py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to put your people{" "}
            <span className="italic font-light text-[#fbc02d]">first?</span>
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Join thousands of Indian SMEs building modern, human workplaces with
            HR One.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* <button className="bg-[#fbc02d] text-[#002050] font-semibold px-8 py-3 rounded-full text-sm tracking-wide hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(251,192,45,0.4)] transition-all duration-300">
              Start Free — No Card Needed
            </button> */}
            <Link
              href="/contact-us"
              className="border border-white/30 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:border-white/70 hover:bg-white/5 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── FOOTER ── */}
      {/* <div className="bg-[#001030] py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-white/40 text-base" style={{ fontFamily: "Georgia, serif" }}>
          HR <span className="text-[#fbc02d]">ONE</span>
        </div>
        <div className="text-white/25 text-xs">
          © 2026 HR One · Atisunya Infotech Pvt Ltd. All rights reserved.
        </div>
        <div className="text-white/25 text-xs">React · Node.js · PostgreSQL</div>
      </div> */}
    </div>
  );
}
