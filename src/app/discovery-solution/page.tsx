import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ClipboardList,
  Database,
  Route,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discovery Solution | ERP Discovery & Digital Transformation Blueprint",
  description:
    "AtiSunya Infotech Discovery Solution helps businesses map ERP requirements, process gaps, data readiness, integration needs, and implementation priorities before transformation begins.",
  keywords: [
    "ERP discovery workshop",
    "ERP implementation roadmap",
    "digital transformation blueprint",
    "business process discovery",
    "ERP consulting India",
    "Atisunya Discovery Solution",
  ],
};

const brand = {
  navy: "#002050",
  teal: "#2F7F78",
  gold: "#fbc02d",
};

const discoverySteps = [
  {
    title: "Business Process Audit",
    desc: "We study current workflows, approval delays, reporting gaps, manual work, and cross-team dependencies.",
    icon: ClipboardList,
  },
  {
    title: "ERP Fitment Mapping",
    desc: "Your needs are mapped against NetSuite, Odoo, Microsoft Dynamics 365, SAP, Zoho, and Microsoft cloud capabilities.",
    icon: Workflow,
  },
  {
    title: "Data & Integration Readiness",
    desc: "Master data, legacy records, third-party systems, APIs, and migration risks are reviewed before planning begins.",
    icon: Database,
  },
  {
    title: "Implementation Roadmap",
    desc: "You receive a practical phase plan with priorities, ownership, timelines, risk notes, and adoption checkpoints.",
    icon: Route,
  },
];

const deliverables = [
  "Process discovery report with gaps, risks, and improvement priorities",
  "ERP solution blueprint aligned to departments, users, and controls",
  "Integration map for finance, CRM, HR, inventory, ecommerce, and analytics",
  "Data migration checklist with cleansing and validation recommendations",
  "Implementation roadmap for pilot, rollout, training, go-live, and support",
  "SEO-friendly digital transformation keyword plan for future content pages",
];

const outcomes = [
  "Clear ERP scope before budget is locked",
  "Fewer surprises during implementation",
  "Better platform selection and module planning",
  "Confident leadership decisions with measurable priorities",
];

export default function DiscoverySolutionPage() {
  return (
    <main className="overflow-hidden bg-white text-[#002050]">
      <section className="relative isolate min-h-[calc(100vh-82px)] bg-[#002050] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(47,127,120,0.36),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(251,192,45,0.28),transparent_28%),linear-gradient(135deg,#002050_0%,#09272c_62%,#2F7F78_100%)]" />

        <div className="container grid min-h-[calc(100vh-82px)] gap-14 py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.04] md:text-7xl">
              ERP discovery that turns business confusion into a clear
              transformation roadmap.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/78">
              Before implementation, we uncover process gaps, data quality
              issues, automation opportunities, reporting needs, and platform
              fit. The result is a practical ERP blueprint your leadership,
              users, and technology teams can trust.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-[8px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_18px_38px_rgba(251,192,45,0.34)] ring-1 ring-[#fbc02d]/30 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_58px_rgba(251,192,45,0.42)] hover:ring-white/70"
              >
                Book Discovery Call
                <ArrowRight size={19} />
              </Link>
              <a
                href="#deliverables"
                className="inline-flex items-center gap-3 rounded-[8px] border border-white/18 bg-white/8 px-8 py-4 font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fbc02d] hover:bg-white/14 hover:shadow-[0_22px_52px_rgba(0,0,0,0.24)]"
              >
                View Deliverables
              </a>
            </div>
          </div>

          <div className="group rounded-[8px] border border-white/14 bg-white p-3 text-[#002050] shadow-[0_34px_90px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/55 hover:shadow-[0_44px_120px_rgba(0,0,0,0.34)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="min-h-[150px] rounded-[8px] p-5 font-black shadow-[0_12px_28px_rgba(0,32,80,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,32,80,0.20)]"
                  style={{
                    backgroundColor: index % 2 === 0 ? brand.teal : brand.gold,
                    color: index % 2 === 0 ? "#FFFFFF" : brand.navy,
                  }}
                >
                  <BadgeCheck className="mb-5" size={28} />
                  <p className="leading-7">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              What we check before any ERP implementation starts
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {discoverySteps.map((step, index) => {
              const Icon = step.icon;
              const color = index % 2 === 0 ? brand.teal : brand.navy;

              return (
                <div key={step.title} className="group rounded-[8px] border border-[#002050]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,32,80,0.07)] ring-1 ring-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/55 hover:shadow-[0_28px_70px_rgba(0,32,80,0.15)] hover:ring-[#fbc02d]/25">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] text-white shadow-[0_14px_30px_rgba(0,32,80,0.18)] transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="deliverables" className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              A board-ready blueprint, not just meeting notes
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Discovery gives your team the language, numbers, risks, and
              sequence needed to move with confidence. It also improves SEO
              content planning for ERP service pages, product pages, and
              industry landing pages.
            </p>
          </div>

          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div key={item} className="group flex gap-5 rounded-[8px] border border-[#002050]/10 bg-[#f7f9fc] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#fbc02d]/55 hover:bg-white hover:shadow-[0_22px_54px_rgba(0,32,80,0.12)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#fbc02d] text-sm font-black text-[#002050]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-bold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002050] py-24 text-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { icon: Workflow, title: "For Operations", text: "Spot bottlenecks, duplicate entry, approval delays, and handover gaps." },
            { icon: BarChart3, title: "For Leadership", text: "See priorities, ROI signals, risk areas, and phase-wise transformation options." },
            { icon: ShieldCheck, title: "For IT Teams", text: "Clarify integrations, data migration, security, access, and support needs." },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="group rounded-[8px] border border-white/12 bg-white/8 p-7 shadow-[0_18px_42px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/45 hover:bg-white/12 hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]">
                <Icon className="mb-6 text-[#fbc02d]" size={34} />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/72">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
