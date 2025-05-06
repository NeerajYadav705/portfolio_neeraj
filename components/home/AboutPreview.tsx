"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  GlobeIcon,
  ServerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, textVariant } from "@/lib/motion";

export const AboutPreview = () => {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold"
              variants={textVariant(0.1)}
            >
              About Me
            </motion.h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with over 1 or less then 1 years of
              experience building modern web applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground">
              My expertise spans across the entire development spectrum, from
              crafting engaging user interfaces to designing robust backend
              systems. I'm constantly learning and exploring new technologies to
              stay at the forefront of web development.
            </p>
            <div>
              <Button asChild>
                <Link href="/about">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GlobeIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">
                Building responsive and interactive user interfaces
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ServerIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">
                Creating scalable APIs and server-side applications
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.3)}
              className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DatabaseIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-muted-foreground">
                Designing efficient database structures
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.4)}
              className="bg-card border rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CodeIcon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">DevOps</h3>
              <p className="text-sm text-muted-foreground">
              Currently learning DevOps, focusing on implementing CI/CD pipelines and exploring various deployment strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
