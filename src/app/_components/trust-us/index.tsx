"use client";

import { motion } from "framer-motion";

/* ================= TYPES ================= */

type Tool = {
  name: string;
  logo: string;
};

type SliderColumnProps = {
  tools: Tool[];
};

/* ================= DATA ================= */

const column1: Tool[] = [
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const column2: Tool[] = [
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

const column3: Tool[] = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png" },
  { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
];

/* ================= SLIDER COLUMN ================= */

function SliderColumn({ tools }: SliderColumnProps) {
  return (
    <div className="relative h-[520px] overflow-hidden">

      {/* top fade */}
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />

      {/* bottom fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="space-y-6"
      >
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="
            group
            bg-white/60
            backdrop-blur-xl
            border border-white/40
            rounded-2xl
            px-7 py-6
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-1
            transition-all duration-500
            flex items-center gap-5
            "
          >

            {/* ICON */}

            <div className="relative flex items-center justify-center">

              <div className="absolute w-12 h-12 rounded-full bg-[#fbc02d]/20 blur-md opacity-60 group-hover:opacity-100 transition"></div>

              <div
                className="
                relative
                flex items-center justify-center
                w-11 h-11
                rounded-xl
                bg-white/70
                border border-white/40
                backdrop-blur-lg
                group-hover:border-[#fbc02d]/40
                transition
              "
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-7 h-7 object-contain"
                />
              </div>

            </div>

            <p className="font-medium text-gray-600 group-hover:text-[#002050] transition">
              {tool.name}
            </p>

          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function TechStackPremium() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}

        <div>

          <p className="uppercase tracking-[0.25em] text-[#2F7F78] text-sm font-semibold">
            Our Technology Ecosystem
          </p>

          <h2 className="text-5xl font-semibold mt-6 text-[#002050] leading-tight">
            Powered by
            <span className="block mt-3 text-[#fbc02d]">
              Modern Engineering Tools
            </span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Our engineering teams leverage modern frameworks, scalable
            infrastructure, and enterprise-grade development tools to build
            high-performance digital platforms that power innovative
            businesses across industries.
          </p>

          <div className="mt-10 w-24 h-1 bg-[#fbc02d] rounded-full" />

        </div>

        {/* SLIDERS */}

        <div className="grid grid-cols-3 gap-8">

          <SliderColumn tools={column1} />
          <SliderColumn tools={column2} />
          <SliderColumn tools={column3} />

        </div>

      </div>

    </section>
  );
}