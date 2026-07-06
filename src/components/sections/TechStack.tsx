"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function TechStack() {
  const { techStack } = data;

  // Duplicate the array for the infinite marquee effect
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-12">
          Powered By Modern Technologies
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-8 z-10">
        {/* Row 1 - Moving Left */}
        <div className="flex w-fit animate-marquee">
          {marqueeItems.map((tech, idx) => (
            <div
              key={idx}
              className="mx-4 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-8 py-4 backdrop-blur-md min-w-[160px]"
            >
              <span className="font-bold text-white/80">{tech}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right (using negative animation direction in tailwind or custom CSS, let's just do framer motion for simplicity or a custom class) */}
        <div className="flex w-fit animate-marquee-reverse">
          {marqueeItems.reverse().map((tech, idx) => (
            <div
              key={idx}
              className="mx-4 flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-8 py-4 backdrop-blur-md min-w-[160px]"
            >
              <span className="font-bold text-white/80">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradients to fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-bg-darker to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-bg-darker to-transparent z-20 pointer-events-none" />
    </section>
  );
}
