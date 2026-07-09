import React, { useState, useEffect, useRef } from "react";

const WELCOME_SCRIPT = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Hussein Haidar — Full-Stack Software Engineer" },
  { type: "cmd", text: "cat mission.md" },
  {
    type: "out",
    text: "Building secure, production-scale SaaS platforms for\nregulated public-sector and financial-sector clients.",
  },
];

const COMMANDS = {
  help: () =>
    "Available commands:\n" +
    "  whoami            who I am\n" +
    "  cat about.md      short bio\n" +
    "  cat contact.txt   how to reach me\n" +
    "  ls projects       list projects\n" +
    "  ls experience     list roles\n" +
    "  open github       open GitHub profile\n" +
    "  open linkedin     open LinkedIn profile\n" +
    "  download cv       download my resume\n" +
    "  clear             clear the terminal",
  whoami: () => "Hussein Haidar — Full-Stack Software Engineer",
  "cat about.md": () =>
    "Full-stack engineer shipping production SaaS for regulated\npublic-sector and financial-sector clients. Security-focused,\nfull ownership from schema to UI.",
  "cat contact.txt": () =>
    "location  Beirut, Lebanon\nemail     hsenhydr007@gmail.com\nstatus    open to freelance & full-time",
  ls: () => "projects/  experience/  about.md  contact.txt",
  "ls projects": () => "scalable-ecommerce-backend/  rbac-ecommerce-app/  tabaraa/",
  "ls experience": () => "allegiancetek/  apliman/  freelance/",
  "open github": () => {
    window.open("https://github.com/Hsenhydr", "_blank");
    return "opening github.com/Hsenhydr …";
  },
  "open linkedin": () => {
    window.open("https://linkedin.com/in/hsenhydr", "_blank");
    return "opening linkedin.com/in/hsenhydr …";
  },
  "download cv": () => {
    window.open("/Hussein_Haidar_CV.pdf", "_blank");
    return "downloading Hussein_Haidar_CV.pdf …";
  },
};

function Terminal() {
  const [lines, setLines] = useState([]);
  const [typingCmd, setTypingCmd] = useState("");
  const [ready, setReady] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setLines(WELCOME_SCRIPT.map((step) => ({ type: step.type, text: step.text })));
      setReady(true);
      return;
    }

    let stepIdx = 0;
    let charIdx = 0;
    let timeoutId;

    function typeNext() {
      if (stepIdx >= WELCOME_SCRIPT.length) {
        setReady(true);
        return;
      }
      const step = WELCOME_SCRIPT[stepIdx];
      if (step.type === "cmd") {
        if (charIdx < step.text.length) {
          charIdx++;
          setTypingCmd(step.text.slice(0, charIdx));
          timeoutId = setTimeout(typeNext, 26);
        } else {
          setLines((prev) => [...prev, { type: "cmd", text: step.text }]);
          setTypingCmd("");
          charIdx = 0;
          stepIdx++;
          timeoutId = setTimeout(typeNext, 120);
        }
      } else {
        setLines((prev) => [...prev, { type: "out", text: step.text }]);
        stepIdx++;
        timeoutId = setTimeout(typeNext, 220);
      }
    }
    timeoutId = setTimeout(typeNext, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (ready && inputRef.current) inputRef.current.focus();
  }, [ready]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, typingCmd]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    setLines((prev) => [...prev, { type: "cmd", text: raw }]);
    if (!cmd) return;
    historyRef.current.push(raw);
    historyIndexRef.current = historyRef.current.length;

    if (cmd.startsWith("sudo")) {
      setLines((prev) => [...prev, { type: "out", text: "Nice try. Permission denied." }]);
    } else if (cmd === "clear") {
      setLines([]);
    } else if (COMMANDS[cmd]) {
      const result = COMMANDS[cmd]();
      if (result) setLines((prev) => [...prev, { type: "out", text: result }]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "out", text: `bash: ${cmd}: command not found (try "help")` },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndexRef.current > 0) {
        historyIndexRef.current -= 1;
        setInputValue(historyRef.current[historyIndexRef.current]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndexRef.current < historyRef.current.length - 1) {
        historyIndexRef.current += 1;
        setInputValue(historyRef.current[historyIndexRef.current]);
      } else {
        historyIndexRef.current = historyRef.current.length;
        setInputValue("");
      }
    }
  };

  return (
    <div className="terminal-window" onClick={() => inputRef.current && inputRef.current.focus()}>
      <div className="terminal-titlebar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-title">hussein@dev:~</span>
      </div>
      <div className="terminal-body" ref={bodyRef} aria-live={ready ? "polite" : "off"}>
        {lines.map((line, i) =>
          line.type === "cmd" ? (
            <div key={i}>
              <span className="term-prompt">$</span> <span className="term-cmd">{line.text}</span>
            </div>
          ) : (
            <div key={i} className="term-out">
              {line.text}
            </div>
          )
        )}
        {typingCmd && (
          <div>
            <span className="term-prompt">$</span> <span className="term-cmd">{typingCmd}</span>
          </div>
        )}
        {!ready && !typingCmd && lines.length === 0 && (
          <div>
            <span className="term-prompt">$</span>
          </div>
        )}
      </div>
      {ready && (
        <div className="terminal-input-row">
          <span className="term-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="type a command…"
            aria-label="Terminal command input — type help for a list of commands"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="terminal-hint">try: help · whoami · ls projects · open github</div>
    </div>
  );
}

export default Terminal;
