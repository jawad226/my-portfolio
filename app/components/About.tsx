"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-12 bg-gradient-to-b from-transparent via-gray-50/40 to-transparent backdrop-blur-sm"
    >
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_60%)]"></div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
          }}
        >
          <div className="absolute -left-8 -top-10 w-48 h-48 border-2 border-teal-400 rounded-full opacity-30 blur-sm"></div>

          <motion.h3
            className="text-teal-500 font-semibold uppercase tracking-wide mb-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            About Me
          </motion.h3>

          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 } },
            }}
          >
            Junior Software <br /> Engineer · MERN <br /> Stack Expert
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
            }}
          >
            I build scalable, high-performance web apps with a product-first mindset.
            With one+ years of experience crafting clean, efficient, and reliable
            software for fast-moving teams and startups.
          </motion.p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
          }}
          className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Connect With Me
          </h2>
          <p className="text-gray-600 mb-6">
            Open to remote roles and freelance projects. I typically reply within 24 hours.
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/jawadjameel/",
                icon: <FaLinkedinIn size={20} />,
              },
              {
                href: "https://github.com/jawad226",
                icon: <FaGithub size={20} />,
              },
              {
                href: "https://www.upwork.com",
                icon: <SiUpwork size={20} />,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-teal-500 rounded-md text-teal-600 hover:bg-teal-500 hover:text-white transition-all"
                whileHover={{ scale: 1.15, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
