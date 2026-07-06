"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import data from "@/data/data.json";

export default function Builder() {
  const { builder } = data;

  return (
    <section id="builder" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl text-white mb-6"
          >
            Meet The Builder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            The person behind the products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto lg:auto-rows-[300px] gap-6">
          
          {/* Box 1: Profile (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center min-h-[300px]"
          >
            {/* Text Content */}
            <div className="relative z-20 w-full md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">{builder.name}</h2>
              <p className="text-lg text-primary-2 leading-relaxed">{builder.title}</p>
            </div>
            
            {/* Image Background Fading In */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 md:opacity-100 pointer-events-none">
              {/* Fade gradient for smooth blending into the black card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent z-10 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10 md:hidden" />
              <Image 
                src="/me1.png" 
                fill 
                className="object-cover object-center" 
                alt="Builder Portrait" 
              />
            </div>
          </motion.div>

          {/* Box 2: Roles (col-span-1, row-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 lg:row-span-2 glass rounded-3xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Expertise</h3>
            <div className="flex flex-col gap-4 flex-1 justify-center">
              {builder.roles.map((role, idx) => (
                <div key={idx} className="group flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-accent-1/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1 font-bold text-sm border border-accent-1/20 group-hover:bg-accent-1 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-white text-base">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 3: CTA (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-accent-1/10 to-transparent border-accent-1/20 min-h-[300px]"
          >
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Want to see more?</h3>
              <p className="text-text-muted text-lg max-w-md">Check out my portfolio for deep dives into case studies and full project breakdowns.</p>
            </div>
            <a
              href={builder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 shrink-0"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
