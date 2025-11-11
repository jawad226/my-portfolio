"use client";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiCloudflare,
  SiNestjs,
  SiMysql,
} from "react-icons/si";

export default function SkillsSection() {
  const icons = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
  ];

  return (
    <section className="bg-white text-gray-900 max-w-6xl mx-auto px-6 py-12 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-10 mt-0"
        >
          {icons.slice(0, 4).map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative group p-10 rounded-3xl border border-gray-200 
                bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-teal-400/50 
                text-center transform ${index % 2 === 1 ? "translate-y-8" : "translate-y-0"}`}
            >
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 to-transparent 
                opacity-0 group-hover:opacity-100 blur-md transition-all duration-700"
              ></div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                <div className="text-teal-500 group-hover:text-teal-600 transition-colors duration-300 text-6xl">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-xl text-gray-800 group-hover:text-teal-600 transition-all duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-teal-500 font-semibold uppercase tracking-wide mb-3">
            My Skills
          </h3>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 text-gray-900">
            Solving Problems With Scalable Solutions
          </h2>
          <div className="relative overflow-hidden w-full mb-8">
            <div className="scroll-wrapper flex gap-6 animate-scroll-right">
              {icons.concat(icons).map((tech, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center border border-teal-200 rounded-lg text-teal-400 
                  hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 text-2xl min-w-14 
                  animate-glow hover:scale-110"
                  title={tech.name}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
            I’m a passionate MERN Stack Developer with over 1 year of experience
            in building scalable, high-performance web applications using React,
            Next.js, Node.js, Express, NestJS, MongoDB, and MySQL. I specialize
            in developing clean, efficient, and maintainable code while creating
            intuitive user interfaces and robust backend systems. I’m proficient
            with modern tools like VS Code, GitHub, Docker, and Postman, and
            have a growing interest in integrating AI technologies such as the
            OpenAI API and LangChain to enhance user experiences. Focused on
            continuous learning and innovation, I aim to deliver impactful
            digital solutions that combine performance, reliability, and modern
            design.
          </p>

          <motion.a
            href="JAWAD_JAMEEL_RESUME.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
      <style>{`
        /* Infinite horizontal scroll */
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
          display: flex;
          width: max-content;
        }

        /* Glow pulse animation */
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(45, 212, 191, 0.2); }
          50% { box-shadow: 0 0 20px rgba(45, 212, 191, 0.6); }
          100% { box-shadow: 0 0 5px rgba(45, 212, 191, 0.2); }
        }

        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }

        /* Hide scrollbar */
        .scroll-wrapper {
          overflow-x: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
