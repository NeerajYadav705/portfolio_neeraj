import { Metadata } from "next";
import { Bio } from "@/components/about/Bio";
import { Timeline } from "@/components/about/Timeline";
import { TechStack } from "@/components/about/TechStack";

export const metadata: Metadata = {
  title: "About Me | Full Stack Developer",
  description: "Learn about my journey, experience, and skills as a Full Stack Developer",
};

export default function AboutPage() {
  return (
    <div>
      <Bio />
      <Timeline />
      <TechStack />
    </div>
  );
}