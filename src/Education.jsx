import React from "react";

const EDUCATION = [
  {
    period: "2024 – 2025",
    degree: "MS in Business Computer Science",
    school: "Lebanese University — Faculty of Economics and Business Administration",
  },
  {
    period: "2021 – 2024",
    degree: "BS in Business Computer Science",
    school: "Lebanese University — Faculty of Economics and Business Administration",
    note: "Highest grade for a senior project in the faculty — 18/20",
  },
];

const CERTIFICATIONS = [
  {
    period: "Sep 2025",
    title: "Software Engineering Excellence Masterclass",
    issuer: "SE² Platform",
    note: "Clean Architecture, SOLID, TypeScript, Node.js, scalable backend design, testing, DevOps basics, enterprise code review.",
  },
];

function Education() {
  return (
    <section className="section" id="education">
      <p className="eyebrow">{"// education"}</p>
      <h2 className="section-title">Education &amp; Certifications</h2>
      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-card-head">Education</div>
          {EDUCATION.map((item) => (
            <div className="edu-item" key={item.degree}>
              <div className="compact-date">{item.period}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-school">{item.school}</div>
              {item.note && <div className="edu-note">{item.note}</div>}
            </div>
          ))}
        </div>
        <div className="edu-card">
          <div className="edu-card-head">Certifications</div>
          {CERTIFICATIONS.map((cert) => (
            <div className="edu-item" key={cert.title}>
              <div className="compact-date">{cert.period}</div>
              <div className="edu-degree">{cert.title}</div>
              <div className="edu-school">{cert.issuer}</div>
              {cert.note && <div className="edu-note">{cert.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
