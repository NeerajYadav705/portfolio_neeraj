"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";

export const Bio = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={textVariant(0.1)}
          >
            About Me
          </motion.h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Hello! I'm Neeraj Yadav, a passionate Full Stack Developer based
              in Dehradun, India. I have over 1 or less then 1 years of experience in creating
              modern web applications that are not only functional but also
              visually engaging.
            </p>
            <p>
              My journey in programming began during my B.Tech in Computer
              Science, where I discovered a love for building things that live
              on the internet. Since then, I've had the opportunity to work with
              startups, collaborate on freelance projects, and lead development
              teams—gaining hands-on experience across various technologies and
              environments.
            </p>
            <p>
              These days, I focus on building accessible, inclusive, and
              user-centered digital products. I specialize in React.js, Next.js,
              Tailwind CSS, API integrations, and full-stack development using
              tools like Node.js, MongoDB, and Shadcn UI. I believe that
              continuous learning and staying curious are key to growing as a
              developer.
            </p>
            <p>
              When I'm not coding, you'll find me at the gym, gaming, or
              exploring new UI/UX ideas. I also enjoy photography—especially
              capturing landscapes and urban scenes—and love learning and
              experimenting with design trends.
            </p>
            <p>
              I'm always open to new opportunities, collaborations, and
              meaningful challenges that allow me to contribute to impactful
              projects and grow further as a developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
