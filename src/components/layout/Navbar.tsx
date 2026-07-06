"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
    >
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/swynx.jpeg" 
            alt="Swynx Logo" 
            width={32} 
            height={32} 
            className="rounded-full object-cover border border-white/10"
          />
          <span className="text-xl font-bold tracking-tighter text-white">
            {data.brand.name}
          </span>
          <span className="rounded-full bg-primary-1/20 px-2 py-0.5 text-xs font-medium text-primary-2">
            Studio
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-text-muted">
            <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="#story" className="hover:text-white transition-colors">Story</Link></li>
            <li><Link href="#builder" className="hover:text-white transition-colors">Builder</Link></li>
            <li><Link href="#vision" className="hover:text-white transition-colors">Vision</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={data.builder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-bg-darker transition-transform hover:scale-105"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
