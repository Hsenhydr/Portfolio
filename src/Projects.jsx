import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Scalable E-Commerce Backend System",
    description:
      "Production-ready backend with a 3-tier layered architecture following Domain-Driven Design, strict separation of concerns, full unit/integration test coverage and CI/CD.",
    tech: ["TypeScript", "PostgreSQL", "SQLite", "Jest", "CI/CD"],
    github: "https://github.com/Software-Eng-Excellence/HusseinHaidar-cohort-3",
    featured: true,
  },
  {
    id: 2,
    title: "Secured Role-Based E-Commerce App",
    description:
      "Flutter + Spring Boot e-commerce system with JWT authentication, role-based access control, and atomic stock decrement on order placement.",
    tech: ["Flutter", "Dart", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/Hsenhydr/Mini-Ecommerce-Challenge",
  },
  {
    id: 3,
    title: "Tabaraa — Blood Donation Platform",
    description: "A donation platform connecting blood donors with those in need, built with React and Firebase for real-time data.",
    tech: ["React.js", "Firebase", "HTML", "CSS"],
    image: "/tabaraa.png",
    live: "https://blood-donation-633ea.web.app/",
  },
  {
    id: 4,
    title: "Online Examination System",
    description:
      "Full-stack exam platform: web interface for instructors/admins and a Flutter mobile app for students, with role-based access and major-scoped exam visibility.",
    tech: ["Node.js", "Express.js", "Flutter", "MySQL"],
    github: "https://github.com/Hsenhydr/OnlineExaminationSystem",
  },
  {
    id: 5,
    title: "Media Agency Website — Senior Project (18/20)",
    description:
      "Full-stack company website with user subscriptions, transaction tracking, and an admin panel — highest senior project grade in the faculty.",
    tech: ["C#", "ASP.NET Core Razor Pages", "SQL Server", "Bootstrap"],
    github: "https://github.com/Hsenhydr/Senior-Project",
  },
];

function ProjectMedia({ project }) {
  if (!project.image) return null;
  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      style={{
        width: "100%",
        aspectRatio: "16 / 10",
        objectFit: "cover",
        objectPosition: "top",
        borderRadius: "8px",
        border: "1px solid var(--bordercolor)",
        marginBottom: "16px",
        display: "block",
      }}
    />
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">{"// projects"}</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className={`project-card${project.featured ? " featured" : ""}`} key={project.id}>
            <ProjectMedia project={project} />
            {project.featured && <div className="project-featured-tag">Featured</div>}
            <div className="project-title">{project.title}</div>
            <p className="project-desc">{project.description}</p>
            <div className="tag-row">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
