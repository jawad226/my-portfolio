"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Experience: React.FC = () => {
  const education: TimelineItem[] = [
    {
      title: "Bachelor of Science in Software Engineering",
      subtitle: "The Islamia University of Bahawalpur",
      period: "2021 – 2025",
      description:
        "Graduated with distinction, specializing in software engineering and web technologies. Developed multiple MERN-based projects during studies.",
    },
    {
      title: "Fsc Pre Engineering",
      subtitle: "Punjab Group of College",
      period: "2019 – 2021",
      description:
        "Built a strong foundation in computing principles, programming, and mathematics that supported future technical growth.",
    },
  ];

  const experience: TimelineItem[] = [
    {
      title: "Junior Software Engineer",
      subtitle: "Delta Code Solutions",
      period: "2023 – Present",
      description:
        "Leading cross-functional teams building scalable products using React, Next.js, Node.js, and TypeScript. Implementing best practices for performance and CI/CD.",
    },
    {
      title: "Mern Stack Developer",
      subtitle: "Yellow Beam Technologies",
      period: "2025 – Present",
      description:
        "Delivered end-to-end web applications using the MERN stack. Collaborated closely with clients to develop modern, responsive interfaces and backend APIs.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-white text-black py-24 px-6 lg:px-12 max-w-6xl mx-auto overflow-hidden"><motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-teal-500 font-semibold uppercase tracking-wide mb-3">
          My Journey
        </h3>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900">
          Education & Experience
        </h2>
      </motion.div>

      <div className="relative border-l border-gray-300 pl-8 lg:pl-0 lg:border-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-teal-500 text-3xl" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative border-l-2 border-teal-500 pl-6 before:content-[''] before:absolute before:-left-[9px] before:top-2 before:w-4 before:h-4 before:bg-teal-500 before:rounded-full transition-transform hover:-translate-y-2 hover:shadow-md hover:bg-gray-50 duration-500 p-4 rounded-lg"
                >
                  <h4 className="text-xl font-semibold text-teal-600">{edu.title}</h4>
                  <p className="text-gray-800 font-medium">{edu.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mt-16 lg:mt-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-teal-500 text-3xl" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative border-l-2 border-teal-500 pl-6 before:content-[''] before:absolute before:-left-[9px] before:top-2 before:w-4 before:h-4 before:bg-teal-500 before:rounded-full transition-transform hover:-translate-y-2 hover:shadow-md hover:bg-gray-50 duration-500 p-4 rounded-lg"
                >
                  <h4 className="text-xl font-semibold text-teal-600">{exp.title}</h4>
                  <p className="text-gray-800 font-medium">{exp.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-teal-400 transform -translate-x-1/2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Experience;
