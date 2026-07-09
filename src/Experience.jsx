import React, { useState } from "react";

const EXPERIENCE_DATA = [
  {
    role: "Software Engineer",
    company: "AllegianceTek",
    period: "Oct 2025 – Present",
    intro:
      "Full-stack engineer across 5 production platforms for regulated French public-sector and financial-sector clients — spanning housing management, postal automation, cloud infrastructure, and shareholder services.",
    platforms: [
      {
        name: "Cortex-OPS — Survey platform",
        stat: "88,967 tenants · 152 agencies",
        bullet: "XML/CSV export adapters for 6 French housing orgs, org-specific field mapping.",
      },
      {
        name: "Axessy — Postal B2B SaaS",
        stat: "SAML 2.0 · AES-256-GCM",
        bullet: "EntraID SSO with per-tenant config; encrypted TOTP secrets, zero-downtime MFA rollout.",
      },
      {
        name: "Cortex-CIPflow — Doc automation",
        stat: "102,274 files processed",
        bullet: "End-to-end ingestion pipeline with SHA256 verification and retry archival.",
      },
      {
        name: "Atek Cloud Manager — VMware SaaS",
        stat: "Built from the ground up",
        bullet: "Multi-tenant VM management via pyvmomi; layered JWT + TOTP + device fingerprinting.",
      },
      {
        name: "Cortex Amundi — Shareholder portal",
        stat: "128,779 shareholders · 16 funds",
        bullet: "Per-shareholder JWT short URLs; batch import with 8+ validators.",
      },
    ],
    tech: ["Python", "Flask", "PHP/Symfony", "Angular", "JWT", "SAML 2.0"],
  },
  {
    role: "Full Stack Developer",
    company: "Apliman — Internship",
    period: "Mar 2025 – May 2025",
    desc: "Internal tools and dashboards in a modular enterprise system using Flutter and Spring Boot, applying MVVM and Repository patterns.",
    tech: ["Flutter", "Spring Boot", "MySQL"],
  },
  {
    role: "Freelance Web Developer",
    company: null,
    period: "Nov 2024 – Present",
    desc: "3+ custom websites and web applications end-to-end — UI, backend logic, database design, admin dashboards.",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
  },
  {
    role: "Web Developer",
    company: "ISS / Software Hive — Internship",
    period: "Aug 2024 – Oct 2024",
    desc: "React.js web application with SharePoint Online integration via REST APIs — CRUD across Lists, Libraries, and Pages, plus Azure AD security token retrieval.",
    tech: ["React", "SharePoint", "Azure AD"],
  },
];

function highlightJsonTokens(jsonString) {
  const regex =
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(jsonString)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<React.Fragment key={key++}>{jsonString.slice(lastIndex, match.index)}</React.Fragment>);
    }
    const token = match[0];
    let cls = "tok-type";
    if (/^"/.test(token)) {
      cls = /:$/.test(token) ? "tok-kw" : "tok-str";
    }
    parts.push(
      <span key={key++} className={cls}>
        {token}
      </span>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < jsonString.length) {
    parts.push(<React.Fragment key={key++}>{jsonString.slice(lastIndex)}</React.Fragment>);
  }
  return parts;
}

function Experience() {
  const [showJson, setShowJson] = useState(false);
  const [flagship, ...otherRoles] = EXPERIENCE_DATA;

  return (
    <section className="section" id="experience">
      <div className="section-head-row">
        <div>
          <p className="eyebrow">{"// experience"}</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <button
          type="button"
          className="json-toggle"
          aria-pressed={showJson}
          onClick={() => setShowJson((prev) => !prev)}
        >
          {showJson ? "‹ View as cards" : "{ } View as JSON"}
        </button>
      </div>

      {!showJson ? (
        <div>
          <div className="flagship-card" data-reveal>
            <div className="flagship-head">
              <div>
                <div className="flagship-role">{flagship.role}</div>
                <div className="flagship-company">{flagship.company}</div>
              </div>
              <div className="flagship-date">{flagship.period}</div>
            </div>
            <p className="flagship-intro">{flagship.intro}</p>

            <div className="platform-grid" data-reveal-group>
              {flagship.platforms.map((platform) => (
                <div className="platform-card" data-reveal key={platform.name}>
                  <div className="platform-name">{platform.name}</div>
                  <div className="platform-stat">{platform.stat}</div>
                  <p className="platform-bullet">{platform.bullet}</p>
                </div>
              ))}
            </div>

            <div className="tag-row">
              {flagship.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {otherRoles.map((role) => (
            <div className="compact-role" data-reveal key={role.role + role.period}>
              <div className="compact-date">{role.period}</div>
              <div>
                <div className="compact-title">{role.role}</div>
                {role.company && <div className="compact-company">{role.company}</div>}
                <p className="compact-desc">{role.desc}</p>
                <div className="tag-row" style={{ marginTop: 0 }}>
                  {role.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <pre className="code-block experience-json">
          <code>{highlightJsonTokens(JSON.stringify(EXPERIENCE_DATA, null, 2))}</code>
        </pre>
      )}
    </section>
  );
}

export default Experience;
