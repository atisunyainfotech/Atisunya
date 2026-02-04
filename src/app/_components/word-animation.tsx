"use client";
import gsap from "gsap";

import { useEffect, useRef } from "react";

const WordAnimation = () => {
  const words = ["Salesforce", "Microsoft Dynamic 365", "ERP Suite", "Oracle NetSuite" , "Zoho" , "SAP"];
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;


    const spans = containerRef.current.querySelectorAll(".word");
    
    gsap.set(spans, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    
    gsap.to(containerRef.current, {
      opacity : 1
    })
    spans.forEach((el) => {
      tl.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(el, { opacity: 0, y: -20, duration: 0.6, ease: "power2.in" }, "+=1");
    });
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-flex h-12 lg:h-14 pl-5 relative opacity-0 text-blue"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word absolute left-0 top-0 font-semibold w-max bg-yellow px-3 py-1 rounded-sm h-full flex items-center"
        >
          <span className="block">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default WordAnimation