import Link from "next/link";
import { NavItem } from "./nav-item";
import { MobileNavItem } from "./mobile-nav-item";
import { MobileNavbar } from "./mobile-navbar";
import Image from "next/image";
import NavLogo from "@/assets/brand-logos/nav-logo.png";
import DownloadBrochureBtn from "./download-brochure-btn";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between gap-10 py-2">

        {/* Logo + Subtext with  Logo to the right */}
        <Link
          href="/"
          className="flex items-center gap-2 h-20"
          aria-label="Go to AtiSunya"
        >
          {/* Main Logo + Subtext */}
          <div className="flex flex-col items-start justify-center w-44 h-auto relative">
            <div className="relative w-full h-26">
              <Image
                src={NavLogo}
                alt="AtiSunya Infotech logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 uppercase">        
          <NavItem label="Services" href="#services" />
          <NavItem label="Solutions" href="#solutions" />
          <NavItem label="Products" href="#products" />
          <NavItem label="Say Hey" href="mailto:mktg@atisunyainfotech.com" />
          <div>
            <Link href={"/contact-us"} className="text-blue text-sm font-semibold px-4 py-2 border-b border-transparent hover:border-yellow">
              Book a call
            </Link>
          </div>
          <DownloadBrochureBtn />
        </nav>

        {/* Mobile Navigation */}
        <MobileNavbar>
          <div className="rounded-b-lg bg-white py-4 container text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">   
              <MobileNavItem label="Services" href="#services" />
              <MobileNavItem label="Solutions" href="#solutions" />
              <MobileNavItem label="Products" href="#products" />
              <MobileNavItem label="Say Hey" href="mailto:mktg@atisunyainfotech.com" />
              <MobileNavItem label="Book a call" href="/contact-us" />
              <div className="mt-3">
                <DownloadBrochureBtn />
              </div>
            </nav>
          </div>
        </MobileNavbar>

      </div>
    </header>
  );
};

export default Navbar;
