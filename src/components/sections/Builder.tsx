"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserCircle2 } from "lucide-react";
import Image from "next/image";
import data from "@/data/data.json";

export default function Builder() {
  const { builder } = data;

  return (
    <section id="builder" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl border border-white/10 p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-1/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            {/* Portrait/Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex flex-col items-center lg:items-start"
            >
              <div className="w-48 h-48 rounded-3xl bg-white/5 border border-white/10 mb-8 flex items-center justify-center overflow-hidden relative group">
                <Image 
                  src="/me1.png" 
                  alt="Builder Portrait" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-1/40 to-accent-2/40 opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 text-center lg:text-left">{builder.name}</h2>
              <p className="text-primary-2 text-center lg:text-left mb-6 font-medium">{builder.title}</p>
              
              <div className="flex gap-4">
                <a
                  href={builder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-bg-darker transition-transform hover:scale-105"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Roles & Achievements */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {builder.roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-2xl border border-white/5 group hover:border-primary-1/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary-2 border border-white/10">
                    <span className="font-bold text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{role}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
