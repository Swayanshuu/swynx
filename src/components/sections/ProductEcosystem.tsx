"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import data from "@/data/data.json";

// Helper positions to create a constellation/ecosystem look
const nodePositions = [
  { top: "50%", left: "50%" }, // Center (LinkPeer)
  { top: "20%", left: "20%" },
  { top: "80%", left: "30%" },
  { top: "25%", left: "80%" },
  { top: "75%", left: "75%" },
];

export default function ProductEcosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="products" className="relative flex min-h-[90vh] flex-col items-center justify-center py-24 overflow-hidden">
      <div className="mb-16 text-center z-10 px-6">
        <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white mb-6">Product Ecosystem</h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Interconnected applications, platforms, and communities designed to solve problems and create impact.
        </p>
      </div>

      <div className="relative w-full max-w-6xl h-[600px] mx-auto hidden md:block">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}>
          <motion.line
            x1="50%" y1="50%" x2="20%" y2="20%"
            stroke={hoveredId === data.ecosystem[1].id || hoveredId === data.ecosystem[0].id ? "#3B82F6" : "rgba(255,255,255,0.1)"}
            strokeWidth={2}
            className="transition-colors duration-500"
          />
          <motion.line
            x1="50%" y1="50%" x2="30%" y2="80%"
            stroke={hoveredId === data.ecosystem[2].id || hoveredId === data.ecosystem[0].id ? "#3B82F6" : "rgba(255,255,255,0.1)"}
            strokeWidth={2}
            className="transition-colors duration-500"
          />
          <motion.line
            x1="50%" y1="50%" x2="80%" y2="25%"
            stroke={hoveredId === data.ecosystem[3].id || hoveredId === data.ecosystem[0].id ? "#3B82F6" : "rgba(255,255,255,0.1)"}
            strokeWidth={2}
            className="transition-colors duration-500"
          />
          <motion.line
            x1="50%" y1="50%" x2="75%" y2="75%"
            stroke={hoveredId === data.ecosystem[4].id || hoveredId === data.ecosystem[0].id ? "#3B82F6" : "rgba(255,255,255,0.1)"}
            strokeWidth={2}
            className="transition-colors duration-500"
          />
        </svg>

        {/* Nodes */}
        {data.ecosystem.map((product, index) => {
          const isHovered = hoveredId === product.id;
          const pos = nodePositions[index];

          return (
            <motion.div
              key={product.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ top: pos.top, left: pos.left }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  zIndex: isHovered ? 50 : 20,
                }}
                className={`relative flex flex-col items-center justify-center rounded-2xl glass p-6 transition-all duration-300 ${
                  isHovered ? "shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] border-accent-1 w-80" : "w-24 h-24 rounded-full"
                }`}
              >
                {!isHovered && (
                  <div className="absolute inset-0 animate-pulse rounded-full border border-primary-1/30" />
                )}
                
                <h3 className={`font-bold text-white transition-all ${isHovered ? "text-2xl mb-2" : "text-sm text-center"}`}>
                  {isHovered ? product.name : product.name.split(" ")[0]}
                </h3>

                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex flex-col items-center text-center"
                  >
                    <p className="text-sm text-text-muted mb-4">{product.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {product.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-md text-primary-2 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
                      {product.status}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile fallback view */}
      <div className="w-full px-6 flex flex-col gap-6 md:hidden">
        {data.ecosystem.map((product) => (
          <div key={product.id} className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 blur-xl bg-primary-1 w-24 h-24 rounded-full" />
            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-text-muted mb-4 text-sm">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tech.map(t => (
                <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-md text-primary-2 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
              {product.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
