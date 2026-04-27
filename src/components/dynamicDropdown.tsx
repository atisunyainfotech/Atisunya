"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type ChildItem = {
  label: string;
  route: string;
};

type DropdownItemType = {
  label: string;
  children?: ChildItem[];
};

type DropdownProps = {
  item: DropdownItemType;
};

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="px-4 lg:px-5 py-2 rounded-full bg-[#2F7F78] text-white text-xs lg:text-sm font-semibold whitespace-nowrap shadow-md hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300 cursor-pointer flex items-center gap-1 select-none"
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* 
        Dropdown starts at top-full with NO margin gap.
        pt-2 inside creates the visual spacing without a mouse dead-zone.
        The outer div's onMouseLeave covers both button + panel seamlessly.
      */}
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 min-w-[190px] z-50"
          >
            {/* Actual visible panel */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
              {item.children.map((child, index) => (
                <div
                  key={index}
                  onClick={() => {
                    router.push(child.route);
                    setOpen(false);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-[#002050] hover:bg-[#f0faf9] hover:text-[#2F7F78] cursor-pointer transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F7F78] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  {child.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;