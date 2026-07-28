"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLogo from "@/assets/brand-logos/nav-logo.png";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavItem } from "./mobile-nav-item";
import DownloadBrochureBtn from "./download-brochure-btn";
import Dropdown from "@/components/dynamicDropdown";
import { OdooNavLink } from "./odoo-nav-link";

const navData = [
  { label: "About Us", route: "/about-us" },
  {
    label: "Services",
    children: [
      { label: "Discovery Solution", route: "/discovery-solution" },
      { label: "Oracle NetSuite", route: "/services/oracle-netsuite" },
      { label: "Odoo", route: "/services/odoo" },
      { label: "Microsoft Dynamics", route: "/services/microsoft-dynamics" },
      { label: "Microsoft Services", route: "/services/microsoft-services" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "HRMS - One", route: "/hr-One" },
      { label: "ERP - One", route: "/erp-One" },
    ],
  },
  { label: "Contact", route: "mailto:mktg@atisunyainfotech.com" },
];

const mobileNavData = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    items: [
      { label: "Discovery Solution", href: "/discovery-solution" },
      { label: "Oracle NetSuite", href: "/services/oracle-netsuite" },
      { label: "Odoo", href: "/services/odoo" },
      { label: "Microsoft Dynamics", href: "/services/microsoft-dynamics" },
      { label: "Microsoft Services", href: "/services/microsoft-services" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "HRMS - One", href: "/hr-One" },
      { label: "ERP - One", href: "/erp-One" },
    ],
  },
  { label: "Contact", href: "mailto:mktg@atisunyainfotech.com" },
  { label: "Book a Consultation", href: "/contact-us" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#1a2c4a]">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#fbc02d] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="relative w-28 h-9 sm:w-36 md:w-40 sm:h-10 md:h-12"
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

        <nav className="hidden md:flex items-center gap-3 lg:gap-4 flex-wrap justify-end">
          {navData.map((item, i) => (
            <div key={i} className="contents">
              {item.label === "Contact" && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <OdooNavLink className="px-4 lg:px-5 py-2 rounded-full bg-[#002050] text-white text-xs lg:text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300" />
                </motion.div>
              )}

              {item.children ? (
                <Dropdown item={item} />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    href={item.route}
                    className="px-4 lg:px-5 py-2 rounded-full bg-[#2F7F78] text-white text-xs lg:text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact-us"
              className="px-4 lg:px-6 py-2 rounded-full bg-[#fbc02d] text-[#002050] text-xs lg:text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </motion.div>

          <div className="ml-1 scale-90">
            <DownloadBrochureBtn />
          </div>
        </nav>

        <div className="flex md:hidden items-center">
          <MobileNavbar>
            <div className="rounded-b-xl bg-[#002050] py-5 px-5 shadow-2xl">
              <nav className="flex flex-col gap-3 text-gray-200 text-[15px]">
                {mobileNavData.map((item, i) => (
                  <div key={i} className="contents">
                    {item.label === "Contact" && (
                      <OdooNavLink className="flex w-full cursor-pointer items-center rounded-lg px-4 py-3 text-gray-200 font-medium text-[15px] border border-transparent hover:bg-white/10 hover:text-[#fbc02d] hover:border-white/10 active:scale-[0.98] active:bg-white/15 transition-all duration-200">
                        Odoo
                      </OdooNavLink>
                    )}
                    <MobileNavItem
                      label={item.label}
                      href={item.href}
                      items={item.items}
                    />
                  </div>
                ))}

                <div className="mt-4 flex justify-center">
                  <DownloadBrochureBtn />
                </div>
              </nav>
            </div>
          </MobileNavbar>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2F7F78] to-transparent opacity-50" />
    </header>
  );
};

export default Navbar;
