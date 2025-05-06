import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Full Stack Developer",
  description: "Explore my portfolio of web development projects and applications",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsGrid />
    </div>
  );
}