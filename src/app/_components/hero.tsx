"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCloud, FaRobot, FaProjectDiagram } from "react-icons/fa";

const stats = [
  { number: 50, suffix: "+", label: "Enterprise Projects" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 40, suffix: "+", label: "Industry Experts" },
  { number: 8, suffix: "+", label: "Years Experience" }
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 HEROIC PREMIUM LOADER */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#002050] overflow-hidden ${
          !loading && "pointer-events-none"
        }`}
      >
        {/* Glow Pulse */}
        <motion.div
          className="absolute w-[220px] h-[220px] rounded-full bg-[#fbc02d]/30 blur-[120px]"
          animate={{ scale: [1, 2.5, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />

        {/* Outer Ring */}
        <motion.div
          className="absolute w-[260px] h-[260px] border border-[#fbc02d]/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute w-[180px] h-[180px] border border-[#2F7F78]/40 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />

        {/* Glow Burst */}
        <motion.div
          className="absolute w-[140px] h-[140px] bg-white/20 rounded-full blur-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 2.2, 1.5]
          }}
          transition={{ duration: 1.5 }}
        />

        {/* 🚀 HERO LOGO WITH FINAL SPIN */}
        <motion.img
          src="/logo.png"
          alt="AtiSunya Logo"
          className="w-32 h-32 object-contain relative z-10"
          initial={{
            scale: 0.3,
            opacity: 0,
            rotate: -30,
            y: 120,
          }}
          animate={{
            scale: [0.3, 1.3, 1, 1],
            opacity: [0, 1, 1, 1],
            rotate: [-30, 10, 0, 360], // 🔥 FINAL SPIN
            y: [120, -25, 0, 0],
          }}
          transition={{
            duration: 2.6,
            ease: [0.22, 1, 0.36, 1], // premium easing
            times: [0, 0.5, 0.75, 1], // spin at END
          }}
        />
      </motion.div>

      {/* 🔥 HERO SECTION */}
      <motion.section
        initial={{
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)"
        }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 1.1 : 1,
          filter: loading ? "blur(20px)" : "blur(0px)"
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}
        className="relative py-28 px-6 lg:px-24 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/enterprise-bg.jpg"
            alt="Enterprise Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#002050]/40 via-[#002050]/30 to-[#002050]/50"></div>

        {/* Glow accents */}
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#2F7F78]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#002050]/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 60 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
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
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 80 : 0 }}
                transition={{ duration: 0.9, delay: i * 0.2 + 0.5 }}
                className="group bg-white/95 backdrop-blur-md rounded-3xl p-10 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F7F78] to-[#002050] flex items-center justify-center text-3xl text-white mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#002050] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}