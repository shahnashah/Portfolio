"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background"

function Contact() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 mt-20 md:mt-36 items-center justify-center px-5 md:px-60"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Contact Me :)
          </div>
          <div className="font-extralight text-base md:text-2xl dark:text-gray-400 pt-2 pb-4 text-center">
            I&apos;m always excited to connect with like-minded individuals, collaborators, and companies! Whether you have a project idea, an internship opportunity, or just want to chat about tech, feel free to reach out.
          </div>
          <input
            className="bg-gray-900 h-20 w-full max-w-xl rounded-xl p-4 text-white text-md placeholder:text-gray-400"
            placeholder="Enter your email "
            type="email"
          />
          <input
            className="bg-gray-900 h-44 w-full max-w-xl rounded-xl p-4 text-white text-md placeholder:text-gray-400"
            placeholder="Your message "
            type="text"
          />
          <button className="bg-black mt-6 dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-4">
            Send
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Contact;
