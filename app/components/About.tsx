"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

// Lazy load Framer Motion for better performance
const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div)
);

// Memoized SocialLink to avoid re-renders
const SocialLink = memo(({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <MotionDiv
    key={href}
    className="p-3 border border-teal-500 rounded-md text-teal-600 hover:bg-teal-500 hover:text-white transition-all"
    whileHover={{ scale: 0.85, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </MotionDiv>
));

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-12 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent backdrop-blur-sm"
    >
      {/* Optimized radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.06),transparent_60%)]"></div>

      {/* Container with one fade-in animation */}
      <MotionDiv
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left: About Text */}
        <div className="relative">
          <div className="absolute -left-8 -top-10 w-48 h-48 border-2 border-teal-400 rounded-full opacity-20 blur-sm"></div>

          <h3 className="text-teal-500 font-semibold uppercase tracking-wide mb-3">
            About Me
          </h3>

          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
            Junior Software <br /> Engineer · MERN <br /> Stack Expert
          </h2>

          <p className="text-gray-600 max-w-lg leading-relaxed">
            I build scalable, high-performance web apps with a product-first mindset.
            With 1+ years of experience crafting clean, efficient, and reliable
            software for fast-moving teams and startups.
          </p>
        </div>

        {/* Right: Connect Card */}
        <MotionDiv
          className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Connect With Me
          </h2>
          <p className="text-gray-600 mb-6">
            Open to remote roles and freelance projects. I typically reply within 24 hours.
          </p>

          <div className="flex items-center gap-4">
            <SocialLink href="https://www.linkedin.com/in/jawadjameel/" icon={<FaLinkedinIn size={20} />} />
            <SocialLink href="https://github.com/jawad226" icon={<FaGithub size={20} />} />
            <SocialLink href="https://www.upwork.com" icon={<SiUpwork size={20} />} />
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default About;
