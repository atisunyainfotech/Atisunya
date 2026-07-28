"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import AIIcon from "@/assets/initiatives/ai.png";
import GoGreen from "@/assets/initiatives/go-green.png";
import NoDrugs from "@/assets/initiatives/no-drugs.png";

const initiatives = [
  {
    title: "Artificial Intelligence Advancement",
    slug: "ai-advancement",
    image: AIIcon,
    description:
      "Secure AI adoption roadmaps, automation pilots, and analytics platforms that help public teams move from scattered data to faster decisions.",
  },
  {
    title: "Go Green & Sustainability",
    slug: "go-green-sustainability",
    image: GoGreen,
    description:
      "Cloud optimization, paperless workflows, and impact dashboards that reduce waste while keeping growth, compliance, and reporting on track.",
  },
  {
    title: "Drug-Free Awareness Programs",
    slug: "drug-free-awareness",
    image: NoDrugs,
    description:
      "Digital outreach systems for campaigns, events, case tracking, and citizen engagement, built with privacy, clarity, and measurable reach.",
  },
];

export default function GovernmentInitiatives() {
  return (
    <section id="initiatives" className="bg-[#f8fafc] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#2F7F78] mb-4">
            Supporting Government Initiatives
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002050] leading-tight">
            <span className="block">How AtiSunya Infotech Contributes</span>
            <span className="block">to National Development</span>
          </h2>

          <div className="w-16 h-1 bg-[#FBC02D] mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We pair enterprise technology with public-impact programs, turning
            national priorities into practical platforms, cleaner reporting, and
            services people can actually use.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 items-stretch">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center
              rounded-2xl p-10
              bg-gradient-to-br from-[#002050] to-[#2F7F78]
              text-white
              border border-[#FBC02D]
              shadow-md
              min-h-[420px]
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-[0_25px_60px_rgba(251,192,45,0.35)]"
            >

              {/* Icon */}
              <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-5 leading-snug min-h-[60px] flex items-center justify-center">
                {item.title}
              </h3>

              <div className="w-12 h-1 bg-[#FBC02D] mb-6 rounded-full transition-all duration-500 group-hover:w-16"></div>

              {/* Paragraph */}
              <p className="text-white/85 text-sm leading-relaxed min-h-[110px] max-w-[270px]">
                {item.description}
              </p>

              {/* Button */}
              <div className="mt-auto pt-8">
                <Link
                  href={`/initiatives/${item.slug}`}
                  className="inline-flex px-8 py-3 rounded-full bg-[#FBC02D] text-[#002050] font-semibold
                  transition-all duration-300
                  hover:bg-white hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
