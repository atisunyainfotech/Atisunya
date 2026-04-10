"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLogo from "@/assets/brand-logos/nav-logo.png";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavItem } from "./mobile-nav-item";
import DownloadBrochureBtn from "./download-brochure-btn";
import Dropdown from "@/components/dynamicDropdown";

const Navbar = () => {
  const navData = [
    { label: "About Us", route: "/about-us" },
    { label: "Services", route: "/services" },
    // { label: "Solutions", route: "#solutions" },
    {
      label: "Products",
      children: [
        { label: "HRMS - One", route: "/hr-One" },
        { label: "ERP - One", route: "/erp-One" },
      ],
    },
    { label: "Contact", route: "mailto:mktg@atisunyainfotech.com" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#1a2c4a]">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#fbc02d] to-transparent opacity-80" />

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="relative w-40 h-12"
          >
            <Image
              src={NavLogo}
              alt="AtiSunya Infotech"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {/* {[
            { label: "Services", href: "#services" },
            { label: "Solutions", href: "#solutions" },
            { label: "Products", href: "#products" },
            { label: "Contact", href: "mailto:mktg@atisunyainfotech.com" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href={item.href}
                className="px-5 py-2 rounded-full bg-[#2F7F78] text-white text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))} */}

          {navData.map((item, i) =>
            item.children ? (
              <Dropdown key={i} item={item} />
            ) : (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href={item.route}
                  className="px-5 py-2 rounded-full bg-[#2F7F78] text-white text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ),
          )}

          {/* Book a Consultation */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact-us"
              className="px-6 py-2 rounded-full bg-[#fbc02d] text-[#002050] text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* Download Brochure */}
          <div className="ml-2 scale-90">
            <DownloadBrochureBtn />
          </div>
        </nav>

        {/* Mobile */}
        <MobileNavbar>
          <div className="rounded-b-xl bg-[#002050] py-5 px-6 shadow-2xl">
            <nav className="flex flex-col gap-4 text-gray-200 text-[16px]">
              {[
                { label: "About Us", href: "/about-us" },

                { label: "Services", href: "/services" },
                // { label: "Solutions", href: "#solutions" },
                { label: "Products", href: "#products" },
                { label: "Contact", href: "mailto:mktg@atisunyainfotech.com" },
                { label: "Book a Consultation", href: "/contact-us" },
              ].map((item, i) => (
                <MobileNavItem key={i} label={item.label} href={item.href} />
              ))}

              <div className="mt-4">
                <DownloadBrochureBtn />
              </div>
            </nav>
          </div>
        </MobileNavbar>
      </div>

      {/* Bottom subtle glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2F7F78] to-transparent opacity-50" />
    </header>
  );
};

export default Navbar;
