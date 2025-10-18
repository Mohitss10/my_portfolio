"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const boxVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  { title: "AIMatrix", desc: "This AI SaaS app offers productivity tools including article/blog generation, image creation, background removal, object removal, and resume reviewing. Designed to save time and enhance creativity for writers, designers, and professionals.", img: "/ai.png", link: "http://aimatrix-client.onrender.com/" },
  { title: "Netflix Clone", desc: "A sleek Netflix clone app showcasing trending movies, clean UI, and interactive user experience.", img: "/netflix.png", link: "https://mohitss10.github.io/Netflix-Clone/" },
  { title: "Indian Cultural Heritage", desc: "A web platform that brings India’s cultural heritage to life using AR technology. Users can explore interactive 3D models of historical landmarks like the Taj Mahal and Ram Mandir.", img: "/heritage.png", link: "https://cultural-heritage-sxd1.vercel.app" },
  { title: "Personal Portfolio Website", desc: "Made my own Next.js web app. It features a responsive design, dark/light theme toggle, smooth animations, and showcases projects with horizontal scrolling cards for desktop and mobile-friendly layout.", img: "/portfolio.png", link: "https://mohitsayshellotoyou.vercel.app/" },
];

const Page = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.offsetWidth;
        // 3 cards visible + gap between them
        const gap = 24; // gap-6 in Tailwind = 1.5rem = 24px
        setCardWidth((containerWidth - gap * 2) / 3);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-3 sm:mt-0 sm:h-[85.5vh] sm:pt-2 overflow-hidden rounded-2xl mb-4">
      {/* Desktop Horizontal Scroll */}
      <div className="hidden sm:flex flex-col h-[87.3vh] relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 dark:bg-white/20 backdrop-blur-md rounded-full hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white dark:text-black" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 dark:bg-white/20 backdrop-blur-md rounded-full hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6 text-white dark:text-black" />
        </button>

        <motion.div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto h-full px-2 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={boxVariant}
              className="project-card snap-start"
              style={{ minWidth: cardWidth, maxWidth: cardWidth, height: "84vh" }}
            >
              <div className="relative w-full h-[40vh] mb-4 rounded-2xl overflow-hidden shadow-xl">
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

                <div className="card-footer mt-4">
                  <span className="">Check my work</span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <LinkIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Grid */}
      <div className="grid sm:hidden gap-3 grid-cols-1">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.1 }}
            className="project-card"
          >
            <div className="relative w-full h-[30vh] mb-3 rounded-xl overflow-hidden shadow-md">
              <Image
                src={proj.img}
                alt={`${proj.title} Mobile Preview`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-medium">{proj.title}</span>
              <p className="text-sm leading-relaxed">{proj.desc}</p>

              <div className="card-footer mt-3">
                <span>Check my work</span>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
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
