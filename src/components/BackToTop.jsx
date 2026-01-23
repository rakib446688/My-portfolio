import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="backTop"
      onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
      type="button"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22} />
    </button>
  );
}
