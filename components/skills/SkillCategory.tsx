"use client";

import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";
import { fadeIn, textVariant } from "@/lib/motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  index: number;
}

export const SkillCategory = ({ category, skills, index }: SkillCategoryProps) => {
  return (
    <motion.div
      className="bg-card border rounded-lg shadow-sm p-6 h-full"
      variants={fadeIn("up", 0.1 * (index + 1))}
    >
      <motion.h3
        className="text-xl font-bold mb-6"
        variants={textVariant(0.1)}
      >
        {category}
      </motion.h3>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
};