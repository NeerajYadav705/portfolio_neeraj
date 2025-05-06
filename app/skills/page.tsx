import { Metadata } from "next";
import { SkillsGrid } from "@/components/skills/SkillsGrid";

export const metadata: Metadata = {
  title: "Skills | Full Stack Developer",
  description: "Explore my technical skills and expertise as a Full Stack Developer",
};

export default function SkillsPage() {
  return (
    <div>
      <SkillsGrid />
    </div>
  );
}