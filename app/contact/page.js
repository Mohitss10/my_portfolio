"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Hide popup after 3 seconds
  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    }

    setSending(false);
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="min-h-[85.5vh] px-2 sm:p-6 mx-1 mb-2 sm:mt-2 mt-1 rounded-2xl flex flex-col items-center relative overflow-visible"
    >
      {/* Floating popup */}
      <AnimatePresence>
        {success !== null && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl text-white shadow-lg z-50 ${
              success ? "bg-green-400" : "bg-red-400"
            }`}
          >
            {success ? "Message sent successfully!" : "Failed to send message."}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fadeInUp}
        className="w-full h-56 sm:h-72 relative block lg:hidden"
      >
        <Image
          src="/cover.jpg"
          alt="Cover"
          fill
          className="object-cover rounded-xl shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="w-full lg:max-w-[600px] content-card p-4 sm:p-6 lg:p-8 rounded-2xl flex flex-col justify-center relative z-10 mt-3 lg:mt-12 mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none"
            required
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none"
            required
          />
          <motion.textarea
            variants={fadeInUp}
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 content-card rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none resize-none"
            required
          />
          <motion.button
            variants={fadeInUp}
            type="submit"
            disabled={sending}
            className="w-full px-5 py-3 content-card hover:bg-gray-700 rounded-lg transition mt-2"
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>

          <h1 className="text-xl mt-3 text-center">
            Let’s Build Something Amazing Together
          </h1>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Page;
