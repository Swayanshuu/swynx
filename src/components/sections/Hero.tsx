"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-2 backdrop-blur-md"
        >
          {data.brand.name} — {data.brand.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
        >
          {data.hero.headline.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {word === "matter." ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl text-lg text-text-muted sm:text-xl"
        >
          {data.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary-1 px-8 py-4 font-bold text-black transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all group-hover:left-[100%] -left-[100%]" />
            Explore Products
          </a>
          <a
            href="#builder"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105"
          >
            Meet The Builder
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, bottom: -50 }}
        animate={{ opacity: 1, bottom: 40 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center gap-12 px-6"
      >
        {data.hero.stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="text-sm font-medium text-text-muted uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
