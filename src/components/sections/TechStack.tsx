"use client";

import { Cpu } from "lucide-react";
import data from "@/data/data.json";

export default function TechStack() {
  const { techStack } = data;

  // Duplicate the array for the infinite marquee effect
  const marqueeItems = [...techStack, ...techStack];

  const getTechIconUrl = (name: string) => {
    const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "");
    const iconMap: Record<string, string> = {
      flutter: "https://cdn.simpleicons.org/flutter/32B1F6",
      java: "https://cdn.simpleicons.org/openjdk/F89820",
      springboot: "https://cdn.simpleicons.org/spring/6DB33F",
      postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
      postgres: "https://cdn.simpleicons.org/postgresql/4169E1",
      firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
      supabase: "https://cdn.simpleicons.org/supabase/3ECF8E",
      docker: "https://cdn.simpleicons.org/docker/2496ED",
      github: "https://cdn.simpleicons.org/github/FFFFFF",
      vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
      nextjs: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
      typescript: "https://cdn.simpleicons.org/typescript/3178C6",
      kotlin: "https://cdn.simpleicons.org/kotlin/7F52FF",
      python: "https://cdn.simpleicons.org/python/3776AB",
      react: "https://cdn.simpleicons.org/react/61DAFB",
    };

    return iconMap[normalized] || `https://cdn.simpleicons.org/${normalized}/3B82F6`;
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-text-muted mb-10 flex items-center justify-center gap-2">
          <Cpu className="w-4 h-4 text-primary-1 animate-pulse" />
          Powered By Modern Technologies
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-5 z-10">
        {/* Row 1 - Moving Left */}
        <div className="flex w-fit animate-marquee">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`row1-${tech}-${idx}`}
              className="mx-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 backdrop-blur-md transition-all group shrink-0"
            >
              <img
                src={getTechIconUrl(tech)}
                alt={tech}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="font-bold text-white/90 text-sm whitespace-nowrap">{tech}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-fit animate-marquee-reverse">
          {marqueeItems.slice().reverse().map((tech, idx) => (
            <div
              key={`row2-${tech}-${idx}`}
              className="mx-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 backdrop-blur-md transition-all group shrink-0"
            >
              <img
                src={getTechIconUrl(tech)}
                alt={tech}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="font-bold text-white/90 text-sm whitespace-nowrap">{tech}</span>
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
