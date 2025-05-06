"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, DownloadIcon } from "lucide-react";
import { fadeIn, textVariant } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={textVariant(0.1)}
              initial="hidden"
              animate="show"
            >
              <span className="bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-primary text-transparent bg-clip-text">
                Hello, I&apos;m [Neeraj Yadav]
              </span>
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary"
              variants={textVariant(0.2)}
              initial="hidden"
              animate="show"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={textVariant(0.3)}
              initial="hidden"
              animate="show"
            >
              I specialize in building modern web applications using React, Next.js,
              and Node.js. Passionate about creating clean, efficient, and user-friendly
              solutions that solve real-world problems.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Hire Me</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="/Hero/Neeraj Yadav.pdf" target="_blank" download>
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#about" aria-label="Scroll down">
            <ArrowDownIcon className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};