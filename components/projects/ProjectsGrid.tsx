"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, textVariant } from "@/lib/motion";

export const ProjectsGrid = () => {
  const allTags = Array.from(
    new Set(PROJECTS.flatMap((project) => project.tags))
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? PROJECTS.filter((project) => project.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 space-y-4"
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across various technologies and domains. Each
            project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className="rounded-full"
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};