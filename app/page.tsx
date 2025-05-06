import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
}