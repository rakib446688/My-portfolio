import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
        <h2 className="text-4xl font-bold text-white mb-12">Who I Am</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative flex flex-col gap-4 items-center md:items-start">
            <div className="relative w-64 h-72 mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/30">
              <img
                src="/assets/1.jpeg"
                alt="Rakib Hasan - South Bank Students' Union"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-violet-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium text-white">
                  Final Year CS Student - LSBU
                </div>
              </div>
            </div>

            <div className="relative w-48 mx-auto md:mx-0 rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/assets/7.jpeg"
                alt="Rakib - LSBU Lead Course Rep"
                className="w-full h-40 object-cover object-top"
              />
              <div className="bg-white/5 backdrop-blur-sm px-3 py-2 border-t border-white/10">
                <p className="text-xs text-violet-400 font-semibold">Course Lead Rep</p>
                <p className="text-xs text-zinc-400">London South Bank University</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            A proactive final year BSc Computer Science student at London South Bank University, expected to graduate in June 2026. I have practical experience in Python programming, front-end development, and Object-Oriented Programming.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Skilled in Agile methodologies, DevOps principles, and cloud technologies, with strong collaboration and problem-solving abilities. Passionate about contributing to Information Technology and expanding expertise in wireless systems, Python automation, and cross-platform programming.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "London, UK" },
              { label: "Email", value: "rakibmrh44@gmail.com" },
              { label: "Phone", value: "+44 7909 605851" },
              { label: "Availability", value: "June 2026" },
            ].map(item => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
