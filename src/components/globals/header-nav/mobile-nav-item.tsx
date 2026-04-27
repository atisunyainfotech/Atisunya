"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileNavItemProps {
  label: string;
  href?: string;
  children?: MobileNavItemProps[];
  className?: string;
}

export function MobileNavItem({
  label,
  href,
  className,
  children,
}: MobileNavItemProps) {
  const [open, setOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  return (
    <>
      {hasChildren ? (
        <div className="w-full">
          {/* Parent */}
          <div
            data-label={label}
            onClick={() => setOpen(!open)}
            className={`
              flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3
              text-gray-200 font-medium text-[15px]
              border border-transparent
              hover:bg-white/10 hover:text-[#fbc02d] hover:border-white/10
              active:scale-[0.98] active:bg-white/15
              transition-all duration-200
              ${className ?? ""}
            `}
          >
            {label}
          </div>

          {/* Children */}
          {open && (
            <div className="ml-4 mt-2 flex flex-col gap-2">
              {children.map((child, index) => (
                <MobileNavItem
                  key={index}
                  label={child.label}
                  href={child.href}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={href || "#"}
          className={`
            flex w-full cursor-pointer items-center rounded-lg px-4 py-3
            text-gray-200 font-medium text-[15px]
            border border-transparent
            hover:bg-white/10 hover:text-[#fbc02d] hover:border-white/10
            active:scale-[0.98] active:bg-white/15
            transition-all duration-200
            ${className ?? ""}
          `}
        >
          {label}
        </Link>


      )}
    </>
  );
}
