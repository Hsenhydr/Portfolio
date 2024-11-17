import React from "react";
import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";

function Projects() {
  return (
    <div style={{ backgroundColor: "#0A101E" }} className="py-5">
      <div
        className="text-center linebelow position-relative"
        style={{
          color: "var(--color)",
          fontSize: "40px",
        }}
      >
        PROJECTS
      </div>

      <div className="p-2 d-flex flex-wrap justify-content-center gap-5 py-5">
        <div className="con position-relative">
          <div className="overlay">
            <div className="content text-center px-5 pt-3">
              <h3>HTML</h3>
              <h3>CSS</h3>
            </div>
          </div>
          <img
            src="src/assets/signalImage.png "
            width={"400px"}
            height={"100%"}
            style={{
              borderRadius: "20px",
              border: "8px solid black",
              outline: "2px solid var(--color)",
              borderStyle: "double",
            }}
          />
          <Popup
            trigger={
              <button
                className="btn position-absolute mb-3"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color)",
                }}
              >
                Preview
              </button>
            }
            modal
            overlayStyle={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "none",
            }}
          >
            {(close) => (
              <>
                <BsXLg
                  className="btn"
                  style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "50px",
                  }}
                  onClick={close}
                >
                  X
                </BsXLg>

                <div
                  style={{
                    minHeight: "350px",
                  }}
                  className="d-flex flex-column gap-5 flex-wrap justify-content-center align-items-center bg-dark text-white"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="src/assets/Signal Clone.mp4"
                    title="Signal Clone"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="con position-relative">
          <div className="overlay">
            <div className="content text-center px-5 pt-3 d-flex justify-content-start gap-5">
              <div>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>React.js</h3>
              </div>
              <h3>Firebase</h3>
            </div>
          </div>
          <img
            src="src/assets/tabaraa.png "
            width={"400px"}
            height={"100%"}
            style={{
              borderRadius: "20px",
              border: "8px solid black",
              outline: "2px solid var(--color)",
              borderStyle: "double",
            }}
          />
          <Popup
            trigger={
              <button
                className="btn position-absolute mb-3"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color)",
                }}
              >
                Preview
              </button>
            }
            modal
            overlayStyle={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "none",
            }}
          >
            {(close) => (
              <>
                <BsXLg
                  className="btn"
                  style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "50px",
                  }}
                  onClick={close}
                >
                  X
                </BsXLg>

                <div
                  style={{
                    minHeight: "350px",
                  }}
                  className="d-flex flex-column gap-5 flex-wrap justify-content-center align-items-center bg-dark text-white"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="src/assets/Signal Clone.mp4"
                    title="Signal Clone"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="con position-relative">
          <div className="overlay">
            <div className="content text-center px-5 pt-3">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
          <img
            src="src/assets/signalImage.png "
            width={"400px"}
            height={"100%"}
            style={{
              borderRadius: "20px",
              border: "8px solid black",
              outline: "2px solid var(--color)",
              borderStyle: "double",
            }}
          />
          <Popup
            trigger={
              <button
                className="btn position-absolute mb-3"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color)",
                }}
              >
                Preview
              </button>
            }
            modal
            overlayStyle={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "none",
            }}
          >
            {(close) => (
              <>
                <BsXLg
                  className="btn"
                  style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "50px",
                  }}
                  onClick={close}
                >
                  X
                </BsXLg>

                <div
                  style={{
                    minHeight: "350px",
                  }}
                  className="d-flex flex-column gap-5 flex-wrap justify-content-center align-items-center bg-dark text-white"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="src/assets/Signal Clone.mp4"
                    title="Signal Clone"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="con position-relative">
          <div className="overlay">
            <div className="content text-center px-5 pt-3">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
          <img
            src="src/assets/tabaraa.png "
            width={"400px"}
            height={"100%"}
            style={{
              borderRadius: "20px",
              border: "8px solid black",
              outline: "2px solid var(--color)",
              borderStyle: "double",
            }}
          />
          <Popup
            trigger={
              <button
                className="btn position-absolute mb-3"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color)",
                }}
              >
                Preview
              </button>
            }
            modal
            overlayStyle={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "none",
            }}
          >
            {(close) => (
              <>
                <BsXLg
                  className="btn"
                  style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "50px",
                  }}
                  onClick={close}
                >
                  X
                </BsXLg>

                <div
                  style={{
                    minHeight: "350px",
                  }}
                  className="d-flex flex-column gap-5 flex-wrap justify-content-center align-items-center bg-dark text-white"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="src/assets/Signal Clone.mp4"
                    title="Signal Clone"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </Popup>
        </div>

        <div className="con position-relative">
          <div className="overlay">
            <div className="content text-center px-5 pt-3">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
          <img
            src="src/assets/signalImage.png "
            width={"400px"}
            height={"100%"}
            style={{
              borderRadius: "20px",
              border: "8px solid black",
              outline: "2px solid var(--color)",
              borderStyle: "double",
            }}
          />
          <Popup
            trigger={
              <button
                className="btn position-absolute mb-3"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color)",
                }}
              >
                Preview
              </button>
            }
            modal
            overlayStyle={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "none",
            }}
          >
            {(close) => (
              <>
                <BsXLg
                  className="btn"
                  style={{
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    color: "white",
                    fontSize: "50px",
                  }}
                  onClick={close}
                >
                  X
                </BsXLg>

                <div
                  style={{
                    minHeight: "350px",
                  }}
                  className="d-flex flex-column gap-5 flex-wrap justify-content-center align-items-center bg-dark text-white"
                >
                  <iframe
                    width="560"
                    height="315"
                    src="src/assets/Signal Clone.mp4"
                    title="Signal Clone"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Projects;
