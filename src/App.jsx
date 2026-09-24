import "./App.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import CommandPalette from "./CommandPalette.jsx";

// Order follows what a reviewer checks first: work, proof, tools, credentials, then contact.
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}

export default App;
