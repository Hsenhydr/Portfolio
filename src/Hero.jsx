import React from "react";
import Terminal from "./Terminal.jsx";

function Hero() {
  return (
    <section className="section hero" id="hero">
      <div>
        <p className="hero-eyebrow">{"// full-stack software engineer"}</p>
        <h1>Hussein Haidar</h1>
        <Terminal />
        <p className="sr-only">
          Hussein Haidar — Full-Stack Software Engineer. Building secure, production-scale SaaS
          platforms for regulated public-sector and financial-sector clients. Location: Beirut,
          Lebanon. Email: hsenhydr007@gmail.com. Status: open to freelance and full-time work. The
          panel above is an interactive terminal — type &quot;help&quot; into it for a list of
          commands, or use the buttons below.
        </p>
        <div className="hero-cta">
          <a
            href="/Hussein_Haidar_CV.pdf"
            download="Hussein_Haidar_CV.pdf"
            className="btn btn-primary"
          >
            Download CV
          </a>
          <a href="#projects" className="btn btn-ghost">
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <img src="/Me3.jpg" alt="Hussein Haidar" />
          <div className="duotone-overlay" aria-hidden="true"></div>
        </div>
        <div className="status-chip">
          <span className="status-dot"></span> Available for work
        </div>
      </div>
    </section>
  );
}

export default Hero;
