"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Headphones,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Customer Support Bot",
    desc: "Answer common questions, route leads, capture support context, and reduce repetitive service workload.",
    icon: Headphones,
  },
  {
    title: "Internal Copilot",
    desc: "Help teams search policies, SOPs, ERP records, reports, and knowledge bases through guided conversations.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow Automation",
    desc: "Trigger tickets, CRM updates, follow-ups, approvals, and notifications from chat-driven actions.",
    icon: Workflow,
  },
  {
    title: "Secure AI Governance",
    desc: "Control access, review prompts, protect data, and keep AI responses aligned with business rules.",
    icon: ShieldCheck,
  },
];

export default function CopilotChatbotPage() {
  return (
    <main className="overflow-hidden bg-[#F6F9FC] text-[#0D1730]">
      <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden bg-[#002050] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(251,192,45,0.26),transparent_28%),linear-gradient(126deg,#002050_0%,#09272c_52%,#2F7F78_100%)]" />

        <div className="container grid min-h-[calc(100vh-82px)] gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Copilot and chatbot automation for faster conversations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Build AI assistants for customer support, internal knowledge,
              CRM workflows, ERP guidance, and service automation without
              losing control over data and approvals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-[10px] bg-[#fbc02d] px-8 py-4 font-black text-[#002050] shadow-[0_18px_40px_rgba(251,192,45,0.34)] ring-1 ring-[#fbc02d]/30 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_58px_rgba(251,192,45,0.44)] hover:ring-white/70">
                Build My Assistant
                <ArrowRight size={19} />
              </Link>
              <Link href="/" className="inline-flex items-center gap-3 rounded-[10px] border border-white/18 bg-white/10 px-8 py-4 font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/16 hover:shadow-[0_22px_52px_rgba(0,0,0,0.24)]">
                Back to Home
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="group rounded-[24px] border border-white/14 bg-white/10 p-5 shadow-[0_36px_100px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/45 hover:bg-white/14 hover:shadow-[0_44px_120px_rgba(0,0,0,0.36)]">
            <div className="rounded-[18px] bg-white p-6 text-[#002050]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[16px] bg-[#2F7F78] text-white">
                  <Bot size={34} />
                </div>
                <div>
                  <h2 className="text-2xl font-black">AI Conversation Hub</h2>
                  <p className="text-sm text-slate-500">Support, sales, and internal knowledge</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ["Visitor", "Can you help me choose an ERP module?"],
                  ["AtiSunya Copilot", "Yes. I can ask a few questions and recommend the right discovery path."],
                  ["Visitor", "Can this connect with CRM and support tickets?"],
                  ["AtiSunya Copilot", "Yes. We can connect chat actions with CRM, email, tickets, and ERP workflows."],
                ].map(([speaker, text], index) => (
                  <div key={text} className={`rounded-[14px] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,32,80,0.14)] ${index % 2 === 0 ? "ml-10 bg-[#F6F9FC]" : "mr-10 bg-[#002050] text-white"}`}>
                    <p className="text-xs font-black text-[#fbc02d]">{speaker}</p>
                    <p className="mt-2 leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-[#002050] md:text-5xl">
              Premium AI assistants built around business outcomes
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[16px] border border-[#002050]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,32,80,0.07)] ring-1 ring-transparent transition-all duration-500 hover:-translate-y-2 hover:border-[#fbc02d]/55 hover:shadow-[0_28px_70px_rgba(0,32,80,0.15)] hover:ring-[#fbc02d]/25">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#002050] text-white shadow-[0_14px_30px_rgba(0,32,80,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2F7F78] group-hover:shadow-[0_18px_42px_rgba(47,127,120,0.28)]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[#002050]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
