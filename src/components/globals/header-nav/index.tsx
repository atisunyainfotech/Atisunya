"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLogo from "@/assets/brand-logos/nav-logo.png";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavItem } from "./mobile-nav-item";
import DownloadBrochureBtn from "./download-brochure-btn";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#002050]/95 backdrop-blur-md border-b border-[#1a2c4a]">

      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#fbc02d] to-transparent opacity-80" />

      <div className="container flex items-center justify-between py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.25 }}
            className="relative w-44 h-14"
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
        <nav className="hidden md:flex items-center gap-12 text-[16px] font-semibold text-gray-200 tracking-wide">

          <Link
            href="#services"
            className="relative group hover:text-white transition"
          >
            Services
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#solutions"
            className="relative group hover:text-white transition"
          >
            Solutions
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="#products"
            className="relative group hover:text-white transition"
          >
            Products
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="mailto:mktg@atisunyainfotech.com"
            className="relative group hover:text-white transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact-us"
              className="px-7 py-2.5 rounded-full bg-[#2F7F78] text-white font-semibold shadow-lg hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>

          {/* Download Brochure */}
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
            <DownloadBrochureBtn />
          </motion.div>

        </nav>

        {/* Mobile */}
        <MobileNavbar>
          <div className="rounded-b-xl bg-[#002050] py-5 container shadow-2xl">

            <nav className="flex flex-col gap-4 text-gray-200 text-[16px]">

              <MobileNavItem label="Services" href="#services" />
              <MobileNavItem label="Solutions" href="#solutions" />
              <MobileNavItem label="Products" href="#products" />
              <MobileNavItem label="Contact" href="mailto:mktg@atisunyainfotech.com" />
              <MobileNavItem label="Book a Consultation" href="/contact-us" />

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