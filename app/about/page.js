"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Parent container animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.6 },
  },
};

// Each box animation
const boxVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Page = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="grid gap-3 w-full
        grid-cols-1
        sm:grid-cols-5 sm:grid-rows-5 sm:h-[85.5vh] px-3 sm:pt-2 overflow-hidden mb-3"
    >
      {/* Bio Section */}
      <motion.div
        variants={boxVariant}
        className="content-card p-4 rounded-lg
          h-auto sm:h-auto
          sm:col-span-3 sm:row-span-5 sm:col-start-1 sm:row-start-1"
      >
        <p className="text-base sm:text-xl leading-relaxed mb-4">
          Hello, my name is Mohit. I am a final-year Computer Science and Engineering student,
          currently pursuing a B.Tech degree at G.H. Raisoni Institute of Engineering. Over the
          years, I have built a strong foundation in programming, with C++ as my core language.
          This has allowed me to sharpen my problem-solving skills and develop a structured
          approach to writing clean and efficient code.
        </p>
        <p className="text-base sm:text-xl leading-relaxed">
          Alongside academics, I focus heavily on web development, which has become my primary
          domain. I enjoy designing responsive, user-friendly, and performance-driven websites
          that provide seamless experiences. Recently, I have also started integrating Artificial
          Intelligence into my projects, with the goal of building smart, adaptive, and future-ready
          web applications.
        </p>
      </motion.div>

      {/* Image + Resume Section */}
      <motion.div
        variants={boxVariant}
        className="content-card p-3 rounded-lg flex flex-col justify-between
          sm:col-span-2 sm:row-span-5 sm:col-start-4 sm:row-start-1"
      >
        {/* Image */}
        <div className="w-full h-[20vh] sm:h-[45vh] relative rounded-lg overflow-hidden">
          <Image
            src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fh68x0up43hmknl5tjcww.jpg"
            alt="Software Developer"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Resume Card */}
        <motion.div
          variants={boxVariant}
          className="content-card flex flex-col justify-between rounded-lg mt-2 p-4 h-auto sm:h-auto"
        >
          <h2 className="text-3xl mb-2">B.Tech Computer Science Student</h2>
          <p className="text-lg">
            Current CGPA: <span className="font-semibold">8.33</span>
          </p>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1wRSC0rRAD_NAIIv5LR_SZ_Yg99ED5zvf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-5 py-3 rounded-lg w-full text-center transition
              bg-[#081c3999] hover:bg-gray-700 text-white"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
