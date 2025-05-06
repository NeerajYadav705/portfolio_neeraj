"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";

export const TechStack = () => {
  const frontendTech = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  ];

  const backendTech = [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
  ];

  // Since we can't load actual SVG icons in this environment, we'll use placeholders
  const TechIcon = ({ name }: { name: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center shadow-sm">
        <span className="text-xs font-semibold">{name.charAt(0)}</span>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here are the technologies I use to build modern web applications. I
            focus on JavaScript-based technologies for both frontend and backend
            development.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6"
              variants={textVariant(0.1)}
            >
              Frontend
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {frontendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                >
                  <TechIcon name={tech.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold mb-6"
              variants={textVariant(0.1)}
            >
              Backend & Database
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {backendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                >
                  <TechIcon name={tech.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
