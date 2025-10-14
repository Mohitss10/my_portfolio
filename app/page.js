"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, LinkIcon } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGithub as SiGithubIcon,
} from "react-icons/si";

export default function CustomGrid3() {
  // ✅ Icon list
  const logos = [
    { id: "html", Icon: SiHtml5 },
    { id: "css", Icon: SiCss3 },
    { id: "js", Icon: SiJavascript },
    { id: "react", Icon: SiReact },
    { id: "next", Icon: SiNextdotjs },
    { id: "tailwind", Icon: SiTailwindcss },
    { id: "node", Icon: SiNodedotjs },
    { id: "mongo", Icon: SiMongodb },
    { id: "github", Icon: SiGithubIcon },
  ];

  // ✅ Animations
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const fadeFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const fadeFromBottom = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 36, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
     <div
      className="grid gap-3 rounded-2xl mx-1 my-0 sm:my-2 overflow-hidden mb-4
        grid-cols-1 w-auto px-2
        h-auto sm:h-[85.5vh] sm:grid-cols-2 sm:grid-rows-4
        md:grid-cols-4 md:grid-rows-4
        lg:grid-cols-6 lg:grid-rows-6
        xl:grid-cols-7 xl:grid-rows-7"
    >
      {/* 👋 About Section */}
      <motion.div
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#0A192F99] h-[60vh] sm:h-auto col-span-1 row-span-1 
          sm:col-span-2 md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-4 
          p-4 rounded-2xl flex flex-col cursor-pointer mt-1 sm:mt-0
          "
      >
        <Link href="/about" className="flex flex-col justify-between h-full">
          <div>
            <ArrowUpRight className="absolute text-gray-400 top-4 right-4 w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-3xl  sm:text-xl md:text-2xl lg:text-3xl text-white">
              Hello, I&apos;m Mohit
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Full Stack Developer
            </span>
            <span className="text-2xl sm:text-xl md:text-2xl text-gray-300">
              End-to-end development with a touch of creativity.
            </span>
          </div>
        </Link>
      </motion.div>


      {/* 💻 Projects Section */}
      <motion.div
        variants={fadeFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#0A192F99] sm:h-auto col-span-1 row-span-1 
          sm:row-span-2 md:col-span-2 lg:col-span-2 md:row-span-3 lg:row-span-6 
          xl:col-start-6 xl:row-start-1 flex flex-col justify-between p-2 
          text-lg sm:text-xl rounded-2xl h-[60vh] cursor-pointer
          "
      >
        <Link href="/project" className="absolute inset-0 flex flex-col justify-between p-2">
          <ArrowUpRight className="absolute text-gray-400 top-2 right-2 w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-3xl  sm:text-2xl text-white">Projects</span>
          <div className="gap-2 flex flex-col w-full">
            {/* AIMatrix */}
            <div className="p-2 bg-gray-800 rounded-2xl">
              <h3 className="text-3xl font-semibold">AIMatrix</h3>
              <div className="flex items-center justify-between">
                <p className="text-lg sm:">AI SaaS web app</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://your-aimatrix-link.com", "_blank", "noopener,noreferrer");
                  }}
                  className="relative group"
                >
                  <LinkIcon className="w-4 h-6 sm:w-4 sm:h-4 hover:text-slate-400 transition-colors" />
                  <span className="absolute -left-6 bottom-0 px-2 py-1 text-xs rounded bg-black text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Visit
                  </span>
                </button>
              </div>
            </div>

            {/* Netflix Clone */}
            <div className="p-2 bg-gray-800 rounded-2xl">
              <h3 className="text-3xl font-semibold">Netflix Clone</h3>
              <div className="flex items-center justify-between">
                <p className="text-lg">Movie streaming platform</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://your-netflix-clone-link.com", "_blank", "noopener,noreferrer");
                  }}
                  className="relative group"
                >
                  <LinkIcon className="w-4 h-6 sm:w-4 sm:h-4 hover:text-slate-400 transition-colors" />
                  <span className="absolute -left-6 bottom-0 px-2 py-1 text-xs rounded bg-black text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Visit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

       <motion.div
        variants={fadeFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#0A192F99] h-[60vh] sm:h-auto col-span-1 row-span-1 
          md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-3 xl:col-start-3 
          xl:row-start-5 flex flex-col justify-between p-2 text-lg sm:text-xl rounded-2xl cursor-pointer
          transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-900/50"
      >
        <Link href="/certification" className="flex flex-col justify-between h-full">
          <div>
            <ArrowUpRight className="absolute top-2 text-gray-400 right-2 w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-3xl sm:text-2xl text-white mb-4">Certificates</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-2 gap-2 w-full">
            <div className="bg-gray-800 sm:col-span-3 flex items-center justify-center rounded-xl py-4">
              Prompt Engineering
            </div>
            <div className="bg-gray-800 sm:col-span-2 flex items-center justify-center rounded-xl py-4">
              JavaScript
            </div>
            <div className="bg-gray-800 sm:col-span-2 sm:row-start-2 flex items-center justify-center rounded-xl py-4">
              TCS Icon
            </div>
            <div className="bg-gray-800 sm:col-span-3 sm:col-start-3 sm:row-start-2 flex items-center justify-center rounded-xl py-4">
              HTML, CSS & JS
            </div>
          </div>
        </Link>
      </motion.div>

      {/* 🧠 Skills Section */}
      <motion.div
        custom={3}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#0A192F99] h-[60vh] sm:h-auto col-span-1 row-span-1 
          md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-4 xl:col-start-4 
          xl:row-start-1 flex flex-col justify-between p-2 text-lg sm:text-xl 
          rounded-2xl cursor-pointer overflow-hidden
          "
      >
        <Link href="/skills" className="absolute inset-0 flex flex-col justify-between p-2">
          <ArrowUpRight className="absolute top-2 text-gray-400 right-2 w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-3xl sm:text-2xl text-white">Skills</span>
          <div className="relative mt-6 mb-7 w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-[#101626] to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-[#101626] to-transparent z-10" />
            <div className="flex animate-scroll space-x-6 sm:space-x-8 w-max">
              {logos.concat(logos).map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center justify-center">
                  <item.Icon className="text-gray-300 w-30 h-30 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                </div>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>

      {/* 🌐 Socials Section */}
{/* 🌐 Socials Section */}
<motion.div
  variants={fadeFromRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative bg-[#0A192F99] h-[15vh] sm:h-auto col-span-1 row-span-1 
    md:col-span-1 lg:col-span-2 xl:col-start-6 xl:row-start-7 flex flex-col 
    items-center justify-center text-lg sm:text-xl font-bold rounded-2xl 
    p-4 sm:p-2 transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-900/50"
>
  <div className="flex space-x-8 sm:space-x-8">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <FaInstagram className="w-12 h-12 sm:w-8 sm:h-8 hover:text-pink-500 transition-colors" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        Instagram
      </span>
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <FaGithub className="w-12 h-12 sm:w-8 sm:h-8 hover:text-gray-400 transition-colors" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        GitHub
      </span>
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <FaLinkedin className="w-12 h-12 sm:w-8 sm:h-8 hover:text-blue-500 transition-colors" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        LinkedIn
      </span>
    </a>
  </div>
</motion.div>


      {/* 📩 Contact Section */}
      <motion.div
        variants={fadeFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#0A192F99] h-[30vh] sm:h-auto col-span-1 row-span-1 
          md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-3 xl:col-start-1 
          xl:row-start-5 flex flex-col p-2 text-lg justify-between sm:text-xl rounded-2xl cursor-pointer
          transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-900/50"
      >
        <Link href="/contact" className="absolute inset-0 flex flex-col p-2 justify-between">
          <ArrowUpRight className="absolute text-gray-400 top-2 right-2 w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-3xl sm:text-2xl text-white">Contact</span>
          <div>
            <span className="text-5xl">Let&apos;s collaborate</span>
            <p>— your idea + my code = something amazing.</p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
