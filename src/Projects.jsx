// First 4 mirror public/Hussein_Haidar_CV.pdf (Key Projects); Tabaraa is site-only by choice.
// Each card's `context` names the one skill it proves, so the two e-commerce builds read as
// different evidence (architecture vs. mobile security), and the order keeps them apart.
const PROJECTS = [
  {
    title: "Scalable E‑Commerce Backend System",
    context: "Backend architecture, DDD",
    points: [
      "Production-ready backend with a 3-tier layered architecture following Domain-Driven Design (DDD), with strict separation of concerns.",
      "Reliability through comprehensive unit and integration tests, with CI/CD pipelines for automated builds and deployments.",
    ],
    stack: "TypeScript, PostgreSQL, SQLite, Jest, CI/CD",
    href: "https://github.com/Software-Eng-Excellence/HusseinHaidar-cohort-3",
    cta: "View on GitHub",
    featured: true,
  },
  {
    title: "Online Examination System",
    context: "Freelance, web and mobile",
    points: [
      "Full-stack exam platform: web interface for instructors and admins, and a Flutter mobile app for students, with role-based access and major-scoped exam visibility.",
    ],
    stack: "Node.js, Flutter, MySQL, Express.js",
    href: "https://github.com/Hsenhydr/OnlineExaminationSystem",
    cta: "View on GitHub",
  },
  {
    title: "Tabaraa, Blood Donation Platform",
    context: "Live product",
    points: ["Connects blood donors with people in need, with real-time data through Firebase."],
    stack: "React.js, Firebase, HTML, CSS",
    href: "https://blood-donation-633ea.web.app/",
    cta: "Open live site",
  },
  {
    title: "Secured Role-Based Full-Stack E‑Commerce Mobile App",
    context: "Mobile, JWT and RBAC",
    points: [
      "Customer and admin flows with JWT authentication, role-based access control and atomic stock decrement on order placement.",
      "Mobile-first Flutter frontend with Material 3, skeleton loaders, Provider state management and unit/widget tests.",
    ],
    stack: "Flutter, Dart, Spring Boot, PostgreSQL, JWT, Material 3",
    href: "https://github.com/Hsenhydr/Mini-Ecommerce-Challenge",
    cta: "View on GitHub",
  },
  {
    title: "Media Agency Website",
    context: "Senior project",
    points: ["Full-stack company website with user subscriptions, transaction tracking and an admin panel."],
    stack: "C#, ASP.NET Core Razor Pages, SQL Server, Bootstrap",
    href: "https://github.com/Hsenhydr/Senior-Project",
    cta: "View on GitHub",
  },
];

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 className="section-title" id="projects-title">
        Projects
      </h2>
      <ul className="projects-grid">
        {PROJECTS.map((p) => (
          <li className={`project-card${p.featured ? " featured" : ""}`} key={p.title}>
            <div className="project-main">
              <h3 className="project-title">
                {/* Stretched link: the ::after covers the card, so the whole card is clickable
                    while the link's accessible name stays just the title. */}
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="project-link">
                  {p.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              {p.context && <p className="project-context">{p.context}</p>}
              <div className="project-desc">
                {p.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
            <div className="project-meta">
              {/* Featured card has room for a spec-style column: one technology per line. */}
              {p.featured ? (
                <>
                  <p className="project-meta-label">Stack</p>
                  <ul className="project-stack-list">
                    {p.stack.split(", ").map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="project-stack">{p.stack}</p>
              )}
              <span className="project-cta" aria-hidden="true">
                {p.cta} ↗
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
