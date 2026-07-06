import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import CursorGlow from "@/components/ui/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import data from "@/data/data.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${data.brand.name} | ${data.hero.headline}`,
  description: data.brand.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="min-h-screen bg-bg-darker text-text-main antialiased selection:bg-primary-1/30 selection:text-white">
        <LenisProvider>
          <CursorGlow />
          <Navbar />
          <main className="relative z-10 flex min-h-screen flex-col overflow-hidden">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
