"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function Vision() {
  const { vision } = data;

  return (
    <section id="vision" className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-12"
        >
          {vision.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-3xl leading-relaxed text-text-muted font-medium"
        >
          {vision.content.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              className={
                word.includes("Swynx")
                  ? "text-gradient font-bold"
                  : word.includes("impactful") || word.includes("empowering") 
                    ? "text-white" 
                    : ""
              }
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-1/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-1/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
