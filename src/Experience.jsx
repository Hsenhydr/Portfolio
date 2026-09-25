// Content mirrors public/Hussein_Haidar_CV.pdf; update the CV first, then this.
const CURRENT_ROLE = {
  role: "Software Engineer",
  company: "AllegianceTek",
  period: "Oct 2025 - Present",
  intro:
    "I own features end to end, from database schema and API design to the UI, on platforms for housing management, postal automation, cloud infrastructure and shareholder services.",
  platforms: [
    {
      name: "Multi-tenant survey platform",
      what: "XML/CSV export adapters for 6 French housing organizations, plus a real-time communications dashboard with SMS/email flows.",
      metric: "88,967 tenants, 152 agencies",
    },
    {
      name: "Postal automation SaaS",
      what: "Microsoft EntraID SSO via SAML 2.0 with DB-driven multi-tenant config and cross-tenant isolation.",
      metric: "SSO and encrypted MFA",
    },
    {
      name: "Document ingestion pipeline",
      what: "End-to-end ingestion and routing, with parsers across 4 document types.",
      metric: "102,274 files, 288,456+ records",
    },
    {
      name: "Cloud infrastructure SaaS",
      what: "Built from the ground up: DB/API to Angular 19 frontend, VMware VM management via pyvmomi, layered auth.",
      metric: "JWT, TOTP MFA, device fingerprinting",
    },
    {
      name: "Shareholder self-service portal",
      what: "For a major asset manager: per-shareholder JWT auth, per-fund campaign gating, batch import with 8+ validators.",
      metric: "128,779 shareholders, 16 funds",
    },
  ],
  decisions: [
    {
      title: "Encrypting MFA secrets without downtime",
      body: "I encrypted MFA secrets at rest with AES‑256‑GCM and gave each one a version prefix (enc:v1:). Old and new secrets could coexist, so I shipped the change with no maintenance window.",
    },
    {
      title: "Never processing a half-copied file",
      body: "I made the pipeline wait until each file finishes writing and verify its SHA256 hash before routing it. Failed files wait in a retry archive for another attempt.",
    },
  ],
  stack: "Python, Flask, SQLAlchemy, PHP/Symfony, Angular, TypeScript",
};

const PAST_ROLES = [
  {
    role: "Full Stack Developer",
    company: "Apliman, internship",
    period: "Mar 2025 - May 2025",
    desc: "Internal tools and dashboards in a modular enterprise system, applying MVVM, Provider and Repository patterns with RESTful APIs.",
    stack: "Flutter, Spring Boot",
  },
  {
    role: "Freelance Web Developer",
    company: null,
    period: "Nov 2024 - Present",
    desc: "3+ custom websites and web applications delivered end to end: UI design, backend logic, database design and admin dashboards.",
    stack: "C# ASP.NET, SQL Server, JavaScript",
  },
  {
    role: "Web Developer",
    company: "ISS / Software Hive, internship",
    period: "Aug 2024 - Oct 2024",
    desc: "React.js app with SharePoint Online integration via REST (CRUD across Lists, Libraries and Pages), connected to Azure AD for token retrieval and permission-based access.",
    stack: "React.js, REST APIs, Azure AD",
  },
];

function Experience() {
  const r = CURRENT_ROLE;
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <h2 className="section-title" id="experience-title">
        Experience
      </h2>

      <article className="xp-panel">
        <header className="xp-head">
          <h3 className="xp-role">
            {r.role} <span className="xp-company">{r.company}</span>
          </h3>
          <span className="xp-date">{r.period}</span>
        </header>
        <p className="xp-intro">{r.intro}</p>
        {/* Same order as the past roles below: title, description, stack. */}
        <p className="xp-stack xp-stack-lead">{r.stack}</p>

        <dl className="xp-platforms">
          {r.platforms.map((p) => (
            <div key={p.name}>
              <dt>{p.name}</dt>
              <dd>{p.what}</dd>
              <dd className="xp-metric">{p.metric}</dd>
            </div>
          ))}
        </dl>

        <div className="xp-decisions">
          <h4>Engineering decisions</h4>
          <div className="xp-decision-list">
            {r.decisions.map((d) => (
              <div key={d.title}>
                <h5>{d.title}</h5>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <ol className="xp-timeline">
        {PAST_ROLES.map((role) => (
          <li className="xp-item" key={role.role + role.period}>
            <span className="xp-date">{role.period}</span>
            <div>
              <h3>{role.role}</h3>
              {role.company && <p className="xp-item-company">{role.company}</p>}
              <p className="xp-item-desc">{role.desc}</p>
              <p className="xp-stack">{role.stack}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
