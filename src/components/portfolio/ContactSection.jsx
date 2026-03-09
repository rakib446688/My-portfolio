import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone, FileText } from "lucide-react";

const CV_URL = "/assets/My%20CV.pdf";
const GITHUB_URL = "https://github.com/rakib446688";
const LINKEDIN_URL = "https://www.linkedin.com/in/md-rakib-hasan-481a7726a/";
const EMAIL_TO = "rakibmrh44@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Email service is not configured. Please try again later.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: EMAIL_TO,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
    } catch (err) {
      setError("Message failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="text-4xl font-bold text-white">Get In <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Touch</span></h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">Have a project in mind or just want to chat? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: EMAIL_TO, href: `mailto:${EMAIL_TO}` },
              { icon: Phone, label: "Phone", value: "+44 7909 605851", href: "tel:+447909605851" },
              { icon: MapPin, label: "Location", value: "London, United Kingdom", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="text-zinc-200 text-sm mt-0.5 hover:text-violet-400 transition-colors">{value}</a>
                  ) : (
                    <p className="text-zinc-200 text-sm mt-0.5">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all text-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all text-sm">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={CV_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-all text-sm">
                <FileText className="w-4 h-4" /> CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                <p className="text-zinc-400 text-sm">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Your Email", type: "email" },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={form[f.name]}
                    onChange={(e) => setForm(prev => ({ ...prev, [f.name]: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                ))}
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                />
                {error ? (
                  <p className="text-xs text-red-400">{error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
