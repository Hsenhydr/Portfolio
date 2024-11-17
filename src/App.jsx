import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

function App() {
  return (
    <div style={{ backgroundColor: "#070D1B" }}>
      <div style={{ maxHeight: "20vh", minHeight: "10vh" }}>
        <Nav />
      </div>
      <div style={{ maxHeight: "90vh", minHeight: "90vh" }}>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
