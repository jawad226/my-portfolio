"use client";
import React, { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Image from "next/image";

// Lazy load motion
const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div)
);

// Memoized social link
const SocialLink = memo(({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <MotionDiv
    whileHover={{ scale: 1.15, rotate: 3 }}
    transition={{ type: "spring", stiffness: 250 }}
    className="group relative p-3 rounded-full border border-gray-300 hover:border-teal-400 transition-all duration-300"
  >
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <span className="text-gray-700 group-hover:text-teal-500 transition-colors duration-300">{icon}</span>
    </a>
  </MotionDiv>
));

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-500/10"></div>

      {/* Main Container */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 py-16 text-center backdrop-blur-sm border-t border-white/10"
      >
        {/* Top: Profile */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <Image
            src="/image1.png"
            alt="Jawad Jameel"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover border border-teal-400 shadow-md"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Jawad Jameel <span className="text-teal-600 font-semibold">| Mern Stack Developer</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-700 mb-10">
          {["Home", "About", "Experience", "Projects", "Contact", "Blogs"].map((item) => {
            const isBlog = item === "Blogs";
            const href = isBlog ? "/Blogs" : `#${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                className="relative group transition-colors hover:text-teal-600"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <SocialLink href="https://linkedin.com/in/jawadjameel" icon={<FaLinkedinIn size={18} />} label="LinkedIn" />
          <SocialLink href="https://github.com/jawad226" icon={<FaGithub size={18} />} label="GitHub" />
          <SocialLink href="https://www.upwork.com" icon={<SiUpwork size={18} />} label="Upwork" />
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-teal-400 mx-auto mb-8 rounded-full w-24"></div>

        {/* Footer Text */}
        <div className="text-gray-600 space-y-1 text-sm">
          <p className="flex items-center justify-center gap-2">
            Designed with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
            <a
              href="https://github.com/jawad226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold hover:underline"
            >
              Jawad Jameel
            </a>
          </p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </MotionDiv>
    </footer>
  );
}
