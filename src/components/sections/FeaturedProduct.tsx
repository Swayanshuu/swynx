"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Activity } from "lucide-react";
import data from "@/data/data.json";

export default function FeaturedProduct() {
  const { featuredProduct } = data;

  const icons = [Users, Sparkles, Activity];

  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-1/30 bg-primary-1/10 px-4 py-2 text-sm font-medium text-primary-2 mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Featured Product
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            {featuredProduct.name}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            {featuredProduct.headline.includes("—") ? featuredProduct.headline.split("—")[1].trim() : featuredProduct.headline}
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-bg-dark p-2 md:p-4 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-1/30 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-1/30 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-bg-darker flex items-center justify-center group"
          >
            {/* Dynamic Feature Graphic Image Showcase */}
            {(() => {
              const rawUrl = (featuredProduct as Record<string, any>).image || 
                             (featuredProduct as Record<string, any>).imageUrl || 
                             (featuredProduct as Record<string, any>).graphic;

              let graphicUrl = typeof rawUrl === "string" ? rawUrl.trim() : "";
              if (graphicUrl.includes("github.com") && graphicUrl.includes("/blob/")) {
                graphicUrl = graphicUrl
                  .replace("github.com", "raw.githubusercontent.com")
                  .replace("/blob/", "/")
                  .replace("?raw=true", "");
              }

              if (graphicUrl !== "") {
                return (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-bg-darker">
                    {/* Ambient blurred backdrop glow */}
                    <img 
                      src={graphicUrl} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-110 pointer-events-none"
                    />
                    {/* Main graphic: 100% visible without any cuts */}
                    <img
                      src={graphicUrl}
                      alt={featuredProduct.name}
                      className="relative z-10 w-full h-full object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                  </div>
                );
              }

              // Fallback UI Mockup when no graphic URL is specified in data.json
              return (
                <div className="absolute inset-0 bg-[#050505] flex">
                  {/* Sidebar (Hidden on Mobile) */}
                  <div className="hidden md:flex w-1/4 h-full border-r border-white/5 bg-white/[0.02] p-6 flex-col gap-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="w-24 h-4 rounded bg-white/10" />
                    </div>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-full h-8 rounded-md bg-white/5" />
                    ))}
                    <div className="mt-auto w-full h-32 rounded-xl border border-white/10 bg-gradient-to-t from-white/5 to-transparent p-4 flex flex-col justify-end">
                      <div className="w-16 h-3 rounded bg-white/20 mb-2" />
                      <div className="w-24 h-2 rounded bg-white/10" />
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-8 flex flex-col gap-8 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div className="w-48 h-6 rounded bg-white/10" />
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                      </div>
                    </div>

                    {/* Hero Card */}
                    <div className="w-full h-48 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 blur-3xl rounded-full" />
                      <div className="w-32 h-6 rounded bg-white/20 mb-4" />
                      <div className="w-64 h-4 rounded bg-white/10 mb-2" />
                      <div className="w-48 h-4 rounded bg-white/10" />
                      <div className="absolute bottom-8 left-8 w-24 h-8 rounded-full bg-white/10" />
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-32 rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between">
                          <div className="w-8 h-8 rounded-full bg-white/5" />
                          <div>
                            <div className="w-16 h-3 rounded bg-white/10 mb-2" />
                            <div className="w-12 h-5 rounded bg-white/20" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProduct.features.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass relative overflow-hidden rounded-2xl p-8 border border-white/5 group hover:border-primary-1/30 transition-colors"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-1/20 blur-2xl rounded-full group-hover:bg-primary-1/40 transition-colors" />
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4 border border-white/10">
                  <Icon className="h-6 w-6 text-primary-2" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Experience a new standard of connection. Our platform offers tools and analytics designed to help you stand out.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
