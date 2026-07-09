import React from "react";

const STATS = [
  { number: "5", label: "Production platforms shipped" },
  { number: "217K+", label: "End users served across platforms" },
  { number: "102K+", label: "Documents processed in production" },
  { number: "6", label: "French public-sector orgs integrated" },
];

function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Impact highlights">
      <div className="stats-inner" data-reveal-group>
        {STATS.map((stat) => (
          <div className="stat-item" data-reveal key={stat.label}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
