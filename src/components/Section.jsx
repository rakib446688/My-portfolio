import React from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Section({ id, icon, title, subtitle, children }) {
  return (
    <section className="glass section" id={id}>
      <div className="sectionInner">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={fade}>
          <div className="iconBadge" aria-hidden="true">
            {icon}
          </div>
          <h2 className="hTitle">{title}</h2>
          <div className="underline" aria-hidden="true" />
          <p className="hSub">{subtitle}</p>
          <div style={{ marginTop: 26 }}>
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
