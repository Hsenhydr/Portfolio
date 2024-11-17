import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing
      once: true, // Animation happens only once when scrolling down
    });
  }, []);

  return (
    <div className="py-5">
      <div
        className="text-center linebelow position-relative mb-5 pb-5"
        style={{
          color: "var(--color)",
          fontSize: "40px",
        }}
        id="contact"
      >
        CONTACT ME
      </div>
      <div className="d-flex mx-auto justify-content-around gap-5 align-items-start">
        <div className="form d-flex flex-column align-items-center gap-3 text-white ps-5 ms-5 w-50">
          <form style={{ width: "450px" }} data-aos="fade-right">
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="name@example.com"
                style={{
                  backgroundColor: "#0A101E",
                  border: "2px solid var(--color)",
                }}
              />
              <label htmlFor="Name">Your Name</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Password"
                style={{
                  backgroundColor: "#0A101E",
                  border: "2px solid var(--color)",
                }}
              />
              <label htmlFor="Email">Your Email</label>
            </div>
            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="message"
                style={{
                  height: "100px",
                  backgroundColor: "#0A101E",
                  border: "2px solid var(--color)",
                }}
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn "
                style={{ backgroundColor: "var(--color)" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className=" d-flex flex-column w-50" data-aos="fade-left">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-3 align-items-center my-2">
              <div>
                <MdOutlineMail
                  style={{ fontSize: "50px" }}
                  className="highlight icon p-1"
                />
              </div>
              <div className="">
                <div
                  className=""
                  style={{ color: "var(--color)", fontSize: "19px" }}
                >
                  Email
                </div>
                <div
                  className=""
                  style={{ color: "rgb(169, 173, 184)", fontSize: "16px" }}
                >
                  hsenhydr007gmail.com
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center my-2">
              <div>
                <CiPhone
                  style={{ fontSize: "50px" }}
                  className="highlight icon p-1"
                />
              </div>
              <div className="">
                <div
                  className=""
                  style={{ color: "var(--color)", fontSize: "19px" }}
                >
                  Phone Number
                </div>
                <div
                  className=""
                  style={{ color: "rgb(169, 173, 184)", fontSize: "16px" }}
                >
                  +961 78 976841
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center my-2">
              <div className="">
                <CiLocationOn
                  style={{ fontSize: "50px" }}
                  className="highlight icon p-1"
                />
              </div>
              <div className="">
                <div
                  className=""
                  style={{ color: "var(--color)", fontSize: "19px" }}
                >
                  Location
                </div>
                <div
                  className=""
                  style={{ color: "rgb(169, 173, 184)", fontSize: "16px" }}
                >
                  Beirut, Lebanon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
