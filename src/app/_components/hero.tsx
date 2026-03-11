"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCloud, FaRobot, FaProjectDiagram } from "react-icons/fa";

const stats = [
  { number: 150, suffix: "+", label: "Enterprise Projects" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 40, suffix: "+", label: "Industry Experts" },
  { number: 10, suffix: "+", label: "Years Experience" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        }
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function EnterprisePremiumSection() {
  return (
    <section className="relative py-28 px-6 lg:px-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/enterprise-bg.jpg"
          alt="Enterprise Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#002050]/40 via-[#002050]/30 to-[#002050]/50"></div>

      {/* Decorative glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#2F7F78]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#002050]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Enterprise Corporate Solutions
          </h1>

          <div className="w-28 h-[3px] bg-[#fbc02d] mx-auto my-6"></div>

          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            We design scalable digital ecosystems powered by enterprise ERP,
            secure cloud infrastructure, and intelligent automation to
            accelerate modern business transformation.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-12">

          {[
            {
              title: "Enterprise ERP Integration",
              text: "Connect finance, operations, supply chain, and analytics in a unified ERP ecosystem designed for enterprise scale.",
              icon: <FaProjectDiagram />
            },
            {
              title: "Secure Cloud Architecture",
              text: "Future-ready cloud infrastructure with enterprise-grade security and scalable digital backbone.",
              icon: <FaCloud />
            },
            {
              title: "AI & Data Intelligence",
              text: "Transform enterprise data into predictive insights and automate strategic decisions with AI-driven analytics.",
              icon: <FaRobot />
            }
          ].map((card, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group bg-white/95 backdrop-blur-md rounded-3xl p-10 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F7F78] to-[#002050] flex items-center justify-center text-3xl text-white mb-6 shadow-md group-hover:scale-110 transition">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#002050] mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {card.text}
              </p>

              {/* bottom hover accent */}
              <div className="w-0 h-[3px] bg-[#fbc02d] mt-6 group-hover:w-full transition-all duration-500"></div>

            </motion.div>

          ))}

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-10 mt-28 text-center">

          {stats.map((stat, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >

              <h2 className="text-4xl font-bold text-[#fbc02d]">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h2>

              <p className="text-gray-200 mt-2">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mt-24"
        >

          <h3 className="text-3xl font-light text-white mb-6">
            Build the Future of Enterprise Technology
          </h3>

          <button className="px-12 py-4 rounded-full bg-[#fbc02d] text-[#002050] text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
            Discover Enterprise Solutions
          </button>

        </motion.div>

      </div>
    </section>
  );
}