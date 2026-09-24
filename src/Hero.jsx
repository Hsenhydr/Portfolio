function Hero() {
  return (
    <section className="section hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Hussein Haidar</h1>
        <p className="hero-lede">
          {/* A CV-backed number beats an adjective: "5 production SaaS platforms" is the proof a
              reviewer can check. U+2011 non-breaking hyphens keep the "-sector" terms on one line. */}
          <strong>Full‑stack engineer</strong> on 5 production SaaS platforms for regulated public‑sector and
          financial‑sector clients.
        </p>
        <div className="hero-cta">
          <a href="/Hussein_Haidar_CV.pdf" download="Hussein_Haidar_CV.pdf" className="btn btn-primary">
            Download CV
          </a>
          <a href="mailto:hsenhydr007@gmail.com" className="btn btn-ghost">
            Email me
          </a>
        </div>
      </div>
      <img
        className="hero-photo"
        src="/Me3.jpg"
        alt="Portrait of Hussein Haidar"
        width="960"
        height="960"
        fetchPriority="high"
        decoding="async"
      />
    </section>
  );
}

export default Hero;
