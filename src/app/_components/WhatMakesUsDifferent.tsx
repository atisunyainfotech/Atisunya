"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "50+ Industry-Certified ERP Experts",
    description: "Certified consultants for ERP discovery, rollout, integration, and post-go-live improvement.",
    icon: "https://img.icons8.com/color/96/conference-call.png",
  },
  {
    title: "Dedicated In-House Implementation Team",
    description: "Project managers, functional experts, and developers working from one accountable team.",
    icon: "https://img.icons8.com/color/96/teamwork.png",
  },
  {
    title: "Secure Enterprise Hosting & Deployment",
    description: "Cloud environments planned for access control, performance, backups, and audit needs.",
    icon: "https://img.icons8.com/color/96/cloud.png",
  },
  {
    title: "Global ERP Compliance & Regulatory Support",
    description: "From US GAAP standards to India GST compliance.",
    icon: "https://img.icons8.com/color/96/security-checked.png",
  },
  {
    title: "Tailor-Made ERP System Configurations",
    description: "Workflows, roles, reports, and approvals shaped around your operating model.",
    icon: "https://img.icons8.com/color/96/settings.png",
  },
  {
    title: "International ERP Experience with Local Expertise",
    description: "Global rollout experience with practical knowledge of India, UAE, and US operating needs.",
    icon: "https://img.icons8.com/color/96/worldwide-location.png",
  },
  {
    title: "Live Business Dashboards & Smart Analytics",
    description: "KPI dashboards that make finance, sales, stock, and service performance easier to read.",
    icon: "https://img.icons8.com/color/96/combo-chart.png",
  },
  {
    title: "Your Dedicated ERP Success Partner",
    description: "Clear ownership from blueprint to adoption, support, and continuous improvement.",
    icon: "https://img.icons8.com/color/96/businessman.png",
  },
  {
    title: "ERP Support & System Monitoring",
    description: "Issue resolution, release checks, admin help, and enhancement planning after launch.",
    icon: "https://img.icons8.com/color/96/customer-support.png",
  },
];

export default function WhyAtiSunya() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#fbc02d]/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#2F7F78]/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-sm font-semibold text-[#2F7F78] uppercase tracking-widest mb-4">
            Why AtiSunya Infotech
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002050] leading-tight">
            ERP Delivery Built to
            <span className="block text-[#2F7F78]">
              Simplify Real Operations
            </span>
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#fbc02d] to-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-[#fbc02d]/60 via-transparent to-[#2F7F78]/40"
            >

              {/* Card */}
              <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-8 text-center shadow-lg 
              group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">

                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 rounded-full bg-[#fbc02d]/20 group-hover:bg-[#fbc02d]/30 transition">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                      unoptimized
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#002050] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
