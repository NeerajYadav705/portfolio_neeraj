"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";

export const FeaturedProjects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section className="py-24 bg-muted/50" id="featured-projects">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 space-y-2"
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and expertise in
            building modern, responsive web applications.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16 mt-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2)}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1 relative group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background text-primary rounded-full p-3 hover:bg-primary hover:text-background transition-colors"
                      >
                        <GithubIcon className="h-6 w-6" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background text-primary rounded-full p-3 hover:bg-primary hover:text-background transition-colors"
                      >
                        <ExternalLinkIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
