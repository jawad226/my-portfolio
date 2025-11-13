"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, X } from "lucide-react";
import Image from "next/image";

type Project = {
  projectName: string;
  slogan: string;
  projectImage: string;
  description: string;
  features?: string[];
  technologies?: string[];
  liveLink?: string;
  clientLink?: string;
  serverLink?: string;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex justify-center items-start z-50 overflow-auto pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl max-w-4xl w-full p-6 relative shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-teal-600"
        >
          <X size={24} />
        </button>

        <h1 className="text-3xl font-bold text-gray-900">{project.projectName}</h1>
        <p className="text-gray-500 italic">{project.slogan}</p>

        <Image
          src={project.projectImage}
          alt={project.projectName}
          width={400}
          height={250}
          className="w-full rounded-xl mt-4 mb-4 object-cover border border-gray-200"
          loading="lazy"
        />

        <p className="text-gray-700 whitespace-pre-wrap">{project.description}</p>

        {project.features && (
          <div className="mt-4">
            <h2 className="text-teal-600 font-semibold text-sm mb-2 uppercase">Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              {project.features.map((f, i) => <li key={i}>{f.trim()}</li>)}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div className="mt-4">
            <h2 className="text-teal-600 font-semibold text-sm mb-2 uppercase">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition"
            >
              <Globe size={16} /> Live Site
            </a>
          )}
          {project.clientLink && (
            <a href={project.clientLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <ExternalLink size={16} /> Client
            </a>
          )}
          {project.serverLink && (
            <a href={project.serverLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition"
            >
              <ExternalLink size={16} /> Server
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
