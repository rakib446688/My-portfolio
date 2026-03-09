import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "London South Bank University, London, UK",
    period: "Sep 2023 - Present (Expected June 2026)",
    grade: "Final Year",
    modules: [
      "Fundamentals of Computer Science",
      "Fundamentals of Software Development",
      "Discrete Mathematics",
      "Software Development",
      "Requirements Analysis",
      "Professional Practice",
      "Operating System",
      "Object Oriented Programming",
    ],
    projects: [
      "Data analysis using Python (Discrete Math final coursework)",
      "Inventory management system using Python, reducing manual tracking errors by 30%",
      "Basic anonymous feedback system for classes (Professional Practice group project)",
      "Basic use of Raspberry Pi - made honeypot software",
      "Personal projects: Basic calculator and Tic Tac Toe game using Python",
    ],
  },
  {
    degree: "A level",
    institution: "Dhaka City College, Dhaka, Bangladesh",
    period: "May 2019 - Dec 2021",
    grade: "GPA: 4.00 / 4.00",
    modules: [],
    projects: [
      "A* in Information and Communication Technology, Mathematics, Physics, Chemistry, Biology",
    ],
  },
];

const certifications = [
  { name: "SIA Door Supervisor Licence (Front Line)", issuer: "Security Industry Authority", year: "Active" },
  { name: "SIA CCTV (Public Space Surveillance) Licence", issuer: "Security Industry Authority", year: "Active" },
  { name: "Enhanced DBS Certificate", issuer: "Disclosure and Barring Service", year: "Active" },
];

const additionalTraining = [
  {
    name: "Data Science and AI Bootcamp",
    org: "Led by Dr. Ali Salimian, LSBU",
    points: [
      "Gained proficiency in Python fundamentals including data structures, functions, and custom function creation.",
      "Used Python libraries for data handling and visualization: Pandas, Matplotlib, and Seaborn.",
      "Developed skills in implementing machine learning models (classification and regression) using Scikit-learn.",
      "Explored time series data handling techniques and used Google Colab.",
    ],
  },
  {
    name: "Python Bootcamp",
    org: "London South Bank University",
    points: [
      "Developed expertise in Python programming including version control and collaboration using Git and GitHub.",
      "Designed and implemented a dynamic weather application leveraging APIs to fetch, process, and display real-time weather data.",
      "Strengthened problem-solving and debugging skills while adhering to industry-standard coding practices.",
    ],
  },
  {
    name: "LEGO Robotics Training",
    org: "London South Bank University",
    points: [
      "Gained hands-on experience programming LEGO robots using Scratch, focusing on motion, sensor integration, and automation.",
      "Learned to program sensors and motors for obstacle avoidance, line following, and interactive movement.",
      "Collaborated in a team environment to complete robotics projects, fostering teamwork and communication skills.",
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="text-4xl font-bold text-white flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-violet-400" /> Education and Training
          </h2>
        </motion.div>

        <div className="space-y-6 mb-14">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                <div>
                  <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-violet-400 font-medium mt-1">{edu.institution}</p>
                  <p className="text-zinc-500 text-sm mt-0.5">{edu.period}</p>
                </div>
                <span className="text-xs bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full flex-shrink-0">{edu.grade}</span>
              </div>

              {edu.modules.length > 0 && (
                <div className="mt-4">
                  <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">Key Modules</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.modules.map((m, j) => (
                      <span key={j} className="text-xs bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
              )}

              {edu.projects.length > 0 && (
                <div className="mt-4">
                  <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">Key Projects and Achievements</p>
                  <ul className="space-y-1.5">
                    {edu.projects.map((p, j) => (
                      <li key={j} className="text-zinc-400 text-sm flex gap-2 leading-relaxed">
                        <span className="text-violet-400 mt-0.5 flex-shrink-0">&gt;</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-zinc-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-cyan-400" /> Certifications and Licences
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-white font-medium text-sm">{cert.name}</h4>
                <p className="text-zinc-500 text-xs mt-1">{cert.issuer}</p>
                <span className="mt-3 inline-block text-xs bg-green-500/20 text-green-300 px-2.5 py-0.5 rounded-full">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-zinc-300 text-sm font-semibold uppercase tracking-wider flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-violet-400" /> Additional Training
          </h3>
          <div className="space-y-4">
            {additionalTraining.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-violet-400 text-sm mt-0.5">{t.org}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {t.points.map((p, j) => (
                    <li key={j} className="text-zinc-400 text-sm flex gap-2 leading-relaxed">
                      <span className="text-violet-400 mt-0.5 flex-shrink-0">&gt;</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h4 className="text-white font-semibold mb-5">Languages</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { lang: "English", level: "Professional" },
              { lang: "Bengali", level: "Native" },
              { lang: "Hindi", level: "Conversational" },
              { lang: "Urdu", level: "Conversational" },
            ].map(l => (
              <div key={l.lang} className="bg-white/5 rounded-xl p-3 text-center">
                <p className="text-white text-sm font-medium">{l.lang}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
