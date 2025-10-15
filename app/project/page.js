"use client";
import React from "react";
import Image from "next/image";
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
    <div className="mx-3 mt-1 sm:mt-0 sm:h-[85.5vh] sm:pt-3 overflow-hidden rounded-2xl mb-4">
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
          className="content-card rounded-2xl col-span-2 row-span-6 flex flex-col p-2 overflow-hidden h-[84vh]"
        >
          <div className="relative w-full h-[40vh] mb-4 rounded-2xl overflow-hidden">
            <Image
              src="/ai.png"
              alt="AI Matrix Preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col flex-1">
            <span className="text-4xl font-medium mb-3">AIMatrix</span>
            <p className="text-base leading-relaxed flex-1">
              This AI SaaS app offers a suite of productivity tools including
              article and blog generation, image creation, background removal,
              object removal, and resume reviewing. Designed to save time and
              enhance creativity for writers, designers, and professionals.
            </p>

            <div className="flex items-center mt-4 text-lg justify-between">
              <span>Check my work</span>
              <a
                href="http://aimatrix-client.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={boxVariant}
          className="content-card rounded-2xl col-span-2 row-span-6 flex flex-col p-2 overflow-hidden h-[84vh]"
        >
          <div className="relative w-full h-[40vh] mb-4 rounded-2xl overflow-hidden">
            <Image
              src="/netflix.png"
              alt="Netflix Clone Preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col flex-1">
            <span className="text-4xl font-medium mb-3">Netflix Clone</span>
            <p className="text-base leading-relaxed flex-1">
              A sleek Netflix clone app showcasing trending movies, clean UI,
              and interactive user experience.
            </p>

            <div className="flex items-center mt-4 text-lg justify-between">
              <span>Check my work</span>
              <a
                href="https://mohitss10.github.io/Netflix-Clone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Grid */}
      <div className="grid sm:hidden gap-4 grid-cols-1">
        {/* AIMatrix Mobile */}
        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="content-card rounded-2xl p-2 flex flex-col"
        >
          <div className="relative w-full h-[30vh] mb-3 rounded-xl overflow-hidden">
            <Image
              src="/ai.png"
              alt="AI Matrix Mobile Preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-medium">AIMatrix</span>
            <p className="text-sm leading-relaxed">
              This AI SaaS app offers tools like article/blog generation, image
              creation, background removal, object removal, and resume reviewing
              — boosting productivity and creativity.
            </p>
            <div className="flex items-center mt-2 text-sm justify-between">
              <span>Check my work</span>
              <a
                href="http://aimatrix-client.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Netflix Clone Mobile */}
        <motion.div
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="content-card rounded-2xl p-2 flex flex-col"
        >
          <div className="relative w-full h-[30vh] mb-3 rounded-xl overflow-hidden">
            <Image
              src="/netflix.png"
              alt="Netflix Clone Mobile Preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-medium">Netflix Clone</span>
            <p className="text-sm leading-relaxed">
              A sleek mobile-first Netflix clone with clean UI, showcasing
              trending movies and interactive user experience.
            </p>
            <div className="flex items-center mt-2 text-sm justify-between">
              <span>Check my work</span>
              <a
                href="https://mohitss10.github.io/Netflix-Clone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
