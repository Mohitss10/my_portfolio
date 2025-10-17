"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const boxVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "AIMatrix",
    desc: "This AI SaaS app offers productivity tools including article/blog generation, image creation, background removal, object removal, and resume reviewing. Designed to save time and enhance creativity for writers, designers, and professionals.",
    img: "/ai.png",
    link: "http://aimatrix-client.onrender.com/",
  },
  {
    title: "Netflix Clone",
    desc: "A sleek Netflix clone app showcasing trending movies, clean UI, and interactive user experience.",
    img: "/netflix.png",
    link: "https://mohitss10.github.io/Netflix-Clone/",
  },
  {
    title: "Indian Cultural Heritage",
    desc: "A web platform that brings India’s cultural heritage to life using AR technology. Users can explore interactive 3D models of historical landmarks, such as the Taj Mahal and Ram Mandir, for an engaging and educational experience.",
    img: "/heritage.png",
    link: "https://cultural-heritage-sxd1.vercel.app",
  },
  // Add remaining 8 projects here
];

const Page = () => {


  return (
    <div className="mx-2  sm:mt-0 sm:h-[85.5vh] sm:pt-2 overflow-hidden rounded-2xl mb-4">
      {/* Desktop Horizontal Scroll */}
      <div className="hidden sm:flex flex-col h-[87.3vh] relative">
        {/* Scroll Buttons */}


        <motion.div
          
          className="flex gap-2 overflow-x-auto h-full px-1 scrollbar-hide snap-x snap-mandatory"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={boxVariant}
              className="bg-[#091529] flex-none rounded-2xl flex flex-col p-2 overflow-hidden h-[84vh] w-[500px] snap-start"
            >
              <div className="relative w-full h-[40vh] mb-4 rounded-2xl overflow-hidden">
                <Image
                  src={proj.img}
                  alt={`${proj.title} Preview`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-4xl font-medium mb-3">{proj.title}</span>
                <p className="text-base leading-relaxed flex-1">{proj.desc}</p>
                <div className="flex items-center mt-4 text-lg justify-between bg-[#071A35] p-4 rounded-2xl">
                  <span>Check my work</span>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Grid */}
      <div className="grid sm:hidden gap-2 grid-cols-1">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.1 }}
            className="content-card rounded-2xl p-2 flex flex-col"
          >
            <div className="relative w-full h-[30vh] mb-3 rounded-xl overflow-hidden">
              <Image src={proj.img} alt={`${proj.title} Mobile Preview`} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-medium">{proj.title}</span>
              <p className="text-sm leading-relaxed">{proj.desc}</p>
              <div className="flex items-center mt-15 text-lg justify-between bg-[#071A35] p-4 rounded-2xl">
                <span>Check my work</span>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="w-4 h-4 hover:text-gray-400 cursor-pointer" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
