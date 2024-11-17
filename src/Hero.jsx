import React from "react";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Hero() {
  const staticText = "Hi, I am ";
  const dynamicText = "Hussein";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 400;
  const deletingSpeed = 300;
  const pauseTime = 1000;

  useEffect(() => {
    let typingTimeout;

    const updateText = () => {
      const currentLength = displayedText.length - staticText.length;

      if (!isDeleting && currentLength < dynamicText.length) {
        setDisplayedText(
          staticText + dynamicText.substring(0, currentLength + 1)
        );
      } else if (isDeleting && currentLength > 0) {
        // Deleting backward for dynamicText
        setDisplayedText(
          staticText + dynamicText.substring(0, currentLength - 1)
        );
      } else if (!isDeleting && currentLength === dynamicText.length) {
        // Pause before starting to delete
        typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      } else if (isDeleting && currentLength === 0) {
        // Restart typing after deletion
        setIsDeleting(false);
      }

      typingTimeout = setTimeout(
        updateText,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    typingTimeout = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, staticText, dynamicText]);

  return (
    <div style={{ backgroundColor: "#070D1B" }} className="py-5">
      {/* image */}
      <div className="d-flex justify-content-center align-items-center pt-3">
        <img
          src="src/assets/ME2.jpg"
          width={"20%"}
          height={"20%"}
          alt="my photo"
          style={{
            borderRadius: "50%",
            outline: "8px dotted var(--color)",
            // filter: "brightness(70%)",
          }}
        />
      </div>

      {/* text */}
      <div className="typewriter-container d-flex justify-content-center pt-3">
        <span className="typewriter-text text-white">
          {staticText}
          <span className="highlight">
            {displayedText.replace(staticText, "")}
          </span>
        </span>
        <span className="cursor"></span>
      </div>

      <div
        className="d-flex justify-content-center align-items-center text-white w-50 mx-auto text-center py-2"
        style={{ fontSize: "16px" }}
      >
        I’m an aspiring full-stack developer with a passion for being a jack of
        all trades. I work hard, taking tasks personally and always pushing to
        improve. Curious by nature and driven by ADHD, I love exploring new
        topics. With a Business Computer degree from Lebanese University, I’m
        excited to grow in tech. As Socrates said, “All I know is that I know
        nothing”—a reminder to keep learning.
      </div>

      {/* links */}
      <div
        className="d-flex justify-content-center align-items-center py-3 gap-4"
        id="about"
      >
        <a href="https://www.linkedin.com/in/hsenhydr/" target="_blank">
          <FaInstagram
            className="text-white icons"
            style={{ fontSize: "35px" }}
          />
        </a>
        <a href="https://www.instagram.com/hsenhydr/" target="_blank">
          <FaLinkedinIn
            className="text-white icons"
            style={{ fontSize: "35px" }}
          />
        </a>
        <a href="https://www.github.com/hsenhydr/" target="_blank">
          <FaGithub className="text-white icons" style={{ fontSize: "35px" }} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
