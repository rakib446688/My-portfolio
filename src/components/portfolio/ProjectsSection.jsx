import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";

function AnimatedBorder({ hovered }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.rect
        x="0.5" y="0.5" width="99" height="99" rx="14"
        fill="none"
        stroke="url(#projectGrad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="projectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
      style={{
        boxShadow: hovered ? "0 20px 60px rgba(124,58,237,0.2), 0 8px 32px rgba(0,0,0,0.5)" : "none",
        transition: "box-shadow 0.4s",
      }}
    >
      <AnimatedBorder hovered={hovered} />

      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-violet-900/50 to-cyan-900/30">
        {project.image_url ? (
          <motion.img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1, opacity: hovered ? 0.15 : 0.05 }}
              transition={{ duration: 0.4 }}
              className="text-8xl font-black text-white select-none"
            >
              {project.title?.charAt(0)}
            </motion.div>
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"
          animate={{ opacity: hovered ? 0.7 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-white font-semibold text-lg mb-2"
          animate={{ color: hovered ? "#a78bfa" : "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tech_stack || []).map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 + ti * 0.04 }}
              className="text-xs px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.live_url && (
            <motion.a
              href={project.live_url} target="_blank" rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </motion.a>
          )}
          {project.github_url && (
            <motion.a
              href={project.github_url} target="_blank" rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-medium"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ projects, isLoading }) {
  if (isLoading) {
    return (
      <section id="projects" className="py-24 px-6 flex justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-violet-400" />
      </section>
    );
  }

  const display = projects.length > 0 ? projects : SAMPLE_PROJECTS;

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((project, i) => (
            <ProjectCard key={project.id || i} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SAMPLE_PROJECTS = [
  {
    title: "Legalizer (LawTech)",
    description: "AI-powered compliance health-check portal for UK charities and churches. Backend developer. Agile sprint delivery with client reviews.",
    tech_stack: ["Python", "REST APIs", "JSON", "Agile", "Backend"],
    live_url: null,
    github_url: "https://github.com/shvkhzod/legalizer-backend",
  },
  {
    title: "Battleship: Java OOP Game",
    description: "Battleship game in Java with strong OOP structure, multiple AI strategies, CLI and GUI, custom exception handling and board placement logic.",
    tech_stack: ["Java", "OOP", "IntelliJ", "AI Strategies", "CLI/GUI"],
    live_url: null,
    github_url: "https://github.com/rakib446688",
  },
  {
    title: "Recipe Sharing and Meal Planner",
    description: "Web platform for recipe sharing, weekly meal planning and automated shopping list generation. Frontend contributor in Agile and Scrum team.",
    tech_stack: ["HTML/CSS", "Agile/Scrum", "Trello", "Figma", "Git"],
    live_url: null,
    github_url: "https://github.com/rakib446688",
  },
];
