import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 10, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <div className="py-5">
      <div
        className="text-center linebelow position-relative pb-3"
        style={{
          color: "var(--color)",
          fontSize: "40px",
        }}
      >
        SKILLS
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 w-50 mx-auto pt-3 pb-5">
        <div className="skillborder roll" data-aos="fade-down-left">
          HTML
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          CSS
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          JavaScript
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          SQL
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          Git
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          GitHub
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          Java
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          React.js
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          C#
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          ASP.NET
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          BootStrap
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          MySQL
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          SQL Server
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          PHP
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          ADO.NET
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          PhpMyAdmin
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          Sharepoint
        </div>
        <div className="skillborder roll" data-aos="fade-down-left">
          SPFx
        </div>
      </div>
      <div className="" id="projects"></div>
    </div>
  );
}

export default Skills;
