"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiCplusplus ,} from "react-icons/si";
import { GiBrain } from "react-icons/gi";


// Parent container animation (for laptop/desktop)
const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Child animation (box appear)
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
    y: [0, -10, 0], // float up and down
    scale: [1, 1.05, 1], // slight scale effect
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Tech stack data
const techData = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Structure the web with HTML5." },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Style websites using modern CSS3." },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Add interactivity with JavaScript." },
  { name: "React", icon: <SiReact className="text-cyan-400 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Build UIs with React library." },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Server-side JavaScript runtime." },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-30 h-30 sm:w-28 sm:h-28" />, desc: "NoSQL database system." },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 w-30 h-30 sm:w-28 sm:h-28" />, desc: "High-performance programming language." },
  { name: "DSA", icon: <GiBrain className="text-slate-500 w-30 h-30 sm:w-28 sm:h-28" />, desc: "Data Structures & Algorithms." },
];

const Page = () => {
  return (
    <div className=" mx-3 mt-1 sm:mt-0 rounded-2xl sm:h-[85.5vh]  sm:pt-2 overflow-hidden">
      {/* Laptop/Desktop wrapper */}
      <motion.div
        className="hidden sm:grid gap-3 h-full w-full sm:grid-cols-4 sm:grid-rows-4 sm:auto-rows-auto text-white text-xl text-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {techData.map((tech, i) => (
          <motion.div
            key={i}
            variants={boxVariant}
            className={`bg-[#101626] rounded-2xl flex flex-col items-center justify-center p-4 text-center
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
            <motion.div {...iconFloat}>{tech.icon}</motion.div>
            <span className="mt-2 text-lg sm:text-xl">{tech.name}</span>
            <p className="mt-1 text-sm text-gray-300">{tech.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Phone wrapper */}
      <div className="grid sm:hidden gap-3 h-full w-full grid-cols-1 auto-rows-[50vh] text-white text-xl font-semibold text-center">
        {techData.map((tech, i) => (
          <motion.div
            key={i}
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="bg-[#101626] rounded-2xl flex flex-col items-center justify-center p-4 text-center"
          >
            <motion.div {...iconFloat}>{tech.icon}</motion.div>
            <span className="mt-2 text-xl">{tech.name}</span>
            <p className="mt-1 text-lg text-gray-300">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
