"use client";

import { MouseEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type OdooNavLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function OdooNavLink({ className, children = "Odoo" }: OdooNavLinkProps) {
  const router = useRouter();
  const [bursting, setBursting] = useState(false);

  const sparks = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => {
        const angle = (index / 22) * Math.PI * 2;
        const distance = 42 + (index % 5) * 10;

        return {
          id: index,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          color: ["#fbc02d", "#2F7F78", "#1673C8", "#ffffff"][index % 4],
          size: 5 + (index % 3),
        };
      }),
    [],
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (bursting) return;

    setBursting(true);
    window.setTimeout(() => {
      router.push("/services/odoo");
    }, 620);
  };

  return (
    <span className="relative inline-flex">
      <a href="/services/odoo" onClick={handleClick} className={className}>
        {children}
      </a>

      {bursting && (
        <span className="pointer-events-none fixed inset-0 z-[999]">
          <span className="absolute left-1/2 top-20 h-1 w-1 -translate-x-1/2">
            {sparks.map((spark) => (
              <motion.span
                key={spark.id}
                initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                animate={{
                  x: spark.x,
                  y: spark.y,
                  scale: [0.8, 1.25, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 0.58, ease: "easeOut" }}
                className="absolute rounded-full shadow-[0_0_18px_currentColor]"
                style={{
                  width: spark.size,
                  height: spark.size,
                  backgroundColor: spark.color,
                  color: spark.color,
                }}
              />
            ))}
          </span>

          <motion.span
            initial={{ scale: 0.3, opacity: 0.8 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="absolute left-1/2 top-20 h-16 w-16 -translate-x-1/2 rounded-full border-2 border-[#fbc02d]"
          />
        </span>
      )}
    </span>
  );
}
