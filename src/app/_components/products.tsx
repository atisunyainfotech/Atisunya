"use client";

import Image from "next/image";

import ERPIcon from "@/assets/products/erp.svg";
import TimestampIcon from "@/assets/products/timestamp.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";

const products = [
  {
    title: "ERP One",
    image: ERPIcon,
    description:
      "Enterprise resource planning platform engineered for automation, operational control, and scalable digital transformation.",
  },
  {
    title: "Time Stamp",
    image: TimestampIcon,
    description:
      "Advanced workforce intelligence system delivering precise attendance tracking and operational transparency.",
  },
  {
    title: "Copilot / Chatbot",
    image: ChatbotIcon,
    description:
      "AI-powered conversational assistant built to enhance engagement, support automation, and streamline communication.",
  },
];

export default function LuxuryEnterpriseProducts() {
  return (
    <section className="bg-gray-100 py-32">
      <div className="container mx-auto px-6">

        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <p className="text-sm font-semibold text-[#2F7F78] tracking-widest uppercase mb-4">
            Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002050] leading-tight">
            Enterprise-Driven Solutions <br />
            Designed for Performance & Growth
          </h2>

          <div className="w-24 h-1 bg-[#fbc02d] mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-600 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Our product ecosystem is strategically built to modernize operations,
            enhance efficiency, and deliver measurable business impact.
          </p>
        </div>

        {/* Premium Hover Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl p-[1px] bg-gradient-to-br from-[#002050] via-[#2F7F78] to-[#002050] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,32,80,0.4)] hover:-translate-y-3"
            >
              <div className="rounded-3xl p-12 bg-gradient-to-br from-[#002050] to-[#2F7F78] text-white flex flex-col h-full transition-all duration-500">

                {/* Icon */}
                <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 mx-auto mb-8 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="brightness-0 invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-center mb-6">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-1 bg-[#fbc02d] mx-auto mb-6 rounded-full transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(251,192,45,0.8)]"></div>

                {/* Description */}
                <p className="text-white/80 text-center leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Premium Button */}
                <div className="mt-10">
                  <button className="relative w-full py-3 rounded-full bg-[#fbc02d] text-[#002050] font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(251,192,45,0.5)]">
                    
                    {/* Shine Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700"></span>
                    
                    <span className="relative z-10">
                      Discover Solution
                    </span>

                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}