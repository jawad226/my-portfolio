"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileCode2 } from "lucide-react";
import ProjectModal from "./project-modal";
import Image from "next/image";

type Project = {
  _id: string;
  projectName: string;
  projectImage: string;
  slogan: string;
  description: string;
  liveLink?: string;
  clientLink?: string;
  serverLink?: string;
  features?: string[];
  technologies?: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-r from-teal-500/6 via-transparent to-teal-500/3 py-15 px-6 lg:px-24">
      <header className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          My Digital <span className="text-teal-600">Creations</span>
        </h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-4 text-sm text-gray-600 max-w-2xl mx-auto"
        >
          A selection of projects where I've turned complex problems into elegant, user-friendly solutions.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-10/12 z-20 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105">
              <Image
                src={project.projectImage}
                alt={`Screenshot of ${project.projectName}`}
                width={400}
                height={250}
                className="aspect-video w-full object-fit rounded-lg shadow-lg border border-gray-200"
                loading="lazy"
                placeholder="blur"
              />
            </div>

            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md pt-28 p-6 text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {project.projectName}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.slogan}</p>

              <div className="flex justify-center gap-4 mt-6 pt-5 border-t border-gray-200">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border-2 border-teal-500 px-4 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50 transition-all"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 rounded-full border-2 border-transparent bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-all"
                >
                  <FileCode2 size={16} /> Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-28 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 text-center border border-gray-100"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Interested in <span className="text-[#009689]">working together?</span>
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Let’s discuss how we can bring your next project to life with modern web technologies.
        </p>

        <a
          href="#Contact"
          className="inline-block bg-[#009689] text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:bg-black transition-all duration-300"
        >
          Get In Touch
        </a>
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}


