import Hero from "@/components/sections/Hero";
import ProductEcosystem from "@/components/sections/ProductEcosystem";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import Story from "@/components/sections/Story";
import Builder from "@/components/sections/Builder";
import TechStack from "@/components/sections/TechStack";
import Vision from "@/components/sections/Vision";
import Roadmap from "@/components/sections/Roadmap";
import Metrics from "@/components/sections/Metrics";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Hero />
      <ProductEcosystem />
      <FeaturedProduct />
      <Story />
      <Builder />
      <TechStack />
      <Vision />
      <Roadmap />
      <Metrics />
    </>
  );
}
