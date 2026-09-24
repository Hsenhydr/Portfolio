// Content mirrors public/Hussein_Haidar_CV.pdf; update the CV first, then this.
const SCHOOL = "Lebanese University, Faculty of Economics and Business Administration";

const GROUPS = [
  {
    heading: "Degrees",
    items: [
      { title: "MS in Business Computer Science", period: "2024 - 2025", detail: SCHOOL },
      {
        title: "BS in Business Computer Science",
        period: "2021 - 2024",
        detail: SCHOOL,
        note: "Highest grade for a senior project in the faculty, 18/20",
      },
    ],
  },
  {
    heading: "Certification",
    items: [
      {
        title: "Software Engineering Excellence Masterclass",
        period: "Sep 2025",
        detail: "SE² Platform",
        topics:
          "Clean Architecture, SOLID Principles, TypeScript, Node.js, scalable backend design, testing best practices, DevOps basics and enterprise code review practices.",
      },
    ],
  },
];

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <h2 className="section-title" id="education-title">
        Education &amp; Certifications
      </h2>
      <div className="edu-grid">
        {GROUPS.map((group) => (
          <div key={group.heading}>
            <h3 className="edu-group">{group.heading}</h3>
            <ul className="edu-list">
              {group.items.map((item) => (
                <li key={item.title}>
                  <div className="edu-row">
                    <h4>{item.title}</h4>
                    <span className="edu-date">{item.period}</span>
                  </div>
                  <p className="edu-detail">{item.detail}</p>
                  {item.note && <p className="edu-note">{item.note}</p>}
                  {item.topics && <p className="edu-topics">{item.topics}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
