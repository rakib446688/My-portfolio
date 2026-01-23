import React from "react";

export default function ExperienceCard({ item }) {
  return (
    <div className="card">
      <div className="cardTitle">
        <span>{item.title}</span>
        <span className="small">{item.dates}</span>
      </div>
      {item.org ? <div className="small">{item.org}{item.where ? ` • ${item.where}` : ""}</div> : null}
      {item.bullets?.length ? (
        <ul className="list">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : null}
    </div>
  );
}
