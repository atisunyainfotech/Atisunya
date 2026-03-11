"use client";

import { useEffect, useState } from "react";

interface Industry {
  name: string;
  icon: string;
}

const industriesData: Industry[] = [
  { name: "Manufacturing", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942189.png" },
  { name: "BFSI", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png" },
  { name: "Pharmaceutical", icon: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png" },
  { name: "Construction", icon: "https://cdn-icons-png.flaticon.com/512/3588/3588614.png" },
  { name: "Education", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },
  { name: "F & B", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Logistics", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995525.png" },
  { name: "Trading", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { name: "Retail", icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png" },
  { name: "Chemical", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
  { name: "Real Estate", icon: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
  { name: "Hospitality", icon: "https://cdn-icons-png.flaticon.com/512/139/139899.png" },
  { name: "Healthcare", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
  { name: "Automotive", icon: "https://cdn-icons-png.flaticon.com/512/743/743131.png" },
  { name: "Textile", icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png" }
];

export default function IndustryExpertise() {
  const [industries, setIndustries] = useState(industriesData);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustries((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">

          <p className="text-sm font-semibold text-[#2F7F78] uppercase tracking-widest mb-3">
            Industry Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#002050]">
            Powering ERP Solutions Across Industries
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            We deliver tailored ERP implementations designed for industry-specific operational excellence.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#fbc02d] to-[#2F7F78] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8
              bg-gradient-to-br from-white to-[#f9fafb]
              border border-gray-200
              shadow-md hover:shadow-2xl
              transition-all duration-500 hover:-translate-y-3
              flex flex-col items-center text-center"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
              bg-[radial-gradient(circle_at_center,rgba(251,192,45,0.25),transparent_70%)]"></div>

              {/* Icon */}
              <div
                className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#2F7F78]/20 to-[#fbc02d]/30
                group-hover:scale-110 transition-transform duration-300 mb-4"
              >
                <img
                  src={industry.icon}
                  alt={industry.name}
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-sm font-semibold text-[#002050] group-hover:text-[#2F7F78] transition-colors">
                {industry.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}