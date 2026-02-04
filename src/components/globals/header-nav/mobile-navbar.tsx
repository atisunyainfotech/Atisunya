"use client";

import { ReactNode, useEffect, useState } from "react";
import CrossIcon from "@/assets/icons/cross.svg"
import MenuIcon from "@/assets/icons/menu.svg"
import Image from "next/image";

export function MobileNavbar({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;
  }, [isOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  return (
    <>
      <button className="md:hidden relative h-10 w-10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Image src={CrossIcon} alt="close menu" fill /> : <Image src={MenuIcon} alt="open menu" fill />  }
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 top-[95px] z-40 size-full overflow-auto bg-black/40 animate-in slide-in-from-bottom-24 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          {children}
        </div>
      )}
    </>
  );
}
