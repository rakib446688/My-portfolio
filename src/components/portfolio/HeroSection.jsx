import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown, FileText } from "lucide-react";

const CV_URL = "/assets/My%20CV.pdf";
const GITHUB_URL = "https://github.com/rakib446688";
const LINKEDIN_URL = "https://www.linkedin.com/in/md-rakib-hasan-481a7726a/";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/5.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1200 800" fill="none">
        <motion.path
          d="M0 400 Q200 200 400 300 T800 250 T1200 400"
          stroke="url(#heroLine1)" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />
        <motion.path
          d="M0 500 Q300 350 600 450 T1200 350"
          stroke="url(#heroLine2)" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
        />
        <motion.circle cx="400" cy="300" r="3" fill="#7c3aed"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="800" cy="250" r="3" fill="#06b6d4"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }} />
        <defs>
          <linearGradient id="heroLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLine2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-400 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          MD Rakib
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Hasan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-4"
        >
          BSc Computer Science Student and Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-zinc-500 text-sm mb-8"
        >
          <MapPin className="w-4 h-4" /> London, United Kingdom
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
        >
          <a href="mailto:rakibmrh44@gmail.com" className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 flex items-center gap-2">
            <Mail className="w-4 h-4" /> Get In Touch
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 hover:border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href={CV_URL} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 hover:border-violet-400/40 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" /> View CV
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="p-2 text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="p-2 text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:rakibmrh44@gmail.com" className="p-2 text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
