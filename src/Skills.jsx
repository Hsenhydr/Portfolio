// Content mirrors public/Hussein_Haidar_CV.pdf (Technical Skills) in the CV's order;
// update the CV first, then this. `detail` holds what the CV puts in parentheses.
const SKILLS = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "C#", "Java", "Dart"] },
  {
    category: "Frontend",
    items: [
      { name: "Angular", detail: "Signals API, RxJS, standalone components" },
      "React.js",
      "Flutter",
      "HTML",
      "CSS",
      "Bootstrap",
      "PrimeNG",
      "Angular Material",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Flask",
      { name: "Symfony", detail: "PHP" },
      "Node.js",
      "Express.js",
      "Spring Boot",
      "ASP.NET Core",
      "REST APIs",
      "JWT",
      "SAML 2.0",
      "Doctrine ORM",
    ],
  },
  { category: "Databases", items: ["MySQL", "SQLAlchemy", "PostgreSQL", "SQL Server", "SQLite", "Firestore"] },
  { category: "Messaging & Tasks", items: ["Celery", "RabbitMQ", "n8n"] },
  {
    category: "Integrations",
    items: ["Twilio", "SendGrid", "Firebase", "Socket.io", { name: "pyvmomi", detail: "VMware" }, "gevent", "Jinja2"],
  },
  {
    category: "Security",
    items: ["TOTP/MFA", "AES‑256‑GCM", "Fernet encryption", "Microsoft EntraID SSO", "RBAC", "Device fingerprinting"],
  },
  {
    category: "Architecture",
    items: [
      "OOP",
      { name: "Domain-Driven Design", detail: "DDD" },
      "3-Tier Architecture",
      "MVVM",
      "Multi‑tenant SaaS",
      "Provider + Repository Pattern",
    ],
  },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "GitLab", "Docker", "CI/CD Pipelines", "Jest"] },
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
