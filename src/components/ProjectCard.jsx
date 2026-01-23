import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ item }) {
  const hasRepo = Boolean(item.links?.repo);
  const hasDemo = Boolean(item.links?.demo);

  return (
    <article className="card">
      <div className="cardTitle">
        <span>{item.name}</span>
        <span className="small">{item.status}</span>
      </div>

      <div className="pills">
        {item.stack?.map((s) => <span className="tag" key={s}>{s}</span>)}
      </div>

      {item.bullets?.length ? (
        <ul className="list">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : null}

      {(hasRepo || hasDemo) ? (
        <div className="btnRow" style={{ justifyContent: "flex-start" }}>
          {hasRepo ? (
            <a className="btn" href={item.links.repo} target="_blank" rel="noreferrer">
              <Github size={18} /> Repo
            </a>
          ) : null}
          {hasDemo ? (
            <a className="btn btnPrimary" href={item.links.demo} target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> Live
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
