import React from "react";

export default function SkillGrid({ skills }) {
  const entries = Object.entries(skills || {});
  return (
    <div className="grid2" style={{ gridTemplateColumns: "1fr" }}>
      {entries.map(([group, items]) => (
        <div className="card" key={group}>
          <div className="cardTitle">
            <span>{group}</span>
            <span className="small">{items.length} items</span>
          </div>
          <div className="pills">
            {items.map((s) => <span className="tag" key={s}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}
