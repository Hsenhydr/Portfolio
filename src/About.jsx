import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 20, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#0A101E" }} className="py-5">
      <div
        className="text-center linebelow position-relative"
        style={{
          color: "var(--color)",
          fontSize: "40px",
        }}
      >
        ABOUT ME
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5">
        <div
          className="d-flex flex-column align-items-end w-50"
          data-aos="fade-right"
        >
          <img src="src/assets/comp.png" />
        </div>
        <div className="d-flex flex-column align-items-start w-50 text-white p-5">
          <div style={{ fontSize: "36px" }} className="" data-aos="fade-left">
            Hi There! I'm Hussein Haidar
          </div>
          <div
            style={{ fontSize: "16px", color: "var(--color)" }}
            className=""
            data-aos="fade-left"
          >
            Aspiring Software Developer | Dedicated Learner
          </div>
          <br />
          <div
            style={{ fontSize: "24px", color: "rgb(169, 173, 184)" }}
            className=""
            data-aos="fade-left"
          >
            I’m working to become a full-stack developer and love being a jack
            of all trades. I consider myself a lone wolf, taking tasks
            personally and always giving my best effort. I’m a hard worker,
            always trying to improve and learn something new. With ADHD, I’m
            constantly curious and exploring different topics. I have a degree
            in Business Computer from the Lebanese University, and I’m excited
            to keep growing in the tech world. As Socrates said, “All I know is
            that I know nothing,” and that keeps me motivated to keep learning
            and evolving.
          </div>
          <br />
          <div
            className="d-flex flex-column gap-3"
            style={{ color: "rgb(169, 173, 184)" }}
          >
            <div style={{ fontSize: "24px" }} className="" data-aos="fade-left">
              <span>Birthday: </span>
              <span className="highlight" style={{ fontSize: "22px" }}>
                21 12 2002
              </span>
            </div>
            <div style={{ fontSize: "24px" }} className="" data-aos="fade-left">
              <span>Phone: </span>
              <span className="highlight" style={{ fontSize: "22px" }}>
                +961 78 976 841
              </span>
            </div>
            <div style={{ fontSize: "24px" }} className="" data-aos="fade-left">
              <span>Languages: </span>
              <span className="highlight" style={{ fontSize: "22px" }}>
                Arabic, English
              </span>
            </div>
            <div style={{ fontSize: "24px" }} className="" data-aos="fade-left">
              <span>Freelance: </span>
              <span className="highlight wobble" style={{ fontSize: "22px" }}>
                Available
              </span>
            </div>
          </div>

          <div className="mx-auto pt-3" data-aos="fade-left">
            <a
              href="src/assets/Hussein Haydar - Developer.pdf"
              download="Hussein_Haidar_CV.pdf"
              id="skills"
            >
              <button
                className="btn px-4 py-2"
                style={{
                  backgroundColor: "var(--color)",
                  borderRadius: "20px",
                  fontSize: "16px",
                }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
