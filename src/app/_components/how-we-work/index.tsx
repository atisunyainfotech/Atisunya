"use client";

import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import Cards from "./cards";

type Particle = {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
};

const particles: Particle[] = [
  { id: 1, size: 5, left: 8, duration: 18, delay: 0.4, color: "#2F7F78" },
  { id: 2, size: 9, left: 18, duration: 24, delay: 1.6, color: "#fbc02d" },
  { id: 3, size: 7, left: 29, duration: 20, delay: 3.1, color: "#2F7F78" },
  { id: 4, size: 10, left: 41, duration: 27, delay: 0.9, color: "#fbc02d" },
  { id: 5, size: 6, left: 52, duration: 22, delay: 2.4, color: "#2F7F78" },
  { id: 6, size: 8, left: 64, duration: 25, delay: 4.2, color: "#fbc02d" },
  { id: 7, size: 5, left: 73, duration: 19, delay: 1.1, color: "#2F7F78" },
  { id: 8, size: 9, left: 82, duration: 28, delay: 3.6, color: "#fbc02d" },
  { id: 9, size: 6, left: 91, duration: 21, delay: 2.0, color: "#2F7F78" },
  { id: 10, size: 8, left: 97, duration: 26, delay: 4.8, color: "#fbc02d" },
];

const HowWeWork = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Hover Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(
            500px circle at ${position.x}px ${position.y}px,
            rgba(251,192,45,0.18),
            transparent 40%
          )`,
        }}
      />

      {/* Yellow Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#fbc02d]/10 blur-[140px] rounded-full"></div>

      {/* Green Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#2F7F78]/10 blur-[140px] rounded-full"></div>

      <PremiumParticles />

      <div className="relative container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Tag */}
          <div className="px-6 py-2 mb-6 rounded-full bg-white border border-[#fbc02d]/40 text-[#002050] font-semibold shadow-sm tracking-wide">
            Our Approach
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#002050] leading-tight">
            Powering Businesses Through
            <span className="block mt-3 text-[#2F7F78]">
              Intelligent Working
              <span className="text-[#fbc02d]"> Modules</span>
            </span>
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "180px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[4px] mt-8 rounded-full bg-gradient-to-r from-[#2F7F78] via-[#fbc02d] to-[#2F7F78] shadow-[0_0_20px_rgba(251,192,45,0.4)]"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <Cards />
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;


/* Floating Particles */

function PremiumParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-20px] rounded-full opacity-10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            backgroundColor: p.color,
            animation: `float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
