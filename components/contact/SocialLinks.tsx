"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { MapPinIcon, MailIcon } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";

export const SocialLinks = () => {
  return (
    <motion.div
      className="space-y-8"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-2xl font-bold mb-6"
        variants={textVariant(0.1)}
      >
        Connect With Me
      </motion.h2>

      <motion.div
        className="space-y-4"
        variants={staggerContainer(0.1, 0.2)}
      >
        <motion.div 
          className="flex items-center gap-3 text-muted-foreground"
          variants={fadeIn("right", 0.1)}
        >
          <MapPinIcon className="h-5 w-5 text-primary" />
          <span>Dehradun, Uttarakhand (248001)</span>
        </motion.div>

        <motion.div 
          className="flex items-center gap-3 text-muted-foreground"
          variants={fadeIn("right", 0.2)}
        >
          <MailIcon className="h-5 w-5 text-primary" />
          <a 
            href="mailto:Neeraj95578@gmail.com" 
            className="hover:text-primary transition-colors"
          >
            Neeraj95578@gmail.com
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={fadeIn("up", 0.4)}
      >
        <h3 className="font-medium">Social Media</h3>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-300 py-2 px-4 rounded-full shadow-sm"
              variants={fadeIn("up", 0.1 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
              <span>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};