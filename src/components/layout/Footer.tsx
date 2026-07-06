"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import data from "@/data/data.json";

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-black/90 backdrop-blur-md pt-16 pb-8">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-1 to-transparent opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Image 
                src="/swynx.jpeg" 
                alt="Swynx Logo" 
                width={32} 
                height={32} 
                className="rounded-full object-cover border border-white/10"
              />
              <span className="text-2xl font-bold tracking-tighter text-white">
                {data.brand.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-text-muted max-w-xs text-center md:text-left">
              {data.footer.tagline}
            </p>
          </div>

          <div className="flex gap-4">
            {data.footer.links.map((link) => {
              let Icon: any = Globe;
              if (link.label === "GitHub") Icon = GithubIcon;
              if (link.label === "LinkedIn") Icon = LinkedinIcon;

              return (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-3 text-text-muted transition-colors hover:bg-primary-1/20 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {data.brand.name}. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
