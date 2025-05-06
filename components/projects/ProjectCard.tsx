"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/motion";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  liveLink,
  githubLink,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1 * (index + 1))}
      className="bg-card rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-primary rounded-full p-3 hover:bg-primary hover:text-background transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-primary rounded-full p-3 hover:bg-primary hover:text-background transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};