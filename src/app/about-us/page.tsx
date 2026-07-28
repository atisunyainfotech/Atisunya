"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Director1 from "@/assets/about-us/Jay.png";
import Director2 from "@/assets/about-us/Atul.jpg";
import ConsultingImg from "@/assets/consulting.jpg";
import BusinessAnalysisImg from "@/assets/business-analysis.webp";

const brand = {
  navy: "#002050",
  teal: "#2F7F78",
  gold: "#fbc02d",
  blue: "#1673C8",
};

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.58, ease: "easeOut" as const },
};

const proofPoints = [
  { value: "ERP", label: "Platform consulting", icon: Layers3, color: brand.gold },
  { value: "Cloud", label: "Modern delivery", icon: CloudCog, color: brand.teal },
  { value: "360", label: "Business view", icon: LineChart, color: brand.blue },
];

const services = [
  {
    title: "ERP Consulting",
    desc: "NetSuite, Dynamics, SAP, Salesforce, Zoho, and Odoo consulting shaped around real business workflows.",
    icon: BriefcaseBusiness,
    color: brand.teal,
  },
  {
    title: "Cloud Products",
    desc: "AtiSunya ERP and HRMS products for finance, inventory, projects, people operations, and reporting.",
    icon: Blocks,
    color: brand.blue,
  },
  {
    title: "Integration Engineering",
    desc: "Clean integrations, automations, dashboards, and data movement across the systems your teams already use.",
    icon: DatabaseZap,
    color: brand.gold,
  },
  {
    title: "Custom Applications",
    desc: "Web and mobile applications with scalable architecture, modern interfaces, and secure foundations.",
    icon: Code2,
    color: "#E83E8C",
  },
];

const process = [
  "Understand operations, pain points, users, and leadership expectations.",
  "Design a practical blueprint with platform, workflow, data, and adoption plans.",
  "Configure, customize, integrate, test, and prepare teams for go-live.",
  "Support, improve, and expand the solution as the business grows.",
];

const directors = [
  {
    name: "Jay Kumar Rauniyar",
    role: "Director, Sales & Operations",
    image: Director1,
    desc: "Leads business growth, client partnerships, delivery coordination, and operational excellence with a focus on outcomes.",
  },
  {
    name: "Atul Kumar Verma",
    role: "Director, Solution Architecture",
    image: Director2,
    desc: "Guides solution strategy, enterprise architecture, integrations, and scalable technology design for transformation programs.",
  },
];

