import React from "react";

function Nav() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav className="navbar navbar-expand py-4">
        <div className="container-fluid ">
          <div
            className="mx-auto border border-1 py-1 d-flex gap-5"
            style={{ borderRadius: "9999px", backgroundColor: "white" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item ps-5 pe-3 ">
                <a className=" nav-link navline position-relative" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link " href="#about">
                  About
                </a>
              </li>

              <li className="nav-item px-3">
                <a className="nav-link " href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link " href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item pe-5 ps-3">
                <a className="nav-link " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
