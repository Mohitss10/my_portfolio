"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="min-h-[85.5vh] px-2 sm:p-6 mx-1 mb-3 sm:mt-2 mt-1 rounded-2xl flex flex-col items-center relative overflow-visible"
    >
      {/* Left side - Image (only show on mobile/smaller screens) */}
      <motion.div
        variants={fadeInUp}
        className="w-full h-56 sm:h-72 relative block lg:hidden"
      >
        <img
          src="cover.jpg"
          className="object-cover rounded-xl shadow-2xl w-full h-full"
        />
      </motion.div>

      {/* Contact Form - Centered on laptop */}
      <motion.div
        variants={fadeInUp}
        className="w-full lg:max-w-[600px] content-card p-4 sm:p-6 lg:p-8 rounded-2xl flex flex-col justify-center relative z-10 mt-3 lg:mt-12 mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>
        <form className="flex flex-col gap-3 w-full">
          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none"
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none"
          />
          <motion.textarea
            variants={fadeInUp}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none resize-none"
          />
          <motion.button
            variants={fadeInUp}
            type="submit"
            className="w-full px-5 py-3 content-card hover:bg-gray-700 rounded-lg transition mt-2"
          >
            Send Message
          </motion.button>

          <h1 className="text-xl mt-3 text-center">
            Let’s Build Something Amazing Together
          </h1>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Page;
