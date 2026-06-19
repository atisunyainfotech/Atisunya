"use client";

import { ReactNode, useEffect, useState } from "react";
import CrossIcon from "@/assets/icons/cross.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";

export function MobileNavbar({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
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
      {/* Hamburger / Close button */}
      <button
        className="md:hidden relative h-10 w-10 z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <Image src={CrossIcon} alt="close menu" fill />
        ) : (
          <Image src={MenuIcon} alt="open menu" fill />
        )}
      </button>

      {/* Backdrop — closes menu on outside click */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer — separate from backdrop so clicks inside don't close it */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 top-[57px] z-50 md:hidden overflow-y-auto max-h-[calc(100vh-57px)] animate-in slide-in-from-top-4 duration-200"
          onClick={(e) => {
            const target = e.target as HTMLElement;

            const item = target.closest("[data-label]") as HTMLElement;

            if (item) {
              if (item.dataset.label === "Products") return;
            }

            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
