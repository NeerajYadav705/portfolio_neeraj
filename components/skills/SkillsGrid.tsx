"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "./SkillCategory";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, textVariant } from "@/lib/motion";

export const SkillsGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 space-y-4"
          variants={textVariant(0.1)}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-3xl md:text-4xl font-bold">My Skills</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            across various technologies and tools.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          {SKILLS.map((skillGroup, index) => (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};