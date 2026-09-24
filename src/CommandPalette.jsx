import { useState, useEffect, useRef, useCallback } from "react";

const EMAIL = "hsenhydr007@gmail.com";
const CV_PATH = "/Hussein_Haidar_CV.pdf";

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const overlayRef = useRef(null);
  const inputRef = useRef(null);
  const lastActiveRef = useRef(null);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
    // inert removes the closed palette from tab order and the accessibility tree.
    if (overlayRef.current) overlayRef.current.inert = !open;
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    setCopied(false);
    if (lastActiveRef.current && lastActiveRef.current.focus) {
      lastActiveRef.current.focus();
    }
  }, []);

  const openPalette = useCallback(() => {
    lastActiveRef.current = document.activeElement;
    setQuery("");
    setSelected(0);
    setCopied(false);
    setOpen(true);
  }, []);

  const scrollToId = (id) => {
    close();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ block: "start" });
  };

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  const copyEmail = () => {
    const done = () => {
      setCopied(true);
      setTimeout(close, 700);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, close);
    } else {
      close();
    }
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = "Hussein_Haidar_CV.pdf";
    link.click();
    close();
  };

  const commands = [
    { label: "Back to top", hint: "section", action: () => scrollToId("hero") },
    { label: "Go to Experience", hint: "section", action: () => scrollToId("experience") },
    { label: "Go to Projects", hint: "section", action: () => scrollToId("projects") },
    { label: "Go to Skills", hint: "section", action: () => scrollToId("skills") },
    { label: "Go to Education", hint: "section", action: () => scrollToId("education") },
    { label: "Go to Contact", hint: "section", action: () => scrollToId("contact") },
    { label: copied ? "Copied" : "Copy email address", hint: "clipboard", action: copyEmail },
    { label: "Open GitHub profile", hint: "new tab", action: () => openExternal("https://github.com/Hsenhydr") },
    {
      label: "Open LinkedIn profile",
      hint: "new tab",
      action: () => openExternal("https://www.linkedin.com/in/hsenhydr/"),
    },
    { label: "Download CV", hint: "PDF", action: downloadCv },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  const activeId = filtered[selected] ? `cmdk-opt-${selected}` : undefined;

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (activeId) document.getElementById(activeId)?.scrollIntoView({ block: "nearest" });
  }, [activeId]);

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (openRef.current) close();
        else openPalette();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("cmdk:open", openPalette);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("cmdk:open", openPalette);
    };
  }, [close, openPalette]);

  function handleInputKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selected]) filtered[selected].action();
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      // The input is the only focusable element, so keeping focus here is the focus trap.
      e.preventDefault();
    }
  }

  return (
    <div
      ref={overlayRef}
      className={`cmdk-overlay${open ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="cmdk-modal" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="cmdk-input-row">
          <input
            ref={inputRef}
            className="cmdk-input"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            aria-label="Search commands"
            placeholder="Jump to a section, copy my email, download the CV…"
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <kbd className="cmdk-esc">esc</kbd>
        </div>
        <ul className="cmdk-list" id="cmdk-list" role="listbox" aria-label="Commands">
          {filtered.length === 0 ? (
            <li className="cmdk-empty" role="presentation">
              No matching command
            </li>
          ) : (
            filtered.map((cmd, i) => (
              <li
                key={cmd.hint + cmd.label}
                id={`cmdk-opt-${i}`}
                role="option"
                aria-selected={i === selected}
                className={`cmdk-item${i === selected ? " selected" : ""}`}
                onMouseMove={() => setSelected(i)}
                onClick={cmd.action}
              >
                <span>{cmd.label}</span>
                <span className="cmdk-hint" aria-hidden="true">
                  {cmd.hint}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
