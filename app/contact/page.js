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
      className="bg-[#101626] min-h-[85.5vh] p-2 sm:p-6 mx-3 sm:mt-2 mt-0 rounded-2xl flex flex-col lg:flex-row items-center gap-6"
    >
      {/* Left side - Image */}
      <motion.div
        variants={fadeInUp}
        className="w-full lg:w-1/2 h-56 sm:h-72 lg:h-full"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/166/530/non_2x/contact-me-illustration-vector.jpg"
          alt="Contact"
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      {/* Right side - Contact Form */}
      <motion.div
        variants={fadeInUp}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 text-center lg:text-left">
          Get in Touch
        </h2>
        <form className="flex flex-col gap-2 w-full">
          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <motion.textarea
            variants={fadeInUp}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none resize-none"
          />
          <motion.button
            variants={fadeInUp}
            type="submit"
            className="w-full px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition"
          >
            Send Message
          </motion.button>
          <h1 className="text-3xl mt-15">"Let’s Build Something Amazing Together 🚀"</h1>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Page;
