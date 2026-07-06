"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function Story() {
  return (
    <section id="story" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            The Story of Swynx
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            A journey of building, exploring, and creating impact.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-1/50 to-transparent -translate-x-1/2" />

          {data.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.year} className="relative flex flex-col md:flex-row items-center mb-16 last:mb-0">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-primary-1 rounded-full border-4 border-bg-darker -translate-x-1/2 z-10"
                />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12 md:ml-auto'}`}
                >
                  <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary-1/30 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-1/5 rounded-full blur-3xl group-hover:bg-primary-1/10 transition-colors" />
                    <span className="inline-block text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.year}
                    </span>
                    <p className="text-text-muted text-lg relative z-10">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
