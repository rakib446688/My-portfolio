import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Lead Representative - School of Computer Science and Digital Technologies",
    company: "South Bank Students' Union",
    period: "Sep 2025 - Present",
    bullets: [
      "Raised over 40 student issues and escalated to the Faculty Board; 31 already resolved (over 70%) covering assessment, learning resources, academic support, international student opportunities and student wellbeing.",
      "Conducted approximately 3,000 phonebank calls to apprenticeship students and course representatives, checking progress and signposting to the right support.",
      "10 courses fully covered with CRs after coordinating directly with module and course leaders to close gaps in representation. Used MS Word for email templates and MS Excel to track module leader responsiveness.",
      "37+ cross-university meetings attended, working with 6+ departments to turn student feedback into actions.",
      "Helped the SU president expand the LSBU prayer room by collecting surveys and attending meetings. Used MS 365 and Google Forms.",
      "Worked with LSBU Careers Hub to strengthen international opportunity pathways. Used Power BI to showcase data on companies actively recruiting international students.",
      "Increased awareness of on-campus part-time roles, summer jobs and ambassador positions for international students.",
      "Helped launch LSBU's first two new student communities: Nepali Community (cultural) and LSBU Zero Day (academic).",
    ],
  },
  {
    role: "Operations Supervisor, Guest Ambassador (On-call)",
    company: "Mercato Metropolitano (MM)",
    period: "Jun 2025 - Present",
    bullets: [
      "Started as a team member then promoted to operational supervisor after 5 months. Supported venue operations across multiple food traders and kitchens, helping the duty manager deliver smooth service from opening through close.",
      "Assisted with rota planning, on-shift leadership and staff support, stepping in during peak periods to keep service running efficiently and calmly.",
      "Managed guest experiences when acting as ambassador: welcomed guests, handled advance table bookings, allocated seating and resolved service issues professionally.",
      "Completed operational compliance tasks including fire alarm testing, ensuring checks were documented and escalated when required.",
      "Maintained high venue standards by inspecting trader areas and shared spaces, ensuring cleanliness and readiness.",
      "Produced operational updates and reports (trader checks, issues, follow-ups) and supported stock checks and stock control to keep supplies organized and available.",
    ],
  },
  {
    role: "Brand Ambassador",
    company: "London South Bank University",
    period: "Dec 2024 - Dec 2025",
    bullets: [
      "Started as a content creating ambassador, producing 'Day in the Life at LSBU' style content to showcase the student experience.",
      "Created content for 4 LSBU Open Days, helping plan what to film, directing parts of the shoot and making sure videos covered key details viewers look for on social media.",
      "Interviewed and spoke with students, professors and visiting companies, asking structured questions to capture useful, engaging clips for LSBU channels.",
      "Featured as the main student voice in the LSBU Computer Science Hero campaign, explaining what is taught on the course and highlighting placement and graduate opportunities.",
      "Acted in multiple Hero advertisements, representing LSBU across social platforms, YouTube and LSBU web channels.",
    ],
  },
  {
    role: "Student Ambassador",
    company: "London South Bank University",
    period: "Dec 2023 - Dec 2024",
    bullets: [
      "Recruited through a written test and a viva-style interview, then began supporting student-facing services and large university events.",
      "Worked at the Help Desk answering student queries and signposted to the right department when needed. Also worked as an outreach ambassador when required.",
      "Supported careers fairs by communicating directly with employers, guiding them on arrival, helping with stall set-up and ensuring stalls were closed down properly.",
      "After six months, promoted to coordinator role and led around 13 fairs, typically managing 15-20 companies per event.",
      "Worked as a campus ambassador, giving LSBU campus tours to PhD applicants, new students and prospective applicants, adapting the tour and information to different audiences.",
    ],
  },
  {
    role: "Computer Science and Informatics Ambassador",
    company: "London South Bank University",
    period: "Oct 2023 - Sep 2025",
    bullets: [
      "Worked as a CSI ambassador under the supervision of Deputy Head Dr. Safia within LSBU's Computer Science department.",
      "Completed LEGO Robotics training to support school-visit sessions with children from different schools.",
      "Completed machine learning training and developed Python skills through practical, fun learning activities.",
      "Supported LSBU Computer Science tech careers fairs, helping employers on-site and guiding students to the right information.",
      "Attended 22+ tech fair events and led 7 of them, helping delivery run smoothly and on time.",
      "Led 9+ LEGO SPIKE Prime sessions, teaching children coding basics in a clear and engaging way.",
    ],
  },
  {
    role: "Enrolment Officer (Temporary Contract)",
    company: "London South Bank University",
    period: "May 2024 - Aug 2024",
    bullets: [
      "Performed Confirmation of Acceptance for Studies (CAS) checks by reviewing around 300 student documents and calculating whether they met the required conditions before making a decision.",
      "Calculated and verified academic marks against course entry requirements and recorded results for audit and follow-up.",
      "Communicated with relevant university teams (admissions, courses, international services) to obtain confirmations and keep cases moving within tight deadlines.",
      "Responded to around 200 phone calls with enrolment queries, emailed when needed and signposted students to the correct department.",
    ],
  },
];

function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(false);
  const preview = item.bullets.slice(0, 3);
  const rest = item.bullets.slice(3);

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20 z-10" />
      <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-white/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07 }}
        whileHover={{ boxShadow: "0 0 30px rgba(139,92,246,0.15), 0 8px 32px rgba(0,0,0,0.4)" }}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/40 transition-colors relative overflow-hidden"
      >
        <svg className="absolute top-0 left-0 w-full h-1 pointer-events-none" viewBox="0 0 300 2">
          <motion.line x1="0" y1="1" x2="300" y2="1" stroke="url(#expGrad)" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
          <defs>
            <linearGradient id="expGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="flex items-start justify-between gap-4 mb-1 mt-2">
          <div>
            <h3 className="text-white font-semibold text-base leading-snug">{item.role}</h3>
            <p className="text-violet-400 text-sm mt-0.5 font-medium">{item.company}</p>
          </div>
          <span className="text-xs text-zinc-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded-full flex-shrink-0">{item.period}</span>
        </div>

        <ul className="mt-3 space-y-2">
          {preview.map((b, i) => (
            <li key={i} className="text-zinc-400 text-sm flex gap-2 leading-relaxed">
              <span className="text-violet-400 mt-0.5 flex-shrink-0">&gt;</span> {b}
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {open && rest.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-2 space-y-2"
            >
              {rest.map((b, i) => (
                <li key={i} className="text-zinc-400 text-sm flex gap-2 leading-relaxed">
                  <span className="text-violet-400 mt-0.5 flex-shrink-0">&gt;</span> {b}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {rest.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
          >
            {open ? (
              <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
            ) : (
              <><ChevronDown className="w-3.5 h-3.5" /> Show {rest.length} more point{rest.length > 1 ? "s" : ""}</>
            )}
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-4xl font-bold text-white flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-violet-400" /> Work Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {EXPERIENCES.map((item, i) => (
            <ExperienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
