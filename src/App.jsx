import { useEffect } from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import StatsStrip from "./StatsStrip.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import CommandPalette from "./CommandPalette.jsx";

function App() {
  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) main.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StatsStrip />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}

export default App;
