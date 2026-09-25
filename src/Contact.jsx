import { useRef, useState } from "react";

// Details mirror the header of public/Hussein_Haidar_CV.pdf.
const EMAIL = "hsenhydr007@gmail.com";
const LINKS = [
  { label: "LinkedIn", text: "linkedin.com/in/hsenhydr", href: "https://www.linkedin.com/in/hsenhydr/", external: true },
  { label: "GitHub", text: "github.com/Hsenhydr", href: "https://github.com/Hsenhydr", external: true },
  { label: "Phone", text: "+961 78976841", href: "tel:+96178976841" },
];

const COPY_SHORTCUT =
  typeof navigator !== "undefined" && /mac|iphone|ipad/i.test(navigator.platform) ? "⌘C" : "Ctrl C";

function Contact() {
  const [copyLabel, setCopyLabel] = useState("Copy");
  const emailRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyLabel("Copied");
    } catch {
      // Clipboard blocked: select the address so Ctrl/Cmd C still works.
      const range = document.createRange();
      range.selectNodeContents(emailRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setCopyLabel(`Press ${COPY_SHORTCUT}`);
    }
    setTimeout(() => setCopyLabel("Copy"), 2000);
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="contact-block">
        <div className="contact-copy">
          <h2 id="contact-title">Hiring for full-stack or security work?</h2>
          <p>Open to full-time roles and freelance projects. Based in Beirut, Lebanon.</p>
          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              Email me
            </a>
            <span className="contact-email">
              <span ref={emailRef}>{EMAIL}</span>
              <button type="button" className="contact-copy-btn" onClick={copyEmail}>
                {copyLabel}
              </button>
              <span className="sr-only" aria-live="polite">
                {copyLabel === "Copied" ? "Email address copied" : ""}
              </span>
            </span>
          </div>
        </div>
        {/* A row under the actions, so the section reads as one block with no dead middle. */}
        <ul className="contact-list">
          {LINKS.map((link) => (
            <li key={link.label}>
              <span className="contact-label">{link.label}</span>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.text}
                {link.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
