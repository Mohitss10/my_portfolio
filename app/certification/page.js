"use client";
import React from "react";
import { motion } from "framer-motion";

// Parent animation (stagger)
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Each box animation
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mx-3 sm:mt-2 my-0 rounded-2xl grid gap-2
        h-auto md:h-[85.5vh]
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-6 md:grid-rows-6
        overflow-visible md:overflow-hidden mb-3"
    >
      {/* Box 1 */}
      <motion.div
        variants={item}
        className="bg-[#081c3999] rounded-2xl overflow-hidden 
          h-[40vh] md:h-auto
          col-span-1 md:col-span-2 md:row-span-3"
      >
        <img src="/js.png" alt="Box 1" className="w-full h-full object-cover" />
      </motion.div>

      {/* Box 2 */}
      <motion.div
        variants={item}
        className="bg-[#081c3999] rounded-2xl overflow-hidden 
          h-[40vh] md:h-auto
          col-span-1 md:col-span-2 md:row-span-3 md:col-start-3"
      >
        <img src="/tcs.png" alt="Box 2" className="w-full h-full object-cover" />
      </motion.div>

      {/* Box 3 */}
      <motion.div
        variants={item}
        className="bg-[#081c3999] rounded-2xl overflow-hidden 
          h-[40vh] md:h-auto
          col-span-1 md:col-span-2 md:row-span-3 md:col-start-5"
      >
        <img src="/udemy.png" alt="Box 3" className="w-full h-full object-cover" />
      </motion.div>

      
      <motion.div
        variants={item}
        className="bg-[#081c3999] rounded-2xl overflow-hidden 
          h-[40vh] md:h-auto
          col-span-1 md:col-span-2 md:row-span-3 md:row-start-4"
      >
        <img src="/prompt.jpg" alt="Box 4" className="w-full h-full object-cover" />
      </motion.div> 

    </motion.div>
  );
}
