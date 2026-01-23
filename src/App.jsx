import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { profile } from "./data/profile.js";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import SkillGrid from "./components/SkillGrid.jsx";
import BackToTop from "./components/BackToTop.jsx";
import {
  User,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Boxes,
  FileBadge,
  MessageSquareQuote,
  Mail
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function App() {
  const nav = useMemo(() => ([
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]), []);

  return (
    <>
      <div className="container">
        <Navbar items={nav} />
        <header className="glass hero" id="top">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="iconBadge" aria-hidden="true">
              <User size={26} />
            </div>
            <h1 className="heroTitle">
              <span>{profile.name}</span>
            </h1>
            <p className="heroSub">
              {profile.role} • {profile.tagline}
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <ShieldCheck size={18} /> LinkedIn
              </a>
              <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
                <Boxes size={18} /> GitHub
              </a>
              <a className="btn" href="#contact">
                <Mail size={18} /> Contact
              </a>
            </div>

            <div className="kpis">
              {profile.highlights.map((h) => (
                <div className="kpi" key={h.label}>
                  <div className="kpiLabel">{h.label}</div>
                  <div className="kpiValue">{h.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </header>

        <Section
          id="about"
          icon={<User size={26} />}
          title="About"
          subtitle="A quick overview of who I am and what I build."
        >
          <div className="grid2">
            <div className="card">
              {profile.about.map((p, idx) => (
                <p key={idx} className="hSub" style={{ textAlign: "left", marginTop: idx ? 14 : 0 }}>
                  {p}
                </p>
              ))}
              <div className="hr" />
              <div className="pills">
                <span className="tag">{profile.location}</span>
                <span className="tag">Open to placements & junior roles</span>
                <span className="tag">Available for interviews</span>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">
                <span>Quick details</span>
                <span className="small">London</span>
              </div>
              <ul className="list">
                <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
                <li>Focus: Full‑stack, data, and security‑minded systems</li>
                <li>Stack: React • Python • Java • SQL</li>
              </ul>
              <div className="hr" />
              <div className="small">
                Tip: replace the LinkedIn/GitHub URLs in <code>src/data/profile.js</code> with your real links.
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          icon={<Briefcase size={26} />}
          title="Experience"
          subtitle="Roles that prove I can work with humans and deadlines."
        >
          <div className="grid2" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {profile.experience.map((e) => (
              <ExperienceCard key={e.title + e.org} item={e} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          icon={<GraduationCap size={26} />}
          title="Education"
          subtitle="Core academic background and what I focused on."
        >
          <div className="grid2" style={{ gridTemplateColumns: "1fr" }}>
            {profile.education.map((e) => (
              <ExperienceCard key={e.title} item={e} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          icon={<Boxes size={26} />}
          title="Skills"
          subtitle="A focused set of tools I can actually use, not buzzword bingo."
        >
          <SkillGrid skills={profile.skills} />
        </Section>

        <Section
          id="certifications"
          icon={<FileBadge size={26} />}
          title="Certifications"
          subtitle="Training completed through my Lead Representative role."
        >
          <div className="grid2" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {profile.certifications.map((c) => (
              <div className="card" key={c.title}>
                <div className="cardTitle">
                  <span>{c.title}</span>
                  <span className="small">{c.date}</span>
                </div>
                <div className="small">{c.issuer}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          icon={<ShieldCheck size={26} />}
          title="Projects"
          subtitle="Selected work across full‑stack, databases, networking, and security."
        >
          <div className="grid2" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {profile.projects.map((p) => (
              <ProjectCard key={p.name} item={p} />
            ))}
          </div>
          <div className="small" style={{ marginTop: 14, textAlign: "center" }}>
            Replace empty repo/demo links in <code>src/data/profile.js</code> when you publish each project.
          </div>
        </Section>

        <Section
          id="testimonials"
          icon={<MessageSquareQuote size={26} />}
          title="Testimonials"
          subtitle="Short proof that I’m not a menace to work with."
        >
          <div className="grid2" style={{ gridTemplateColumns: "1fr" }}>
            {profile.testimonials.map((t) => (
              <div className="card" key={t.name}>
                <div className="cardTitle">
                  <span>{t.name}</span>
                  <span className="small">{t.role}</span>
                </div>
                <p className="hSub" style={{ textAlign: "left", marginTop: 12 }}>
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          icon={<Mail size={26} />}
          title="Contact"
          subtitle="Email is the fastest. LinkedIn is also fine."
        >
          <div className="grid2">
            <div className="card">
              <div className="cardTitle">
                <span>Send a message</span>
                <span className="small">No forms needed</span>
              </div>
              <p className="hSub" style={{ textAlign: "left", marginTop: 12 }}>
                If you’re hiring for a placement year or junior role, I’m happy to share more details, code samples, or coursework evidence.
              </p>
              <div className="btnRow" style={{ justifyContent: "flex-start" }}>
                <a className="btn btnPrimary" href={`mailto:${profile.email}?subject=Portfolio%20Enquiry`}>
                  <Mail size={18} /> Email me
                </a>
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <ShieldCheck size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">
                <span>Details</span>
                <span className="small">London, UK</span>
              </div>
              <ul className="list">
                <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
                <li>GitHub: <a href={profile.links.github} target="_blank" rel="noreferrer">{profile.links.github}</a></li>
                <li>LinkedIn: <a href={profile.links.linkedin} target="_blank" rel="noreferrer">{profile.links.linkedin}</a></li>
              </ul>
              <div className="hr" />
              <div className="small">
                Hosting: works on Vercel, Netlify, GitHub Pages, or any static host after <code>npm run build</code>.
              </div>
            </div>
          </div>
        </Section>

        <div className="footer">
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </div>
      </div>

      <BackToTop />
    </>
  );
}
