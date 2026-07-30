"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ExternalLink, 
  Orbit, 
  LayoutGrid, 
  ArrowUpRight, 
  Cpu, 
  Zap,
  Globe,
  X,
  Maximize2,
  Layers,
  Code2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import data from "@/data/data.json";

type EcosystemProduct = typeof data.ecosystem[number];

export default function ProductEcosystem() {
  const products = useMemo(() => data.ecosystem || [], []);
  
  // Identify the central core product
  const coreProduct = useMemo(() => {
    return products.find(p => p.id === "swynx" || p.status?.toLowerCase() === "core") || products[0];
  }, [products]);

  const [activeProduct, setActiveProduct] = useState<EcosystemProduct>(coreProduct);
  const [modalProduct, setModalProduct] = useState<EcosystemProduct | null>(null);
  const [viewMode, setViewMode] = useState<"orbit" | "bento">("orbit");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [showAllBento, setShowAllBento] = useState(false);

  // Filter categories
  const categories = useMemo(() => {
    const statuses = Array.from(new Set(products.map(p => p.status)));
    return ["All", ...statuses];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedFilter === "All") return products;
    return products.filter(p => p.status === selectedFilter);
  }, [products, selectedFilter]);

  // Calculate orbital positions for the orbit view
  const outerProducts = useMemo(() => {
    return products.filter(p => p.id !== coreProduct.id);
  }, [products, coreProduct]);

  const getOrbitPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radiusX = 34; // horizontal radius in %
    const radiusY = 28; // vertical radius in %
    return {
      top: `${(50 + radiusY * Math.sin(angle)).toFixed(1)}%`,
      left: `${(50 + radiusX * Math.cos(angle)).toFixed(1)}%`,
    };
  };

  return (
    <section id="products" className="relative flex min-h-screen flex-col items-center justify-center py-32 md:py-40 overflow-hidden text-white">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-1/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-1/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-1/30 bg-primary-1/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-2 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-2 animate-pulse" />
            Ecosystem Architecture ({products.length} Products)
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Connected Products & Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-text-muted max-w-xl leading-relaxed mb-6"
          >
            A network of independent applications, tools, and platforms built to push digital boundaries.
          </motion.p>

          {/* Controls Bar: Category Filters + View Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl"
          >
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
                    selectedFilter === cat
                      ? "bg-primary-1 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      : "text-text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

            {/* View Mode Toggle (Orbit vs Bento) */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode("orbit")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  viewMode === "orbit"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-text-muted hover:text-white"
                }`}
                title="Orbit Matrix View"
              >
                <Orbit className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Orbit Radar</span>
              </button>

              <button
                onClick={() => setViewMode("bento")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  viewMode === "bento"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-text-muted hover:text-white"
                }`}
                title="Bento Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bento Grid</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* View Container */}
        <AnimatePresence mode="wait">
          {viewMode === "orbit" ? (
            /* ORBIT RADAR VIEW */
            <motion.div
              key="orbit-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl h-[460px] sm:h-[520px] md:h-[580px] mx-auto flex items-center justify-center"
            >
              {/* Rotating Orbit SVG Rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.25))" }}>
                <ellipse
                  cx="50%"
                  cy="50%"
                  rx="34%"
                  ry="28%"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="animate-[spin_60s_linear_infinite] origin-center"
                />

                <ellipse
                  cx="50%"
                  cy="50%"
                  rx="20%"
                  ry="17%"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.15)"
                  strokeWidth="1"
                />

                {/* Laser Rays connecting Center Hub to Outer Nodes */}
                {outerProducts.map((p, i) => {
                  const pos = getOrbitPosition(i, outerProducts.length);
                  const isSelected = activeProduct.id === p.id;
                  return (
                    <g key={`ray-${p.id}`}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={pos.left}
                        y2={pos.top}
                        stroke={isSelected ? "#3B82F6" : "rgba(255, 255, 255, 0.06)"}
                        strokeWidth={isSelected ? 2.5 : 1}
                        strokeDasharray={isSelected ? "none" : "3 3"}
                        className="transition-colors duration-300"
                      />
                      {isSelected && (
                        <>
                          <circle
                            cx={pos.left}
                            cy={pos.top}
                            r="5"
                            fill="#3B82F6"
                            className="animate-ping"
                          />
                          {/* Animated particle traveling from outer node to middle hub */}
                          <motion.circle
                            r="4"
                            fill="#60A5FA"
                            filter="drop-shadow(0 0 6px #3B82F6)"
                            animate={{
                              cx: [pos.left, "50%"],
                              cy: [pos.top, "50%"],
                              opacity: [1, 0.3],
                              scale: [1, 0.6]
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Core Hologram Card (ULTRA-COMPACT ON MOBILE) */}
              <motion.div
                layoutId="central-hologram"
                className={`relative z-30 w-48 sm:w-60 md:w-72 glass rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 border bg-bg-dark/95 backdrop-blur-2xl text-center flex flex-col items-center transition-all duration-500 ${
                  activeProduct.id !== coreProduct.id
                    ? "border-primary-1 shadow-[0_0_60px_-5px_rgba(59,130,246,0.6)] ring-2 ring-primary-1/30"
                    : "border-primary-1/40 shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]"
                }`}
              >
                {/* Active Selection Banner pointing to middle card */}
                {activeProduct.id !== coreProduct.id && (
                  <motion.button 
                    onClick={() => setActiveProduct(coreProduct)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-9 sm:-top-10 px-2 sm:px-3 py-0.5 rounded-full bg-bg-darker/95 hover:bg-primary-1/30 border border-primary-1/60 text-blue-300 text-[8.5px] sm:text-[10px] font-semibold flex items-center gap-1 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer group z-40 max-w-[95%] truncate"
                    title="Click to deselect & return to core"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping shrink-0" />
                    <span className="truncate">Viewing: <strong className="text-white">{activeProduct.name}</strong></span>
                    <X className="w-3 h-3 text-blue-400 group-hover:text-white ml-0.5 shrink-0 transition-colors" />
                  </motion.button>
                )}

                <div className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-primary-1 text-[7.5px] sm:text-[9px] font-bold uppercase tracking-widest text-white shadow-lg flex items-center gap-1 z-30">
                  <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                  {activeProduct.status || "Active Hub"}
                </div>

                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-1/30 to-accent-1/20 border border-primary-1/50 flex items-center justify-center mb-1.5 sm:mb-2 text-primary-2 shadow-inner">
                  {activeProduct.id === "swynx" ? (
                    <Cpu className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary-1 animate-pulse" />
                  ) : (
                    <Globe className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent-1" />
                  )}
                </div>

                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-0.5 tracking-tight">
                  {activeProduct.name}
                </h3>

                {/* Description */}
                <p className="text-[9px] sm:text-xs text-text-muted mb-2 sm:mb-3 leading-tight max-h-16 sm:max-h-28 overflow-y-auto px-0.5 scrollbar-thin">
                  {activeProduct.description}
                </p>

                {/* Tech Stack Pills */}
                {activeProduct.tech && activeProduct.tech.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {activeProduct.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[7.5px] sm:text-[9px] font-mono px-1 sm:px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-primary-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="w-full flex items-center gap-1 sm:gap-1.5">
                  <button
                    onClick={() => setModalProduct(activeProduct)}
                    className="py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-md sm:rounded-lg bg-white/10 hover:bg-white/20 text-white text-[9px] sm:text-xs font-semibold flex items-center justify-center gap-0.5 transition-all"
                    title="View Full Specs"
                  >
                    <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Specs</span>
                  </button>

                  {activeProduct.link && activeProduct.link !== "#" ? (
                    <a
                      href={activeProduct.link.startsWith("http") ? activeProduct.link : `https://${activeProduct.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-md sm:rounded-lg bg-primary-1 hover:bg-blue-600 font-semibold text-white text-[9px] sm:text-xs flex items-center justify-center gap-0.5 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  ) : (
                    <div className="flex-1 py-1 sm:py-1.5 px-1 rounded-md sm:rounded-lg bg-white/5 text-text-muted text-[9px] sm:text-[10px] font-medium border border-white/10">
                      In Dev
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Orbiting Satellite Nodes */}
              {outerProducts.map((p, index) => {
                const pos = getOrbitPosition(index, outerProducts.length);
                const isSelected = activeProduct.id === p.id;
                const isFilteredOut = selectedFilter !== "All" && p.status !== selectedFilter;

                return (
                  <motion.div
                    key={p.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ top: pos.top, left: pos.left }}
                    initial={{ scale: 0 }}
                    animate={{ scale: isFilteredOut ? 0.5 : 1, opacity: isFilteredOut ? 0.3 : 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        if (isSelected) {
                          setActiveProduct(coreProduct);
                        } else {
                          setActiveProduct(p);
                        }
                      }}
                      className={`group relative flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-bg-dark/95 text-white border border-primary-1 shadow-[0_0_25px_rgba(59,130,246,0.8)] scale-105 sm:scale-110 ring-1 ring-primary-1/40"
                          : "bg-bg-dark/85 border border-white/10 hover:border-primary-1/50 text-text-muted hover:text-white hover:scale-105"
                      } backdrop-blur-xl`}
                    >
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all shrink-0 ${
                        isSelected 
                          ? "bg-primary-1 text-white shadow-[0_0_10px_rgba(59,130,246,0.8)] border border-blue-300/40" 
                          : "bg-white/10 text-white group-hover:bg-primary-1/20"
                      }`}>
                        {p.name.charAt(0)}
                      </div>

                      <div className="text-left pr-1 text-[10px] sm:text-xs font-bold leading-tight text-white max-w-[60px] sm:max-w-none truncate">
                        {p.name}
                        <div className={`text-[8px] sm:text-[9px] capitalize font-normal ${isSelected ? "text-blue-300 font-semibold" : "text-text-muted"}`}>
                          {p.status}
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* BENTO GRID VIEW (SLEEK & COMPACT WITH SHOW MORE EXPANDER) */
            <motion.div
              key="bento-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center w-full max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
                {(showAllBento ? filteredProducts : filteredProducts.slice(0, 5)).map((product, idx) => {
                  const isCore = product.id === coreProduct.id;
                  const href = product.link && product.link !== "#"
                    ? (product.link.startsWith("http") ? product.link : `https://${product.link}`)
                    : undefined;

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`group relative glass rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${
                        isCore
                          ? "sm:col-span-2 border-primary-1/50 bg-gradient-to-br from-primary-1/10 via-bg-dark to-bg-darker shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
                          : "border-white/10 hover:border-primary-1/30 bg-bg-dark/60"
                      }`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl bg-primary-1 w-28 h-28 rounded-full pointer-events-none" />

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[8.5px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                            isCore
                              ? "bg-primary-1 text-white border-primary-1"
                              : "bg-white/5 text-accent-2 border-white/10"
                          }`}>
                            {product.status}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setModalProduct(product)}
                              className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/20 transition-all"
                              title="Full Specs"
                            >
                              <Maximize2 className="w-3 h-3" />
                            </button>

                            {href && (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary-1 transition-all"
                                title="Open Link"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-primary-2 transition-colors">
                          {product.name}
                        </h3>

                        {/* FULL Description */}
                        <p className="text-text-muted text-[11px] sm:text-xs leading-relaxed mb-3">
                          {product.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Stack */}
                        {product.tech && product.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/5">
                            {product.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 rounded-md text-text-muted border border-white/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Show More / Show Less Expander Button */}
              {filteredProducts.length > 5 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setShowAllBento(!showAllBento)}
                  className="mt-6 px-5 py-2.5 rounded-full bg-white/5 hover:bg-primary-1/20 border border-white/10 hover:border-primary-1/50 text-white text-xs font-semibold flex items-center gap-2 backdrop-blur-md transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer group"
                >
                  <span>{showAllBento ? "Show Less" : `Show More (${filteredProducts.length - 5} More Projects)`}</span>
                  {showAllBento ? (
                    <ChevronUp className="w-3.5 h-3.5 text-primary-2 group-hover:translate-y-[-2px] transition-transform" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-primary-2 group-hover:translate-y-[2px] transition-transform" />
                  )}
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FULL PRODUCT DETAILS MODAL */}
        <AnimatePresence>
          {modalProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalProduct(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl glass rounded-3xl p-6 sm:p-8 border border-primary-1/50 bg-bg-dark/95 shadow-[0_0_80px_rgba(59,130,246,0.4)] backdrop-blur-2xl z-10 flex flex-col gap-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary-1/20 border border-primary-1/40 flex items-center justify-center text-primary-2">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-2">
                        {modalProduct.status}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {modalProduct.name}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalProduct(null)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-white text-base leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                    {modalProduct.description}
                  </p>
                </div>

                {/* Full Tech Stack */}
                {modalProduct.tech && modalProduct.tech.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {modalProduct.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 bg-primary-1/10 text-primary-2 border border-primary-1/30 rounded-xl text-xs font-mono font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setModalProduct(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10"
                  >
                    Close
                  </button>

                  {modalProduct.link && modalProduct.link !== "#" && (
                    <a
                      href={modalProduct.link.startsWith("http") ? modalProduct.link : `https://${modalProduct.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-primary-1 hover:bg-blue-600 text-white text-sm font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                    >
                      <span>Launch Product</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

