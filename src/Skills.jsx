// Mirrors the Technical Skills section of public/Hussein_Haidar_CV.pdf; update the CV first, then this.
// Order follows the main stack (Angular + Flask, then PHP/Symfony) and what a reviewer checks first.
// `detail` holds what the CV puts in parentheses.
const SKILLS = [
  { category: "Languages", items: ["Python", "TypeScript", "PHP", "JavaScript", "Java", "C#", "Dart"] },
  {
    category: "Backend & APIs",
    items: ["Flask", "Symfony", { name: "Node.js", detail: "Express.js" }, "Spring Boot", "ASP.NET Core", "REST APIs"],
  },
  {
    category: "Frontend",
    items: [
      { name: "Angular", detail: "Signals API, RxJS, standalone components" },
      "React.js",
      { name: "Flutter", detail: "Provider" },
      "Angular Material",
      "PrimeNG",
      "HTML/CSS",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "SQLAlchemy", "Doctrine ORM"],
  },
  {
    category: "Security",
    items: [
      // Long items first so the short ones pair up on the last line when the row wraps on phones.
      { name: "Microsoft EntraID SSO", detail: "SAML 2.0" },
      { name: "Encryption", detail: "AES‑256‑GCM, Fernet" },
      "Device fingerprinting",
      "TOTP MFA",
      "JWT",
      "RBAC",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Multi‑tenant SaaS",
      { name: "Domain-Driven Design", detail: "DDD" },
      "3-Tier Architecture",
      "MVVM",
      "Repository Pattern",
    ],
  },
  { category: "Messaging & Tasks", items: ["Celery", "RabbitMQ", "n8n"] },
  {
    category: "Integrations",
    items: ["Twilio", "SendGrid", { name: "Firebase", detail: "Firestore" }, "Socket.io", { name: "pyvmomi", detail: "VMware" }],
  },
  {
    category: "Tools & DevOps",
    items: [{ name: "Git", detail: "GitHub, GitLab" }, "Docker", "CI/CD pipelines", "Jest"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">
        Skills
      </h2>
      <dl className="skills-table">
        {SKILLS.map((row) => (
          <div key={row.category}>
            <dt>{row.category}</dt>
            <dd>
              <ul>
                {row.items.map((item) => {
                  const { name, detail } = typeof item === "string" ? { name: item } : item;
                  return (
                    <li key={name}>
                      {name}
                      {detail && <small>{detail}</small>}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Skills;
