"use client";

import { motion } from "framer-motion";
import { EXPERIENCES, EDUCATION } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

export const Timeline = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto space-y-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3"
              variants={textVariant(0.1)}
            >
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              Work Experience
            </motion.h2>

            <div className="space-y-12">
              {EXPERIENCES.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 border-l-2 border-muted"
                  variants={fadeIn("right", 0.1 * (index + 1))}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <p className="text-primary font-medium">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>
                  <p>{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3"
              variants={textVariant(0.1)}
            >
              <GraduationCapIcon className="h-6 w-6 text-primary" />
              Education
            </motion.h2>

            <div className="space-y-12">
              {EDUCATION.map((education, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 border-l-2 border-muted"
                  variants={fadeIn("right", 0.1 * (index + 1))}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-primary font-medium">
                      {education.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {education.period}
                    </p>
                  </div>
                  <p>{education.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};