"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function Roadmap() {
  const { roadmap } = data;

  return (
    <section className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Future Roadmap
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {roadmap.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, type: "spring" }}
              className="glass p-8 rounded-3xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-2 to-accent-2 mb-6">
                  {phase.year}
                </h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-muted font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
