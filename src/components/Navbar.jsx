import React from "react";
import { useActiveSection } from "./useActiveSection.js";

export default function Navbar({ items }) {
  const active = useActiveSection(items.map(i => i.id));

  const onClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navWrap">
      <nav className="navBar" aria-label="Primary">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <button
              key={i.id}
              className={`pillBtn ${isActive ? "pillActive" : ""}`}
              onClick={() => onClick(i.id)}
              type="button"
            >
              {i.label}
              {isActive ? <span className="pillDot" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