const values = [
  { label: "Clarity before complexity", icon: Compass },
  { label: "Secure, scalable foundations", icon: ShieldCheck },
  { label: "Partnership after go-live", icon: Handshake },
  { label: "Technology built for people", icon: UsersRound },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F6F9FC] text-[#0D1730]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#061833]">
        <Image
          src={ConsultingImg}
          alt="AtiSunya enterprise consulting"
          fill
          priority
          className="-z-20 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,#002050_0%,rgba(0,32,80,0.94)_42%,rgba(47,127,120,0.78)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />

        <div className="container grid min-h-[calc(100vh-82px)] items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div {...fadeUp}>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              We engineer business systems that feel
              <span className="block text-[#fbc02d]">clear, controlled, and ready to scale.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              AtiSunya Infotech helps companies modernize with ERP consulting, cloud products, custom applications, integrations, staffing, and long-term platform support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.26)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Book a Consultation
                <ArrowRight size={19} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-[10px] border border-white/18 bg-white/10 px-8 py-4 font-bold text-white shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 54 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[22px] border border-white/16 bg-white/10 p-5 shadow-[0_36px_100px_rgba(0,0,0,0.30)] backdrop-blur">
              <div className="rounded-[18px] bg-white p-6 text-[#002050]">
                <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#002050]/10 pb-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2F7F78]">Transformation Desk</p>
                    <h2 className="mt-2 text-2xl font-black">Enterprise delivery view</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#002050] text-[#fbc02d]">
                    <Building2 size={29} />
                  </div>
                </div>

                <div className="space-y-4">
                  {proofPoints.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="flex items-center gap-4 rounded-[14px] border border-[#002050]/10 bg-[#F6F9FC] p-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] text-white" style={{ backgroundColor: item.color }}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-2xl font-black text-[#002050]">{item.value}</p>
                          <p className="text-sm font-bold text-slate-500">{item.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[16px] bg-[#002050] p-5 text-white">
                  <p className="text-sm font-bold text-white/64">What we optimize for</p>
                  <p className="mt-2 text-2xl font-black">Adoption, visibility, governance, and measurable operational improvement.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[22px] border border-[#002050]/10 bg-[#002050] p-2 shadow-[0_28px_80px_rgba(0,32,80,0.16)]">
            <Image
              src={BusinessAnalysisImg}
              alt="Enterprise analysis and planning"
              className="h-[560px] w-full rounded-[16px] object-cover max-lg:h-[390px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[16px] border border-white/16 bg-[#061833]/88 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#fbc02d]">Our role</p>
              <p className="mt-2 text-2xl font-black">Turn complex operations into systems people can trust.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              A consulting partner for the full enterprise technology journey.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work where business decisions and technology execution meet. That means understanding how teams operate, choosing the right platform path, building clean integrations, and supporting the solution after launch.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our approach is direct, practical, and outcome-focused: make the system useful, make the data visible, make the workflow easier, and make the business stronger.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-[14px] border border-[#002050]/10 bg-[#F6F9FC] p-4 shadow-[0_12px_28px_rgba(0,32,80,0.05)]">
                    <Icon className="shrink-0 text-[#2F7F78]" size={23} />
                    <span className="font-black text-[#002050]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Capabilities designed for modern business operations
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              AtiSunya combines consulting, product thinking, and engineering so your systems support the way your company actually works.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.54, delay: index * 0.04, ease: "easeOut" as const }}
                  whileHover={{ y: -10, borderColor: item.color, boxShadow: "0 28px 68px rgba(0,32,80,0.13)" }}
                  className="relative overflow-hidden rounded-[16px] border border-[#002050]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,32,80,0.07)]"
                >
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: item.color }} />
                  <div className="mb-7 flex h-15 w-15 items-center justify-center rounded-[14px] text-white shadow-[0_14px_28px_rgba(0,32,80,0.16)]" style={{ backgroundColor: item.color }}>
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
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Delivery with structure from discovery to continuous improvement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Every engagement is shaped by clear ownership, visible milestones, clean handoffs, and realistic adoption planning.
            </p>
            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              View Our Services
              <ArrowRight size={19} />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ duration: 0.52, delay: index * 0.06, ease: "easeOut" as const }}
                whileHover={{ x: 8, borderColor: index % 2 === 0 ? brand.gold : brand.teal, backgroundColor: "rgba(255,255,255,0.12)" }}
                className="flex gap-5 rounded-[16px] border border-white/12 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#fbc02d] text-sm font-black text-[#002050]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-bold leading-7 text-white/86">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Leadership that connects strategy, delivery, and architecture
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              AtiSunya is led by people who stay close to client outcomes and the technical details that make those outcomes possible.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                {...fadeUp}
                transition={{ duration: 0.56, delay: index * 0.08, ease: "easeOut" as const }}
                whileHover={{ y: -10, boxShadow: "0 30px 80px rgba(0,32,80,0.16)" }}
                className="grid overflow-hidden rounded-[18px] border border-[#002050]/10 bg-[#F6F9FC] shadow-[0_18px_45px_rgba(0,32,80,0.08)] md:grid-cols-[0.86fr_1.14fr]"
              >
                <div className="relative min-h-[360px] bg-white">
                  <Image src={director.image} alt={director.name} fill className="object-cover object-top" />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <p className="mb-4 inline-flex w-fit rounded-[10px] bg-[#2F7F78]/12 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#2F7F78]">
                    Leadership
                  </p>
                  <h3 className="text-3xl font-black text-[#002050]">{director.name}</h3>
                  <p className="mt-2 font-bold text-[#2F7F78]">{director.role}</p>
                  <p className="mt-5 leading-7 text-slate-600">{director.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-24">
        <div className="container grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Our Mission",
              desc: "To empower organizations with reliable, scalable, and intelligent technology solutions that simplify operations, strengthen visibility, and support sustainable growth.",
              icon: BadgeCheck,
              color: brand.teal,
            },
            {
              title: "Our Vision",
              desc: "To become a trusted global technology partner known for practical innovation, strong delivery, and enterprise systems that help businesses move with confidence.",
              icon: Globe2,
              color: brand.blue,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.56, delay: index * 0.06, ease: "easeOut" as const }}
                className="rounded-[18px] border border-[#002050]/10 bg-white p-8 shadow-[0_18px_45px_rgba(0,32,80,0.08)]"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[16px] text-white" style={{ backgroundColor: item.color }}>
                  <Icon size={31} />
                </div>
                <h2 className="text-3xl font-black text-[#002050]">{item.title}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[22px] bg-[#002050] px-6 py-14 text-center text-white shadow-[0_28px_80px_rgba(0,32,80,0.18)] md:px-12">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#fbc02d,#2F7F78,#1673C8)]" />
            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-5xl">
              Ready to build a stronger technology backbone?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/72">
              Talk to AtiSunya about ERP, Odoo, cloud products, HRMS, integrations, custom applications, or a delivery team for your next initiative.
            </p>
            <Link
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-9 py-4 font-black text-[#002050] shadow-[0_20px_42px_rgba(251,192,45,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Start the Conversation
              <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
