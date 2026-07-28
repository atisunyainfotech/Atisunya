"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Cloud,
  Database,
  GitBranch,
  LifeBuoy,
  LucideIcon,
  Settings,
  ShieldCheck,
  Workflow,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type ServiceDetailPageProps = {
  title: string;
  highlight: string;
  stats: { value: string; label: string }[];
  services: Feature[];
  benefits: string[];
  modules: string[];
  theme?: "default" | "odoo" | "oracle";
  appShowcase?: {
    eyebrow: string;
    title: string;
    description: string;
    apps: { name: string; symbol: string; colors: string[] }[];
  };
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const defaultIcons = [
  Settings,
  GitBranch,
  Database,
  BarChart3,
  ShieldCheck,
  LifeBuoy,
];

function AppShowcaseSymbol({
  symbol,
  colors,
}: {
  symbol: string;
  colors: string[];
}) {
  const [a, b, c, d] = colors;
  const common = "absolute block";

  switch (symbol) {
    case "accounting":
      return (
        <>
          <span className={`${common} left-[21px] top-[18px] h-5 w-5 rounded-full`} style={{ backgroundColor: a }} />
          <span className={`${common} right-[20px] bottom-[17px] h-5 w-5 rounded-full`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[21px] top-[38px] h-2.5 w-11 origin-center -rotate-45 rounded-full`} style={{ backgroundColor: c }} />
          <span className={`${common} right-[21px] top-[18px] h-9 w-2.5 rotate-45 rounded-full`} style={{ backgroundColor: d }} />
        </>
      );
    case "knowledge":
      return (
        <>
          <span className={`${common} left-[22px] top-[13px] h-12 w-9 rounded-t-md`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[22px] top-[27px] h-10 w-9 rounded-t-md [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]`} style={{ backgroundColor: c }} />
          <span className={`${common} left-[33px] top-[13px] h-11 w-3`} style={{ backgroundColor: a }} />
        </>
      );
    case "sign":
      return (
        <svg className="absolute inset-[14px]" viewBox="0 0 56 56" aria-hidden="true">
          <path d="M8 39c11 0 14-30 20-28 7 2-6 38-2 39 5 2 11-21 16-20 4 1 2 12 8 12" fill="none" stroke={a} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 41h32" stroke={b} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "crm":
      return (
        <>
          <span className={`${common} left-[18px] top-[24px] h-10 w-8 -rotate-45 rounded-md`} style={{ backgroundColor: a }} />
          <span className={`${common} right-[17px] top-[24px] h-10 w-8 rotate-45 rounded-md`} style={{ backgroundColor: c }} />
          <span className={`${common} left-[30px] top-[28px] h-7 w-7 rotate-45 rounded-md`} style={{ backgroundColor: b }} />
          <span className={`${common} right-[20px] top-[20px] h-2.5 w-9 rounded-full`} style={{ backgroundColor: d }} />
        </>
      );
    case "studio":
      return (
        <>
          <span className={`${common} left-[20px] top-[19px] h-9 w-2.5 -rotate-45 rounded-full`} style={{ backgroundColor: a }} />
          <span className={`${common} right-[22px] top-[19px] h-11 w-2.5 rotate-45 rounded-full`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[18px] top-[17px] h-4 w-4 rounded-br-md`} style={{ backgroundColor: c }} />
          <span className={`${common} right-[18px] bottom-[19px] h-4 w-4 rounded-tl-md`} style={{ backgroundColor: d }} />
        </>
      );
    case "subscriptions":
      return (
        <>
          <span className={`${common} left-[17px] top-[19px] h-9 w-9 rounded-full border-[6px] border-r-transparent`} style={{ borderColor: `${a} transparent ${a} ${a}` }} />
          <span className={`${common} right-[16px] top-[18px] h-10 w-10 rounded-full border-[6px] border-l-transparent`} style={{ borderColor: `${b} ${b} ${b} transparent` }} />
        </>
      );
    case "ai":
      return (
        <>
          <span className={`${common} left-[20px] top-[20px] h-8 w-2.5 rotate-[-20deg] rounded-full`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[30px] top-[20px] h-8 w-2.5 rotate-[20deg] rounded-full`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[24px] top-[35px] h-2.5 w-[38px] rounded-full`} style={{ backgroundColor: c }} />
          <span className={`${common} right-[22px] top-[22px] h-8 w-2.5 rounded-full`} style={{ backgroundColor: d }} />
        </>
      );
    case "pos":
      return (
        <>
          <span className={`${common} left-[15px] top-[22px] h-8 w-3 rounded-b-md`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[29px] top-[22px] h-8 w-3 rounded-b-md`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[43px] top-[22px] h-8 w-3 rounded-b-md`} style={{ backgroundColor: c }} />
          <span className={`${common} left-[16px] top-[20px] h-5 w-[40px] rounded-t-md`} style={{ backgroundColor: d }} />
        </>
      );
    case "discuss":
      return <span className={`${common} left-[16px] top-[16px] h-12 w-12 rounded-full rounded-bl-sm`} style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />;
    case "documents":
      return (
        <>
          <span className={`${common} left-[18px] top-[17px] h-10 w-7 rounded-md rotate-2`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[29px] top-[21px] h-10 w-7 rounded-md rotate-[28deg]`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[23px] top-[22px] h-10 w-7 rounded-md rotate-[14deg]`} style={{ backgroundColor: c }} />
        </>
      );
    case "project":
      return (
        <>
          <span className={`${common} left-[18px] top-[37px] h-4 w-4 rotate-45`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[31px] top-[25px] h-10 w-4 rotate-45 rounded-sm`} style={{ backgroundColor: b }} />
        </>
      );
    case "timesheets":
      return (
        <>
          <span className={`${common} left-[14px] top-[16px] h-12 w-12 rounded-full border-[5px] border-r-transparent`} style={{ borderColor: `${a} ${b} ${b} ${a}` }} />
          <span className={`${common} left-[29px] top-[25px] h-7 w-2.5 -rotate-45 rounded-full`} style={{ backgroundColor: c }} />
        </>
      );
    case "field":
      return <span className={`${common} left-[25px] top-[12px] h-14 w-8 rotate-[28deg] [clip-path:polygon(52%_0,100%_0,66%_43%,100%_43%,30%_100%,44%_56%,0_56%)]`} style={{ background: `linear-gradient(180deg, ${a} 0 45%, ${b} 45% 100%)` }} />;
    case "planning":
      return (
        <>
          <span className={`${common} left-[15px] top-[22px] h-9 w-9 rounded-md [clip-path:polygon(0_0,100%_50%,0_100%)]`} style={{ backgroundColor: a }} />
          <span className={`${common} right-[15px] top-[22px] h-9 w-9 rounded-md [clip-path:polygon(0_0,100%_50%,0_100%)]`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[38px] top-[17px] h-12 w-1 rounded-full`} style={{ backgroundColor: c }} />
        </>
      );
    case "helpdesk":
      return (
        <>
          <span className={`${common} left-[17px] top-[28px] h-6 w-[46px] rounded-sm`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[27px] top-[18px] h-[46px] w-6 rounded-sm`} style={{ backgroundColor: b }} />
          <span className={`${common} right-[17px] top-[27px] h-6 w-6 rounded-sm`} style={{ backgroundColor: c }} />
        </>
      );
    case "ecommerce":
      return (
        <>
          <span className={`${common} left-[18px] top-[29px] h-8 w-11 rounded-b-md rounded-t-sm`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[27px] top-[20px] h-5 w-6 rounded-t-full border-[4px] border-b-0`} style={{ borderColor: b }} />
        </>
      );
    case "website":
      return (
        <svg className="absolute inset-[13px]" viewBox="0 0 56 56" aria-hidden="true">
          <path d="M7 24c7-8 18-8 28-2 6 3 10 2 14-2" fill="none" stroke={a} strokeWidth="12" strokeLinecap="round" />
          <path d="M8 38c10-5 17-2 25 2 7 3 12 2 16-2" fill="none" stroke={b} strokeWidth="12" strokeLinecap="round" />
        </svg>
      );
    case "email":
      return <span className={`${common} left-[18px] top-[18px] h-11 w-11 rotate-45 [clip-path:polygon(0_0,100%_50%,0_100%,22%_55%)]`} style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />;
    case "inventory":
      return (
        <>
          <span className={`${common} left-[18px] top-[22px] h-9 w-12 rounded-sm`} style={{ backgroundColor: c }} />
          <span className={`${common} left-[18px] top-[17px] h-5 w-12 rounded-t-sm`} style={{ backgroundColor: a }} />
        </>
      );
    case "cube":
      return <span className={`${common} left-[22px] top-[18px] h-11 w-11 [clip-path:polygon(50%_0,92%_25%,92%_75%,50%_100%,8%_75%,8%_25%)]`} style={{ background: `linear-gradient(90deg, ${a} 0 33%, ${b} 33% 66%, ${c} 66%)` }} />;
    case "sales":
      return (
        <>
          <span className={`${common} left-[18px] bottom-[18px] h-7 w-5`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[33px] bottom-[18px] h-10 w-5`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[48px] bottom-[18px] h-14 w-5`} style={{ backgroundColor: c }} />
        </>
      );
    case "people":
      return (
        <>
          <span className={`${common} left-[30px] top-[17px] h-5 w-5 rounded-full`} style={{ backgroundColor: a }} />
          <span className={`${common} left-[17px] bottom-[19px] h-6 w-[34px] rounded-full`} style={{ backgroundColor: b }} />
          <span className={`${common} right-[17px] bottom-[19px] h-6 w-[34px] rounded-full`} style={{ backgroundColor: c }} />
        </>
      );
    case "expenses":
      return (
        <>
          <span className={`${common} left-[20px] top-[18px] h-4 w-8 rounded-sm`} style={{ backgroundColor: a }} />
          <span className={`${common} right-[18px] top-[18px] h-4 w-4 rounded-sm`} style={{ backgroundColor: b }} />
          <span className={`${common} left-[20px] bottom-[18px] h-4 w-4 rounded-sm`} style={{ backgroundColor: c }} />
          <span className={`${common} right-[18px] bottom-[18px] h-4 w-4 rounded-sm`} style={{ backgroundColor: d }} />
        </>
      );
    default:
      return (
        <>
          <span className={`${common} left-5 top-5 h-9 w-9 rounded-full`} style={{ backgroundColor: a }} />
          <span className={`${common} right-4 bottom-5 h-9 w-9 rounded-full`} style={{ backgroundColor: b }} />
          <span className={`${common} left-6 top-9 h-3 w-12 origin-center -rotate-45 rounded-full`} style={{ backgroundColor: c }} />
        </>
      );
  }
}

export default function ServiceDetailPage({
  title,
  highlight,
  stats,
  services,
  benefits,
  modules,
  theme = "default",
  appShowcase,
}: ServiceDetailPageProps) {
  const isOdooTheme = theme === "odoo";
  const isOracleTheme = theme === "oracle";
  const pageBg = isOdooTheme
    ? "bg-white text-[#2f2630]"
    : isOracleTheme
      ? "bg-[#F7F7F6] text-black"
      : "bg-[#030712] text-white";
  const heroBg = isOdooTheme
    ? "bg-[linear-gradient(135deg,#ffffff_0%,#f7f7f8_42%,#eee9ed_100%)]"
    : isOracleTheme
      ? "bg-[linear-gradient(135deg,#ffffff_0%,#E9E9E9_50%,#94BFCE_100%)]"
      : "";
  const highlightClass = isOdooTheme
    ? "block text-[#714B67]"
    : isOracleTheme
      ? "block text-[#EC4F3A]"
      : "block bg-gradient-to-r from-[#fbc02d] via-white to-[#2F7F78] bg-clip-text text-transparent";
  const primaryButtonClass = isOdooTheme
    ? "px-8 py-4 rounded-full bg-[#714B67] text-white font-semibold shadow-[0_18px_38px_rgba(113,75,103,0.24)] hover:bg-[#5f3f57] hover:-translate-y-1 transition-all duration-300"
    : isOracleTheme
      ? "px-8 py-4 rounded-[8px] bg-[#EC4F3A] text-white font-bold shadow-[0_18px_38px_rgba(236,79,58,0.22)] hover:bg-[#1A2F3F] hover:-translate-y-1 transition-all duration-300"
      : "px-8 py-4 rounded-full bg-[#fbc02d] text-[#002050] font-semibold shadow-[0_0_40px_rgba(251,192,45,0.35)] hover:scale-105 transition-all duration-300";
  const secondaryButtonClass = isOdooTheme
    ? "group flex items-center gap-2 px-8 py-4 rounded-full border border-[#714B67]/20 bg-white/90 text-[#714B67] font-semibold shadow-[0_12px_30px_rgba(47,38,48,0.07)] hover:bg-white hover:-translate-y-1 transition-all duration-300"
    : isOracleTheme
      ? "group flex items-center gap-2 px-8 py-4 rounded-[8px] border border-[#1A2F3F]/15 bg-white/90 text-[#1A2F3F] font-bold shadow-[0_12px_30px_rgba(26,47,63,0.08)] hover:border-[#EC4F3A]/40 hover:-translate-y-1 transition-all duration-300"
      : "group flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all";

  return (
    <div className={`${pageBg} overflow-hidden`}>
      <section className={`relative min-h-screen flex items-center overflow-hidden ${heroBg}`}>
        {isOdooTheme ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,#714B6714,transparent_30%),radial-gradient(circle_at_82%_12%,#d8d3d714,transparent_28%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#714B67]/10" />
          </>
        ) : isOracleTheme ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(236,79,58,0.12),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(148,191,206,0.32),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(233,233,233,0.34))]" />
            <div className="absolute left-0 top-0 h-1.5 w-full bg-[#EC4F3A]" />
            <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(0deg,#F7F7F6,rgba(247,247,246,0))]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2F7F7833,transparent_32%),radial-gradient(circle_at_bottom_left,#fbc02d22,transparent_30%)]" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#2F7F78]/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#fbc02d]/20 rounded-full blur-[120px]" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              {title}
              <span className={highlightClass}>
                {highlight}
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact-us"
                className={primaryButtonClass}
              >
                Book A Demo
              </Link>

              <Link
                href="/services"
                className={secondaryButtonClass}
              >
                View All Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-all"
                />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-14">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={
                    isOracleTheme
                      ? {
                          y: -8,
                          boxShadow: "0 24px 55px rgba(26,47,63,0.16)",
                        }
                      : isOdooTheme
                        ? {
                            y: -8,
                            scale: 1.02,
                            boxShadow: "0 24px 55px rgba(113,75,103,0.15)",
                          }
                        : { y: -4 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={
                    isOdooTheme
                      ? "bg-white/90 border border-[#714B67]/10 rounded-2xl p-5 shadow-[0_16px_38px_rgba(47,38,48,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-[#714B67]/35"
                      : isOracleTheme
                        ? "group bg-white/95 border border-[#1A2F3F]/10 rounded-[8px] p-5 shadow-[0_16px_38px_rgba(26,47,63,0.10)] transition-colors duration-300 hover:border-[#EC4F3A]/35"
                      : "bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
                  }
                >
                  <h3 className={`text-3xl font-bold ${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#fbc02d]"}`}>
                    {item.value}
                  </h3>
                  <p className={`text-sm mt-1 ${isOdooTheme ? "text-[#77727a]" : isOracleTheme ? "text-[#36677D]" : "text-gray-400"}`}>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {isOdooTheme ? (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 44px 110px rgba(113,75,103,0.22)",
                }}
                className="relative w-[560px] max-w-full aspect-[1.04] rounded-[34px] border border-[#714B67]/10 bg-white/80 p-6 shadow-[0_38px_100px_rgba(47,38,48,0.14)] backdrop-blur-3xl"
              >
                <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(90deg,rgba(113,75,103,0.055)_1px,transparent_1px),linear-gradient(0deg,rgba(113,75,103,0.045)_1px,transparent_1px)] bg-[size:54px_54px]" />
                <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(113,75,103,0.16),transparent_58%)]" />

                <div className="relative h-full overflow-hidden rounded-[26px] border border-[#714B67]/10 bg-[#f8f8f9]/90">
                  <div className="flex items-center justify-between border-b border-[#714B67]/10 bg-white/80 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#714B67]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#b8b1b7]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#dedade]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#714B67]">
                      Odoo Workspace
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] bg-[#714B67] text-white shadow-[0_26px_70px_rgba(113,75,103,0.34)] ring-8 ring-white/70">
                    <Cloud size={64} strokeWidth={2.5} />
                  </div>

                  {services.slice(0, 3).map((service, index) => {
                    const Icon = service.icon;
                    const positions = [
                      "left-5 top-20 w-[270px]",
                      "right-5 top-[154px] w-[260px]",
                      "left-14 bottom-[74px] w-[270px]",
                    ];

                    return (
                      <motion.div
                        key={service.title}
                        animate={{ y: [0, index % 2 === 0 ? -8 : 10, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 4.5 + index * 0.45,
                        }}
                        className={`absolute z-20 hidden rounded-2xl border border-[#714B67]/10 bg-white/95 p-4 text-[#2f2630] shadow-[0_24px_54px_rgba(47,38,48,0.14)] backdrop-blur-xl sm:block ${positions[index]}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#714B67]/8 text-[#714B67]">
                            <Icon size={27} />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-[15px] font-bold leading-5">
                              {service.title}
                            </h4>
                            <p className="mt-1 truncate text-sm leading-6 text-[#77727a]">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                    {[
                      ["24+", "Apps"],
                      ["360", "Data"],
                      ["Role", "Access"],
                    ].map(([value, label]) => (
                      <motion.div
                        key={label}
                        whileHover={{
                          y: -6,
                          scale: 1.03,
                          borderColor: "rgba(113,75,103,0.34)",
                          boxShadow: "0 18px 38px rgba(47,38,48,0.14)",
                        }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="rounded-2xl border border-[#714B67]/10 bg-white/90 px-4 py-3 text-center shadow-[0_14px_30px_rgba(47,38,48,0.08)]"
                      >
                        <p className="text-base font-black text-[#714B67]">
                          {value}
                        </p>
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#908890]">
                          {label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : isOracleTheme ? (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 44px 110px rgba(26,47,63,0.24)",
                }}
                className="relative w-[560px] max-w-full rounded-[10px] border border-[#1A2F3F]/12 bg-white p-5 shadow-[0_34px_90px_rgba(26,47,63,0.18)]"
              >
                <div className="rounded-[8px] border border-[#1A2F3F]/10 bg-[#F7F7F6]">
                  <div className="flex items-center justify-between border-b border-[#1A2F3F]/10 bg-[#1A2F3F] px-5 py-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#EC4F3A]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2C06B]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#94BFCE]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em]">
                      NetSuite Command Center
                    </span>
                  </div>

                  <div className="grid gap-4 p-5">
                    <div className="grid grid-cols-3 gap-3">
                      {["Invoices", "POs", "Inventory"].map((label, index) => (
                        <motion.div
                          key={label}
                          whileHover={{
                            y: -6,
                            backgroundColor: "#FFFFFF",
                            borderColor: "rgba(236,79,58,0.42)",
                          }}
                          transition={{ duration: 0.24, ease: "easeOut" }}
                          className="rounded-[8px] border border-[#1A2F3F]/10 bg-[#E9E9E9] p-4 shadow-sm"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#36677D]">
                            {label}
                          </p>
                          <p className={`mt-3 text-2xl font-black ${index === 0 ? "text-[#EC4F3A]" : "text-[#1A2F3F]"}`}>
                            {index === 0 ? "98%" : index === 1 ? "42" : "360"}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{
                        y: -6,
                        boxShadow: "0 22px 45px rgba(26,47,63,0.13)",
                      }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="rounded-[8px] border border-[#1A2F3F]/10 bg-white p-5"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-[#1A2F3F]">
                            Financial Operations
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#36677D]">
                            Revenue, procurement and reporting visibility
                          </p>
                        </div>
                        <Cloud className="text-[#EC4F3A]" size={34} />
                      </div>
                      <div className="space-y-3">
                        {[
                          ["Month-end close", "w-[86%]", "#EC4F3A"],
                          ["Saved searches", "w-[72%]", "#36677D"],
                          ["Data controls", "w-[64%]", "#E2C06B"],
                        ].map(([label, width, color]) => (
                          <div key={label}>
                            <div className="mb-1 flex justify-between text-xs font-bold text-[#264759]">
                              <span>{label}</span>
                              <span>Live</span>
                            </div>
                            <div className="h-2 rounded-full bg-[#E9E9E9]">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: width.replace("w-[", "").replace("]", "") }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.85, delay: 0.15 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {services.slice(0, 3).map((service) => {
                        const Icon = service.icon;

                        return (
                          <motion.div
                            key={service.title}
                            whileHover={{
                              y: -6,
                              scale: 1.03,
                              borderColor: "rgba(236,79,58,0.42)",
                              boxShadow: "0 20px 42px rgba(26,47,63,0.14)",
                            }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            className="rounded-[8px] border border-[#1A2F3F]/10 bg-white p-4 shadow-[0_12px_24px_rgba(26,47,63,0.07)]"
                          >
                            <Icon className="mb-3 text-[#EC4F3A]" size={24} />
                            <p className="text-sm font-black text-[#1A2F3F]">
                              {service.title}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="relative w-[520px] max-w-full aspect-square rounded-full border border-[#fbc02d]/20 bg-gradient-to-br from-[#2F7F78]/15 to-[#002050]/30 backdrop-blur-3xl flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[#2F7F78] to-[#002050] flex items-center justify-center shadow-[0_0_80px_rgba(47,127,120,0.45)]">
                  <Cloud size={70} />
                </div>

                {services.slice(0, 3).map((service, index) => {
                  const Icon = service.icon;
                  const positions = [
                    "top-8 left-0",
                    "top-24 right-0",
                    "bottom-10 left-10",
                  ];

                  return (
                    <motion.div
                      key={service.title}
                      animate={{ y: [0, index % 2 === 0 ? -12 : 14, 0] }}
                      transition={{ repeat: Infinity, duration: 4 + index * 0.5 }}
                      className={`absolute ${positions[index]} bg-[#07111f]/90 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl hidden sm:block`}
                    >
                      <Icon className="text-[#fbc02d] mb-3" size={38} />
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.desc.slice(0, 34)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className={`py-28 px-6 ${isOdooTheme ? "bg-white text-[#2f2630]" : isOracleTheme ? "bg-[#F7F7F6] text-black" : "bg-white text-slate-900"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#2F7F78]"} uppercase tracking-[0.25em] text-xs mb-3`}>
              Service Capabilities
            </p>
            <h2 className={`${isOdooTheme || isOracleTheme ? "text-4xl md:text-5xl font-black" : "text-4xl md:text-5xl font-bold"} leading-tight`}>
              Consulting, Implementation, Integration and Support
            </h2>
            <p className={`mt-8 text-lg leading-8 max-w-5xl mx-auto ${isOdooTheme ? "text-[#646069]" : isOracleTheme ? "text-[#264759]" : "text-slate-600"}`}>
              We design every engagement around your processes, users, data,
              and reporting needs so the platform becomes a practical operating
              system for the business.
            </p>
          </motion.div>
        </div>
      </section>

      {appShowcase ? (
        <section className={`py-24 px-6 text-[#2f2630] ${isOdooTheme ? "bg-[#f6f6f7]" : isOracleTheme ? "bg-[#E9E9E9]" : "bg-[#f1f2f4]"}`}>
          <div className={`${isOdooTheme ? "max-w-[900px]" : "max-w-[920px]"} mx-auto`}>
            <motion.div {...fadeUp} className="text-center">
              <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#2F7F78]"} uppercase tracking-[0.25em] text-xs mb-3`}>
                {appShowcase.eyebrow}
              </p>
              <h2 className={`${isOdooTheme || isOracleTheme ? "text-3xl md:text-4xl font-black" : "text-4xl md:text-5xl font-bold"} leading-tight`}>
                {appShowcase.title}
              </h2>
              <p className={`mt-5 ${isOdooTheme ? "text-base" : "text-lg"} text-[#646069] leading-8 max-w-4xl mx-auto`}>
                {appShowcase.description}
              </p>
            </motion.div>

            <div className={`${isOdooTheme ? "mt-12 gap-x-8 gap-y-7" : "mt-14 gap-x-10 gap-y-8"} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`}>
              {appShowcase.apps.map((app, index) => (
                <motion.div
                  key={app.name}
                  {...fadeUp}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut" as const,
                    delay: index * 0.025,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.035,
                    transition: { duration: 0.22, ease: "easeOut" },
                  }}
                  className={`${isOdooTheme ? "min-h-[108px]" : "min-h-[122px]"} group flex flex-col items-center text-center`}
                >
                  <div
                    className={
                      isOdooTheme
                        ? "relative h-[68px] w-[68px] overflow-hidden rounded-lg border border-[#714B67]/10 bg-white shadow-[0_10px_24px_rgba(47,38,48,0.10)] ring-1 ring-[#714B67]/10 transition-all duration-300 group-hover:border-[#714B67]/35 group-hover:shadow-[0_20px_42px_rgba(113,75,103,0.18)]"
                        : "relative h-20 w-20 overflow-hidden rounded-md bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_rgba(47,127,120,0.18)]"
                    }
                  >
                    <div className={isOdooTheme ? "absolute left-0 top-0 h-20 w-20 origin-top-left scale-[0.85]" : "absolute inset-0"}>
                      <AppShowcaseSymbol
                        symbol={app.symbol}
                        colors={app.colors}
                      />
                    </div>
                  </div>
                  <p className={`${isOdooTheme ? "mt-3 text-[13px]" : "mt-4 text-sm"} font-bold leading-5 text-[#2f2630]`}>
                    {app.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`py-28 px-6 ${isOdooTheme ? "bg-white text-[#2f2630]" : isOracleTheme ? "bg-[#1A2F3F] text-white" : "bg-[#030712]"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center">
            <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#E2C06B]" : "text-[#fbc02d]"} uppercase tracking-[0.25em] text-xs mb-3`}>
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Specialized Service Modules
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  whileHover={
                    isOracleTheme
                      ? {
                          y: -10,
                          scale: 1.015,
                          boxShadow: "0 26px 62px rgba(0,0,0,0.20)",
                        }
                      : isOdooTheme
                        ? {
                            y: -10,
                            scale: 1.015,
                            boxShadow: "0 26px 62px rgba(47,38,48,0.14)",
                          }
                        : { y: -8 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={
                    isOdooTheme
                      ? "group bg-white border border-[#714B67]/10 rounded-2xl p-8 shadow-[0_14px_34px_rgba(47,38,48,0.06)] hover:border-[#714B67]/25 hover:shadow-[0_24px_58px_rgba(47,38,48,0.12)] transition-all duration-300"
                      : isOracleTheme
                        ? "group bg-white text-black border border-white/10 rounded-[8px] p-8 shadow-[0_16px_34px_rgba(0,0,0,0.14)] hover:border-[#EC4F3A]/50 hover:-translate-y-1 transition-all duration-300"
                      : "group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-[#fbc02d]/40 hover:bg-[#2F7F78]/10 transition-all duration-300"
                  }
                >
                  <div
                    className={
                      isOdooTheme
                        ? "w-14 h-14 rounded-2xl bg-[#714B67] text-white flex items-center justify-center shadow-[0_16px_34px_rgba(113,75,103,0.22)] mb-6 ring-4 ring-[#714B67]/10"
                        : isOracleTheme
                          ? "w-14 h-14 rounded-[8px] bg-[#EC4F3A] text-white flex items-center justify-center shadow-[0_16px_34px_rgba(236,79,58,0.20)] mb-6"
                        : "w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2F7F78] to-[#002050] flex items-center justify-center shadow-lg mb-6"
                    }
                  >
                    <Icon size={30} />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className={`${isOdooTheme ? "text-[#646069]" : isOracleTheme ? "text-[#264759]" : "text-gray-400"} mt-4 leading-7`}>
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`py-28 px-6 ${isOdooTheme ? "bg-[#f6f6f7] text-[#2f2630]" : isOracleTheme ? "bg-[#E9E9E9] text-black" : "bg-slate-50 text-slate-900"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center">
            <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#2F7F78]"} uppercase tracking-[0.25em] text-xs mb-3`}>
              Business Outcomes
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for Scale, Control and Visibility
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                {...fadeUp}
                whileHover={
                  isOracleTheme
                    ? {
                        y: -7,
                        scale: 1.01,
                        boxShadow: "0 26px 58px rgba(26,47,63,0.15)",
                      }
                    : isOdooTheme
                      ? {
                          y: -7,
                          scale: 1.01,
                          boxShadow: "0 26px 58px rgba(47,38,48,0.13)",
                        }
                      : undefined
                }
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={
                  isOdooTheme
                    ? "flex items-start gap-4 bg-white rounded-2xl p-7 shadow-[0_14px_34px_rgba(47,38,48,0.06)] border border-[#714B67]/10 hover:shadow-[0_22px_52px_rgba(47,38,48,0.11)] hover:-translate-y-1 transition-all duration-300"
                    : isOracleTheme
                      ? "flex items-start gap-4 bg-white rounded-[8px] p-7 shadow-[0_14px_34px_rgba(26,47,63,0.08)] border border-[#1A2F3F]/10 hover:shadow-[0_22px_52px_rgba(26,47,63,0.13)] hover:-translate-y-1 transition-all duration-300"
                    : "flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                }
              >
                <CheckCircle className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#2F7F78]"} mt-1`} size={24} />
                <div>
                  <h3 className="font-semibold text-lg">{benefit}</h3>
                  <p className={`${isOdooTheme ? "text-[#646069]" : isOracleTheme ? "text-[#264759]" : "text-slate-600"} mt-2`}>
                    Practical delivery focused on adoption, clean data,
                    reliable workflows, and measurable improvement.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`relative py-32 px-6 overflow-hidden ${isOdooTheme || isOracleTheme ? "bg-white" : "bg-white"}`}>
        {isOdooTheme ? (
          <>
            <div className="absolute inset-x-0 top-0 h-px bg-[#714B67]/10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#714B67]/10" />
          </>
        ) : isOracleTheme ? (
          <>
            <div className="absolute inset-x-0 top-0 h-px bg-[#1A2F3F]/10" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[#1A2F3F]/10" />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F7F78]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#fbc02d]/20 rounded-full blur-[120px]" />
          </>
        )}

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={
              isOdooTheme
                ? "rounded-[30px] bg-[#714B67] p-8 shadow-[0_28px_80px_rgba(113,75,103,0.26)]"
                : isOracleTheme
                  ? "rounded-[10px] bg-[#1A2F3F] p-8 shadow-[0_28px_80px_rgba(26,47,63,0.24)]"
                : "rounded-[32px] bg-gradient-to-br from-[#002050] to-[#2F7F78] p-8 shadow-[0_25px_80px_rgba(0,32,80,0.2)]"
            }
          >
            <div className="grid grid-cols-2 gap-4">
              {modules.map((module, index) => {
                const Icon = defaultIcons[index % defaultIcons.length];

                return (
                  <motion.div
                    key={module}
                    whileHover={
                      isOracleTheme
                        ? {
                            y: -6,
                            backgroundColor: "rgba(255,255,255,0.18)",
                            borderColor: "rgba(226,192,107,0.42)",
                          }
                        : { y: -3 }
                    }
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className={
                      isOdooTheme
                        ? "rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        : isOracleTheme
                          ? "rounded-[8px] border border-white/15 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        : "rounded-2xl border border-white/10 bg-white/10 p-5"
                    }
                  >
                    <Icon className={`${isOdooTheme ? "text-white" : isOracleTheme ? "text-[#E2C06B]" : "text-[#fbc02d]"} mb-4`} size={28} />
                    <p className="text-sm font-semibold text-white">
                      {module}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#EC4F3A]" : "text-[#2F7F78]"} uppercase tracking-[0.25em] text-xs font-semibold mb-4`}>
              Delivery Approach
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              From Discovery to
              <span
                className={
                  isOdooTheme
                    ? "block text-[#714B67]"
                    : isOracleTheme
                      ? "block text-[#EC4F3A]"
                    : "block bg-gradient-to-r from-[#2F7F78] to-[#002050] bg-clip-text text-transparent"
                }
              >
                Continuous Support
              </span>
            </h2>
            <p className={`mt-8 text-lg leading-8 ${isOdooTheme ? "text-[#646069]" : isOracleTheme ? "text-[#264759]" : "text-slate-600"}`}>
              Our team handles requirement mapping, configuration,
              integrations, migration, testing, user training, and post-go-live
              support with a clear implementation rhythm.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Process discovery and solution blueprint",
                "Configuration, customization and integration",
                "Migration, UAT, training and go-live",
                "Managed support and continuous optimization",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={
                    isOracleTheme
                      ? {
                          x: 8,
                          boxShadow: "0 20px 48px rgba(26,47,63,0.12)",
                        }
                      : undefined
                  }
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className={
                  isOdooTheme
                      ? "group flex items-start gap-5 rounded-2xl border border-[#714B67]/10 bg-white p-5 shadow-[0_12px_30px_rgba(47,38,48,0.06)] hover:shadow-[0_20px_48px_rgba(47,38,48,0.11)] hover:-translate-y-1 transition-all duration-300"
                      : isOracleTheme
                        ? "group flex items-start gap-5 rounded-[8px] border border-[#1A2F3F]/10 bg-white p-5 shadow-[0_12px_30px_rgba(26,47,63,0.07)] hover:shadow-[0_20px_48px_rgba(26,47,63,0.12)] hover:-translate-y-1 transition-all duration-300"
                      : "group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  }
                >
                  <div
                    className={
                      isOdooTheme
                        ? "min-w-[52px] h-[52px] rounded-2xl bg-[#714B67] flex items-center justify-center shadow-[0_12px_28px_rgba(113,75,103,0.20)]"
                        : isOracleTheme
                          ? "min-w-[52px] h-[52px] rounded-[8px] bg-[#EC4F3A] flex items-center justify-center shadow-[0_12px_28px_rgba(236,79,58,0.20)]"
                        : "min-w-[52px] h-[52px] rounded-2xl bg-gradient-to-r from-[#2F7F78] to-[#002050] flex items-center justify-center shadow-lg"
                    }
                  >
                    <Workflow className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item}
                    </h3>
                    <p className={`${isOdooTheme ? "text-[#77727a]" : isOracleTheme ? "text-[#36677D]" : "text-slate-500"} mt-1`}>
                      Structured execution with transparent milestones and
                      business-ready documentation.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`py-28 px-6 text-center ${isOdooTheme ? "bg-[linear-gradient(180deg,#f6f6f7_0%,#ffffff_100%)] text-[#2f2630]" : isOracleTheme ? "bg-[#1A2F3F] text-white" : "bg-[#030712]"}`}>
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <p className={`${isOdooTheme ? "text-[#714B67]" : isOracleTheme ? "text-[#E2C06B]" : "text-[#fbc02d]"} uppercase tracking-[0.25em] text-xs mb-3`}>
            Schedule A Free Consultation
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Modernize with {title}?
          </h2>
          <p className={`mt-6 text-lg leading-8 ${isOdooTheme ? "text-[#646069]" : isOracleTheme ? "text-[#E9E9E9]" : "text-gray-400"}`}>
            Talk to AtiSunya Infotech about your current systems, target
            workflows, and the fastest practical route to implementation.
          </p>
          <div className="mt-10">
            <Link
              href="/contact-us"
              className={
                isOdooTheme
                  ? "inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#714B67] text-white font-semibold shadow-[0_18px_38px_rgba(113,75,103,0.22)] hover:bg-[#5f3f57] hover:-translate-y-1 transition-all duration-300"
                  : isOracleTheme
                    ? "inline-flex items-center gap-3 px-10 py-5 rounded-[8px] bg-[#EC4F3A] text-white font-bold shadow-[0_18px_38px_rgba(236,79,58,0.22)] hover:bg-white hover:text-[#1A2F3F] hover:-translate-y-1 transition-all duration-300"
                  : "inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#fbc02d] text-[#002050] font-semibold shadow-[0_0_40px_rgba(251,192,45,0.35)] hover:scale-105 transition-all duration-300"
              }
            >
              Schedule Free Demo
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
