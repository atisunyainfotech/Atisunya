"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AIIcon from "@/assets/initiatives/ai.jpeg";
import GoGreen from "@/assets/initiatives/go-green.jpeg";
import NoDrugs from "@/assets/initiatives/no-drugs.jpeg";

const initiatives = [
  {
    title: "Artificial Intelligence Advancement",
    image: AIIcon,
    description:
      "AtiSunya Infotech supports government-led AI transformation through secure, scalable, and data-driven enterprise platforms designed for long-term impact.",
  },
  {
    title: "Go Green & Sustainability",
    image: GoGreen,
    description:
      "We contribute to national sustainability missions by enabling energy-efficient digital infrastructure and responsible technology ecosystems.",
  },
  {
    title: "Drug-Free Awareness Programs",
    image: NoDrugs,
    description:
      "Our digital solutions enhance public awareness initiatives with structured outreach, intelligent automation, and citizen engagement systems.",
  },
];

export default function GovernmentInitiatives() {
  return (
    <section className="bg-[#f8fafc] py-28">
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
            We align enterprise-grade technology solutions with public sector
            missions, delivering secure, scalable, and measurable digital transformation.
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
                <button className="px-8 py-3 rounded-full bg-[#FBC02D] text-[#002050] font-semibold
                  transition-all duration-300
                  hover:bg-white hover:scale-105 hover:shadow-lg">
                  Learn More
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}