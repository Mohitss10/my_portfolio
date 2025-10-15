"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

// Parent container animation
const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Child animation
const boxVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Icon floating animation
const iconFloat = {
  animate: {
    y: [0, -10, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Tech stack data
const techData = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", desc: "Structure the web with HTML5." },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500", desc: "Style websites using modern CSS3." },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", desc: "Add interactivity with JavaScript." },
  { name: "React", icon: SiReact, color: "text-cyan-400", desc: "Build UIs with React library." },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", desc: "Server-side JavaScript runtime." },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700", desc: "NoSQL database system." },
  { name: "C++", icon: SiCplusplus, color: "text-blue-700", desc: "High-performance programming language." },
  { name: "DSA", icon: GiBrain, color: "text-slate-500", desc: "Data Structures & Algorithms." },
];

const Page = () => {
  return (
    <div className="mx-3 mt-1 mb-3 sm:mt-0 rounded-2xl sm:h-[85.5vh] sm:pt-2 overflow-hidden">
      {/* Desktop/Laptop Grid */}
      <motion.div
        className="hidden sm:grid gap-3 h-full w-full sm:grid-cols-4 sm:grid-rows-4 text-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {techData.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              variants={boxVariant}
              className={`content-card rounded-2xl flex flex-col items-center justify-center p-4 text-center
                ${i === 0 ? "sm:row-span-2" : ""}
                ${i === 1 ? "sm:row-span-2 sm:col-start-1 sm:row-start-3" : ""}
                ${i === 2 ? "sm:row-span-2 sm:col-start-2 sm:row-start-1" : ""}
                ${i === 3 ? "sm:row-span-2 sm:col-start-2 sm:row-start-3" : ""}
                ${i === 4 ? "sm:row-span-2 sm:col-start-3 sm:row-start-1" : ""}
                ${i === 5 ? "sm:row-span-2 sm:col-start-3 sm:row-start-3" : ""}
                ${i === 6 ? "sm:row-span-2 sm:col-start-4 sm:row-start-1" : ""}
                ${i === 7 ? "sm:row-span-2 sm:col-start-4 sm:row-start-3" : ""}
              `}
            >
              <motion.div animate={iconFloat.animate}>
                <Icon size={80} className={`${tech.color}`} />
              </motion.div>
              <span className="mt-2 text-lg sm:text-xl">{tech.name}</span>
              <p className="mt-1 text-sm">{tech.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Grid */}
      <div className="grid sm:hidden gap-3 w-full text-xl font-semibold">
        {techData.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="content-card rounded-2xl flex items-center h-[20vh] px-6 gap-4 py-2"
            >
              {/* Icon */}
              <motion.div
                animate={iconFloat.animate}
                className="flex-shrink-0 w-[25%] flex justify-center"
              >
                <Icon size={80} className={`${tech.color}`} />
              </motion.div>

              {/* Text */}
              <div className="ml-4 text-left w-[75%]">
                <span className="block text-base sm:text-lg font-semibold">{tech.name}</span>
                <p className="mt-1 text-sm leading-snug">{tech.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
