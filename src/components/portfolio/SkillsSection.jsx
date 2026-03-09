import { useState } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Programming Languages",
    color: "violet",
    items: ["Python", "Java", "C", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Web and Frontend",
    color: "cyan",
    items: ["React", "Responsive UI", "HTML/CSS", "Front-end Structuring", "Troubleshooting"],
  },
  {
    category: "Backend and APIs",
    color: "indigo",
    items: ["REST APIs", "JSON Handling", "HTTP Methods", "Backend Services", "Team Web Delivery"],
  },
  {
    category: "Data and Databases",
    color: "purple",
    items: ["Python (Pandas, NumPy)", "Matplotlib", "Seaborn", "SQL Server / SSMS", "Power BI", "Tableau"],
  },
  {
    category: "Tools and DevOps",
    color: "violet",
    items: ["Git and GitHub", "VS Code", "IntelliJ", "Trello", "Jira", "MS Teams", "MS 365"],
  },
  {
    category: "Design and Docs",
    color: "cyan",
    items: ["Figma", "Visily", "Draw.io", "Visual Paradigm"],
  },
  {
    category: "Systems and Other",
    color: "indigo",
    items: ["Raspberry Pi", "Agile / Scrum", "Client-led Iteration", "Google Colab"],
  },
  {
    category: "Soft Skills",
    color: "purple",
    items: ["Leadership", "Event Management", "Public Speaking", "Communication", "Problem Solving"],
  },
];

const colorMap = {
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-300", glow: "rgba(139,92,246,0.15)", stroke: "#7c3aed" },
  cyan:   { bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   text: "text-cyan-300",   glow: "rgba(6,182,212,0.15)",   stroke: "#0891b2" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-300", glow: "rgba(99,102,241,0.15)",  stroke: "#4f46e5" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-300", glow: "rgba(168,85,247,0.15)", stroke: "#7e22ce" },
};

function CornerSVG({ color, hovered }) {
  return (
    <svg className="absolute top-0 right-0 w-16 h-16 opacity-60" viewBox="0 0 64 64" fill="none">
      <motion.path
        d="M64 0 L64 64 L0 64"
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.circle
        cx="58" cy="6" r="3"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
    </svg>
  );
}

function SkillCard({ group, gi }) {
  const [hovered, setHovered] = useState(false);
  const c = colorMap[group.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: gi * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-5 overflow-hidden cursor-default"
      style={{
        boxShadow: hovered ? `0 0 30px ${c.glow}, 0 8px 32px rgba(0,0,0,0.4)` : "none",
        borderColor: hovered ? c.stroke + "55" : undefined,
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <CornerSVG color={c.stroke} hovered={hovered} />

      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `radial-gradient(ellipse at top right, ${c.glow} 0%, transparent 70%)` }}
      />

      <h3 className={`text-sm font-semibold tracking-wide mb-4 ${c.text}`}>{group.category}</h3>

      <div className="flex flex-wrap gap-2">
        {group.items.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 + si * 0.04 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
            className={`text-xs px-3 py-1.5 rounded-full ${c.bg} ${c.text} border ${c.border} cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl font-bold text-white">
            Skills and <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((group, gi) => (
            <SkillCard key={group.category} group={group} gi={gi} />
          ))}
        </div>
      </div>
    </section>
  );
}
