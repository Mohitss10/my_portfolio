"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";

// Parent container animation (desktop stagger)
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Child box animation
const boxVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Page = () => {
  return (
    <div className="mx-3 mt-2 sm:mt-0 sm:h-[85.5vh] sm:pt-3 overflow-hidden rounded-2xl">
      {/* Desktop Grid */}
      <motion.div
        className="hidden sm:grid gap-4 h-[87.3vh] sm:grid-cols-5 sm:grid-rows-6"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Box 1 */}
 <motion.div
          variants={boxVariant}
          className="bg-[#101626] rounded-2xl col-span-2 row-span-6 flex flex-col p-2 overflow-hidden h-[84vh] "
        >
          <img
            src="ai.png"
            alt="Description"
            className="object-cover h-[40vh] w-full rounded-2xl mb-4"
          />

          {/* Content wrapper grows to push footer down */}
          <div className="text-white flex flex-col flex-1">
            <span className="text-4xl font-bold mb-3">AIMatrix</span>
            <p className="text-base leading-relaxed flex-1">
              This AI SaaS app offers a suite of productivity tools including
              article and blog generation, image creation, background removal,
              object removal, and resume reviewing. Designed to save time and
              enhance creativity for writers, designers, and professionals.
            </p>

            {/* Footer stays at bottom */}
            <div className="flex items-center mt-4 text-lg justify-between">
              <span>Check my work</span>
              <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={boxVariant}
          className="bg-[#101626] rounded-2xl col-span-2 row-span-6 flex flex-col p-2 overflow-hidden h-[84vh] "
        >
          <img
            src="ai.png"
            alt="Description"
            className="object-cover h-[40vh] w-full rounded-2xl mb-4"
          />

          {/* Content wrapper grows to push footer down */}
          <div className="text-white flex flex-col flex-1">
            <span className="text-4xl font-bold mb-3">AIMatrix</span>
            <p className="text-base leading-relaxed flex-1">
              This AI SaaS app offers a suite of productivity tools including
              article and blog generation, image creation, background removal,
              object removal, and resume reviewing. Designed to save time and
              enhance creativity for writers, designers, and professionals.
            </p>

            {/* Footer stays at bottom */}
            <div className="flex items-center mt-4 text-lg justify-between">
              <span>Check my work</span>
              <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Grid */}
      <div className="grid sm:hidden gap-4 grid-cols-1">
        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="bg-[#101626] rounded-2xl p-2 flex flex-col text-white"
        >
          <img
            src="ai.png"
            alt="Description"
            className="object-cover h-[30vh] rounded-xl w-full mb-3"
          />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold">AIMatrix</span>
            <p className="text-sm leading-relaxed">
              This AI SaaS app offers tools like article/blog generation, image
              creation, background removal, object removal, and resume reviewing
              — boosting productivity and creativity.
            </p>
            <div className="flex items-center mt-2 text-sm justify-between">
              <span>Check my work</span>
              <LinkIcon className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="bg-[#101626] rounded-2xl p-2 flex flex-col text-white"
        >
          <img
            src="ai.png"
            alt="Description"
            className="object-cover h-[30vh] rounded-xl w-full mb-3"
          />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold">Netflix - Clone</span>
            <p className="text-sm leading-relaxed">
              A sleek mobile-first Netflix clone with clean UI, showcasing
              trending movies and interactive user experience.
            </p>
            <div className="flex items-center mt-2 text-sm justify-between">
              <span>Check my work</span>
              <LinkIcon className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
