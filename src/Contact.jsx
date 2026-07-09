import React from "react";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-block" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">{"// contact"}</p>
          <h2>Open to the next hard problem.</h2>
          <p>Currently open to freelance projects and full-time roles in full-stack or security-focused engineering.</p>
          <a href="mailto:hsenhydr007@gmail.com" className="btn btn-primary" style={{ marginTop: "22px" }}>
            Email Me →
          </a>
        </div>
        <div className="contact-list">
          <a href="tel:+96178976841">+961 78 976 841</a>
          <a href="https://www.linkedin.com/in/hsenhydr/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/hsenhydr
          </a>
          <a href="https://github.com/Hsenhydr" target="_blank" rel="noopener noreferrer">
            github.com/Hsenhydr
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
