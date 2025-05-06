"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeIn, textVariant } from "@/lib/motion";

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto space-y-6"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={textVariant(0.1)}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            className="text-primary-foreground/85"
            variants={textVariant(0.2)}
          >
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs to be developed or you're looking
            for a developer to join your team, feel free to contact me.
          </motion.p>
          <motion.div variants={textVariant(0.3)}>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};