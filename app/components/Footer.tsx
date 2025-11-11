"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/15 via-transparent to-teal-500/15 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 py-16 text-center backdrop-blur-sm border-t border-white/10"
      ><motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          <motion.img
            src="/image1.png"
            alt="Jawad Jameel"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-14 h-14 rounded-full object-cover border border-teal-400 shadow-[0_0_15px_rgba(13,148,136,0.3)]"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Jawad Jameel{" "}
            <span className="text-teal-600 font-semibold">
              | Mern Stack Developer
            </span>
          </h2>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-700 mb-10"
        >
          {["Home", "About", "Experience", "Projects", "Blogs", "Contact"].map(
            (item) => {
              const isBlog = item === "Blogs";
              const href = isBlog ? "/Blogs" : `#${item.toLowerCase()}`;

              return (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative group"
                >                  <Link
                    href={href}
                    className="transition-colors group-hover:text-teal-600"
                  >
                    {item}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              );
            }
          )}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-6 mb-10"
        >
          {[
            {
              href: "https://linkedin.com/in/jawadjameel",
              icon: <FaLinkedinIn size={18} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/jawad226",
              icon: <FaGithub size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.upwork.com",
              icon: <SiUpwork size={18} />,
              label: "Upwork",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative p-3 rounded-full border border-gray-300 hover:border-teal-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]"
            >
              <span className="text-gray-700 group-hover:text-teal-500 transition-colors duration-300">
                {social.icon}
              </span>
              <div className="absolute inset-0 rounded-full bg-teal-500/10 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-teal-400 mx-auto mb-8 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 space-y-1"
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            Designed with
            <FaHeart className="text-red-500 animate-pulse" />
            by{" "}
            <a
              href="https://github.com/jawad226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold hover:underline"
            >
              Jawad Jameel
            </a>
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
