"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  Users,
  Globe,
  Layers,
  Code,
  Sparkles,
} from "lucide-react";

// 👉 Replace with your actual images
import Director1 from "@/assets/about-us/Jay.png";
import Director2 from "@/assets/about-us/Atul.jpg";
/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

/* ---------------- DATA ---------------- */

const expertise = [
  {
    icon: Briefcase,
    title: "ERP Services",
    desc: "End-to-end ERP lifecycle including implementation, customization, and support across NetSuite, Dynamics, SAP, Salesforce, and Zoho.",
  },
  {
    icon: Layers,
    title: "Cloud ERP & HRMS",
    desc: "Our flagship products provide unified control over finance, operations, and workforce with intelligent automation.",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    desc: "Access top-tier IT and ERP professionals for both short-term projects and long-term engagements.",
  },
  {
    icon: Code,
    title: "App Development",
    desc: "Custom web and mobile applications with scalable architecture, integrations, and modern UI/UX.",
  },
];

const directors = [
  {
    name: "Jay Kumar Rauniyar",
    role: "Director – Sales & Operations",
    image: Director1,
    desc: "Leads business growth, client relationships, and operational excellence with a strong focus on delivering value.",
  },
  {
    name: "Atul Kumar Verma",
    role: "Director – Solution Architecture",
    image: Director2,
    desc: "Drives technical vision and enterprise architecture ensuring scalable, secure, and future-ready solutions.",
  },
];

/* ---------------- PAGE ---------------- */

const AboutPage = () => {
  return (
    <div className="bg-white text-[#002050]">

      {/* HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002050] via-[#003580] to-[#2F7F78] opacity-95" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-white"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About AtiSunya Infotech
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-lg text-gray-200 leading-relaxed"
          >
            A forward-thinking IT solutions company empowering businesses
            through intelligent technology, enterprise automation, and scalable
            digital transformation.
          </motion.p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-lg leading-relaxed text-gray-700"
        >
          AtiSunya Infotech specializes in delivering end-to-end ERP consulting,
          implementation, customization, and support services across leading
          global platforms. With a strong foundation in enterprise technology and
          a customer-first approach, we combine innovation, technical expertise,
          and industry best practices to deliver secure and future-ready
          solutions.
        </motion.p>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#f9fafc] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Expertise</h2>
          <p className="text-gray-600 mt-3">
            Delivering excellence across multiple domains of enterprise technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Icon className="text-[#2F7F78] mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Flagship Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "AtiSunya Cloud ERP",
              desc: "A powerful platform centralizing finance, operations, inventory, and reporting into one intelligent system.",
            },
            {
              title: "AtiSunya HRMS",
              desc: "A modern HR system to manage employee lifecycle, payroll, attendance, and performance seamlessly.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#002050] to-[#2F7F78] text-white shadow-xl"
            >
              <Sparkles className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="bg-[#f9fafc] py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Leadership Team</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
          {directors.map((d, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-all"
            >
              <div className="relative h-100 w-full">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <p className="text-[#2F7F78] text-sm mb-2">{d.role}</p>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Our Mission",
            desc: "To empower businesses with reliable, innovative, and scalable technology solutions that drive efficiency, growth, and digital transformation. We strive to simplify complex business processes through intelligent automation, enabling organizations to focus on what truly matters—innovation, customer experience, and long-term success. We aim to deliver solutions that are not only powerful but also practical and future-ready.",
          },
          {
            title: "Our Vision",
            desc: "To become a trusted global technology partner delivering world-class ERP, cloud, and enterprise solutions that shape the future of business. We envision a world where technology seamlessly integrates with business strategy. Our goal is to continuously innovate, expand our global footprint, and set new benchmarks in quality, reliability, and customer satisfaction while helping organizations thrive in an ever-evolving digital landscape.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-lg bg-white"
          >
            <Globe className="text-[#2F7F78] mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

    </div>
  );
};

export default AboutPage;