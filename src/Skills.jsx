import React from "react";

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#", "Java", "Dart"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "React.js", "Flutter", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask", "Symfony (PHP)", "Node.js", "Express.js", "Spring Boot", "ASP.NET Core", "JWT"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "Firestore"],
  },
  {
    category: "Security",
    skills: ["TOTP / MFA", "AES-256-GCM", "SAML 2.0 SSO", "RBAC"],
  },
  {
    category: "Integrations",
    skills: ["Twilio", "SendGrid", "Firebase", "Socket.io", "Celery", "RabbitMQ", "pyvmomi (VMware)"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Jest", "CI/CD"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="eyebrow">{"// skills"}</p>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <div className="skill-card" key={cat.category}>
            <div className="skill-cat">{cat.category}</div>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
